module.exports = {
  siteMetadata: {
    title: `Guftagoo bitcehs`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
          `opensans`
        ]
      }
    }
  ]
}