import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import Img from 'gatsby-image';
import Template from '../components/layout/template';
import style from './blog-post.module.scss';

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost');
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');

    return (
      <Template location={this.props.location}>
        <div>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div className={style.blogBanner}>
            <Img alt={post.title} fluid={post.heroImage.fluid} />
          </div>
          <div className="container">
            <div className="content">
              <h1>{post.title}</h1>
              <p>
                <strong>{post.publishDate}</strong>
              </p>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.body.childMarkdownRemark.html,
                }}
              />
            </div>
          </div>
        </div>
      </Template>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180) {
          ...GatsbyContentfulFluid
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
