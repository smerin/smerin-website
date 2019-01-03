import React, { Component } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import style from "./mailchimp.module.scss";

class MailchimpForm extends Component {
  state = {
    email: "",
    submitting: false
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ submitting: true });

    const response = await addToMailchimp(this.state.email);
    console.log(response);

    this.setState({
      ...response,
      submitting: false
    });

    if (response.result === "success") {
      this.setState({ email: "" });
    }
  };
  render() {
    const { email, submitting, msg } = this.state;
    return (
      <div className={style.mailchimp}>
        <form className={style.form} onSubmit={e => this.handleSubmit(e)}>
          <fieldset disabled={submitting}>
            <div className={style.inputs}>
              <input name="email" value={email} onChange={this.saveToState} />
              <button type="submit">
                <FaPaperPlane />
              </button>
            </div>
          </fieldset>
        </form>
        {msg && (
          <div className={style.message}>
            <FaCheckCircle />
            <p dangerouslySetInnerHTML={{ __html: msg }} />
          </div>
        )}
      </div>
    );
  }
}

export default MailchimpForm;
