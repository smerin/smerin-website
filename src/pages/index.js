import React, { Component } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/page/seo'
import HomeBanner from '../components/banner/home-banner'
import Template from '../components/layout/template'
import PostGrid from '../components/posts/post-grid'

class HomePage extends Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Template location={this.props.location} >
        <SEO title="Homepage" />
        <HomeBanner />
        <PostGrid posts={posts} />
      </Template>
    )
  }
}

export default HomePage;

export const homeQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }, limit: 3) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
             ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
