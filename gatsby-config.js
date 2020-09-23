module.exports = {
  siteMetadata: {
    title: "My Blog",
    author: "Ari Asril",
    description: "My first and main blog.",
    siteUrl: "https://pratama.gtsb.io",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/airilsra",
      },
      {
        name: "github",
        url: "https://github.com/aasril"
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-theme-blog",
      options: {
      	  basePath: "/blog",
      	  preset: "@theme-ui/preset-funk",
      	  prismPreset: "prism-okaidia"
	  },
    },
  ],
}
