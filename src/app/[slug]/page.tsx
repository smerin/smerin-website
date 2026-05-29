import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts';
import ContentFeature from '@/components/ContentFeature';
import Mailchimp from '@/components/Mailchimp';
import styles from './page.module.css';

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.frontmatter.seoTitle || post.frontmatter.title,
    description: post.frontmatter.seoDescription || post.frontmatter.excerpt,
    openGraph: {
      type: 'article',
      images: post.frontmatter.previewImage ? [post.frontmatter.previewImage] : [],
    },
  };
}

// Custom component to handle YouTube embeds
function YouTubeEmbed({ url }: { url: string }) {
  // Extract video ID from various YouTube URL formats
  let videoId = '';
  if (url.includes('youtube.com/embed/')) {
    videoId = url.split('youtube.com/embed/')[1]?.split('?')[0] || '';
  } else if (url.includes('youtube.com/watch?v=')) {
    videoId = url.split('v=')[1]?.split('&')[0] || '';
  } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1]?.split('?')[0] || '';
  }

  if (!videoId) return null;

  return (
    <div className="video-container">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

// Process markdown content to handle custom YouTube syntax
function processContent(content: string): string {
  // Convert `youtube:URL` syntax to a custom component placeholder
  return content.replace(
    /`youtube:(https?:\/\/[^`]+)`/g,
    (_, url) => `<YouTubeEmbed url="${url}" />`
  );
}

// MDX components
const components = {
  YouTubeEmbed,
};

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content } = post;
  const processedContent = processContent(content);

  return (
    <>
      <div className={styles.banner}>
        {frontmatter.banner && (
          <Image
            src={frontmatter.banner}
            alt={frontmatter.title}
            width={1920}
            height={800}
            className={styles.bannerImage}
            priority
          />
        )}
      </div>
      <div className="container">
        <div className={styles.content}>
          <h1>{frontmatter.title}</h1>
          <div className="blog-post-content">
            <MDXRemote
              source={processedContent}
              components={components}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </div>
          <ContentFeature>
            <h3>Monthly newsletter</h3>
            <p>
              I&apos;d love to send you my latest posts, music and videos in a
              monthly email. Guaranteed no spam and you can unsubscribe at any
              time.
            </p>
            <Mailchimp />
          </ContentFeature>
        </div>
      </div>
    </>
  );
}
