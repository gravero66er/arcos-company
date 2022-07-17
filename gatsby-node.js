const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Posts {
      allContentfulPost {
        nodes {
          slug
        }
      }
    }
  `)

  data.allContentfulPost.nodes.forEach(node => {
    actions.createPage({
      path: node.slug,
      component: path.resolve('./src/templates/news-single-page.js'),
      context: { slug: node.slug },
    })
  })
}
