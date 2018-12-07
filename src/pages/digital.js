import React, { Component } from 'react'
// import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Template from "../components/layout/template"
import PageBanner from '../components/banner/page-banner'

class DigitalPage extends Component {
  render() {
    return (
      <Template location={this.props.location} >
        <Helmet title="Digital | George Smerin" />
        <PageBanner title="Digital" />
        <p>A page about my websites</p>
      </Template>
    )
  }
}

export default DigitalPage

