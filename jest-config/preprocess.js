const babelOptions = {
  presets: ["babel-preset-env", "babel-preset-latest", "babel-preset-react"],
  plugins: [
      "transform-class-properties",
    ],
  }
  
  module.exports = require("babel-jest").createTransformer(babelOptions)