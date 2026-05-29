import { NextRequest, NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';

// Configure Mailchimp - these should be set in environment variables
const apiKey = process.env.MAILCHIMP_API_KEY;
const listId = process.env.MAILCHIMP_LIST_ID;
const server = process.env.MAILCHIMP_SERVER_PREFIX; // e.g., 'us1'

if (apiKey && server) {
  mailchimp.setConfig({
    apiKey,
    server,
  });
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    if (!apiKey || !listId || !server) {
      // For development, just return success
      console.log('Mailchimp not configured. Would subscribe:', email);
      return NextResponse.json(
        { message: 'Mailchimp not configured. Email logged to console.' },
        { status: 200 }
      );
    }

    await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: 'subscribed',
    });

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Mailchimp error:', error);

    // Handle Mailchimp specific errors
    if (error && typeof error === 'object' && 'response' in error) {
      const mailchimpError = error as { response?: { body?: { title?: string } } };
      const errorTitle = mailchimpError.response?.body?.title;
      if (errorTitle === 'Member Exists') {
        return NextResponse.json(
          { error: 'This email is already subscribed.' },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}
