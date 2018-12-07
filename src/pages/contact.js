import React, { Component } from 'react'
// import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Template from "../components/layout/template"
import PageBanner from '../components/banner/page-banner'

class ContactPage extends Component {
  render() {
    return (
      <Template location={this.props.location} >
        <Helmet title="Contact | George Smerin" />
        <PageBanner title="Contact" />
        <p>Contact me</p>
      </Template>
    )
  }
}

export default ContactPage

