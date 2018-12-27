import React, { Component } from "react";
import { graphql } from "gatsby";
import SEO from "../components/page/seo";
import Template from "../components/layout/template";
import PageBanner from "../components/banner/page-banner";
import WebsitesContent from "../components/content/websites";

class DigitalPage extends Component {
  render() {
    const { banner } = this.props.data;

    return (
      <Template location={this.props.location}>
        <SEO title="Websites" />
        <PageBanner
          title="Websites"
          subtitle="I design and build websites, and love learning the best new tools and frameworks."
          banner={banner}
        />
        <WebsitesContent />
      </Template>
    );
  }
}

export default DigitalPage;

export const websitesBannerQuery = graphql`
  query {
    banner: file(relativePath: { eq: "websites-banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
