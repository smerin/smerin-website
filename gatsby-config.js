// Overwrite the Contentful config with environment variables if they exist
// contentfulConfig = {
//   spaceId: process.env.GASTBY_CONTENTFUL_SPACE_ID,
//   accessToken: process.env.GASTBY_CONTENTFUL_DELIVERY_TOKEN
// };

// const { spaceId, accessToken } = contentfulConfig;

// if (!spaceId || !accessToken) {
//   throw new Error(
//     "Contentful spaceId and the delivery token need to be provided."
//   );
// }

module.exports = {
  siteMetadata: {
    title: "George Smerin",
    titleTemplate: "%s | George Smerin",
    description: "Music videos and lessons from all around the world",
    url: "https://www.smerin.com",
    image: "/images/george.jpg",
    twitterUsername: "@georgesmerin"
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    // {
    //   resolve: "gatsby-source-contentful",
    //   options: contentfulConfig
    // },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/styles/typography"
      }
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://smerin.us7.list-manage.com/subscribe/post?u=a0980efdba90a553e9659ac7e&amp;id=b2e86e08f0"
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-11627534-6"
      }
    }
  ]
};
