const path = require('path')

module.exports = {
  env: {
    WORDPRESS_HOST: 'http://localhost',
    WORDPRESS_GRAPHQL_ENDPOINT: 'http://localhost/en/graphql',

  },
  images: {
    domains: ['http://localhost', 'localhost']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "styles/styles.scss";`,
  }
}
