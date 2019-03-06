module.exports = {
  siteMetadata: {
    title: 'The Wonder Years References',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-firestore',
      options: {
        credential: require("./firebase-key.json"),
        types: [
          {
            type: 'Pins',
            collection: 'pins',
            map: doc => ({
              lat: doc.lat,
              link: doc.link,
              lng: doc.lng,
              name: doc.name,
              type: doc.type,
            }),
          }
        ],
      },
    },
  ],
}
