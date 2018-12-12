import React, { Component } from "react";
import { graphql } from "gatsby";
import SEO from "../components/page/seo";
import Template from "../components/layout/template";
import PageBanner from "../components/banner/page-banner";

class DigitalPage extends Component {
  render() {
    const { banner, image } = this.props.data;

    return (
      <Template location={this.props.location}>
        <SEO title="Digital" />
        <PageBanner
          title="Digital"
          subtitle="I like to make websites, hit me up!"
          banner={banner}
          image={image}
        />
        <div className="container">
          <div className="content">
            <h1>Front-end / React JS developer from Bristol</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </Template>
    );
  }
}

export default DigitalPage;

export const digitalBannerQuery = graphql`
  query {
    banner: file(relativePath: { eq: "digital-banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image: file(relativePath: { eq: "digital-banner-image-turquoise.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
