const rupture = require("rupture")

module.exports = {
  siteMetadata: {
    title: `euphorika`,
    description: 'euphorika Brand Page',
    author: 'euphorika communications UG',
    email: 'hello@markenbegeisterung.de',
    phone: '040/284 193 590',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Playfair Display Regular', 'Montserrat'],
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `home-fullpage`,
        path: `${__dirname}/src/data/home/fullpage`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `home-scrollingtext`,
        path: `${__dirname}/src/data/home/scrollingtext`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-stylus",
      options: {
        use: [rupture()],
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/layouts/default.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2048,
            }
          }
        ],
      }
    },
    'gatsby-plugin-offline',
  ],
}
