module.exports = {
  siteMetadata: {
    title: `Personal website of Stanislav Panchenko`,
    description: `Personal website of Stanislav Panchenko`,
    author: `Stanislav Panchenko mail@stanisalvpanchenko.de`,
    url: "http://www.stanislavpanchenko.de",
    twitterUsername: "@rilexus",
    keywords: 'Stanislav Panchenko, Web Developer, Aachen, Developer, Programmierer',
    revised: `Stanislav Panchenko: ${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
    identifierURL: 'www.stanislavpanchenko.de',
    category: '',
    rating: 'Safe For Kids',
    ogLocality: 'Aachen Germany'
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        // jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
  ],
}
