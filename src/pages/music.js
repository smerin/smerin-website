import React, { Component } from 'react'
// import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Template from "../components/layout/template"
import PageBanner from '../components/banner/page-banner'

class MusicPage extends Component {
  render() {
    return (
      <Template location={this.props.location} >
        <Helmet title="Music | George Smerin" />
        <PageBanner title="Music" />
        <p>I play music</p>
      </Template>
    )
  }
}

export default MusicPage

