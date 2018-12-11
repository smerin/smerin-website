import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import get from "lodash/get";
import SEO from "../components/page/seo";
import HomeBanner from "../components/banner/home-banner";
import Template from "../components/layout/template";
import PostGrid from "../components/posts/post-grid";

class HomePage extends Component {
  render() {
    const posts = get(this, "props.data.allContentfulBlogPost.edges");

    return (
      <Template location={this.props.location}>
        <SEO title="Homepage" />
        <HomeBanner />
        <div className="container">
          <div className="content">
            <h2>My story so far...</h2>
            <p>
              I've wanted to be a musician since I first picked up the guitar.
              The realities of that dream have taken me on a long journey of
              learning new skills - design and marketing, website development,
              event production, audio engineering, photography, videography and
              more. On top of that, I've never settled on a favourite type of
              music, and am always learning about different music and traditions
              from all around the world, new styles of guitar playing and new
              instruments such as the Kora, a type of harp from West Africa.
            </p>
            <p>
              Recently I have developed a burning desire to share some of the
              things I've learnt with the wider world. In particular, I want to
              help musicians learn the skills and techniques for self-promotion
              (such as building a website, using graphic design tools, and audio
              / video production). I'd also like to inspire some guitarists to
              learn some different styles of playing from around the world, and
              also share some of the music and songs I've learnt on my travels
              in Senegal and the Gambia.
            </p>
            <p>
              So please have a look around and get in touch if you have any
              ideas or feedback. If you'd like some more regular updates I have
              a mailing list, or you can connect on various social networks.
            </p>
            <p>
              Enjoy!
              <br />
              George 🔥
            </p>
          </div>
        </div>
        <PostGrid posts={posts} />
      </Template>
    );
  }
}

export default HomePage;

export const homeQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          previewImage {
            fluid(maxWidth: 700, maxHeight: 400, resizingBehavior: SCALE) {
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
`;
