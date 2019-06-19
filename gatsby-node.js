/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 const path = require("path")

 exports.createPages = ({ graphql, actions }) => {
   const { createPage } = actions

   return new Promise((resolve, reject) => {
     resolve(
       graphql(
         `
           {
             allFile(filter: {sourceInstanceName: {eq: "pages"}}) {
               edges {
                 node {
                   childMdx {
                     id
                     frontmatter {
                       slug
                     }
                   }
                 }
               }
             }
           }
         `
       ).then(result => {
         if (result.errors) {
           console.error(result.errors)
           reject(result.errors)
         }

         result.data.allFile.edges.forEach(({ node }) => {
           createPage({
             path: node.childMdx.frontmatter.slug,
             component: path.resolve(`./src/layouts/page-template.js`),
             context: { id: node.childMdx.id },
           })
         })
       })
     )
   })
 }
