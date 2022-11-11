module.exports = {
    title: 'Hello World',
    description: 'Just playing around',
    configureWebpack: {
        resolve: {
          alias: {
            '@alias': 'path/to/some/dir'
          }
        }
      }
}