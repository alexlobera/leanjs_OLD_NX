require(`@babel/register`)({
  presets: ['@babel/preset-react', '@babel/preset-env'],
})

module.exports = require(`./gatsby-node.jsx`)
