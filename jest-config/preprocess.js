const babelOptions = {
    plugins: [
      "transform-class-properties"
    ],
    presets: ["babel-preset-env", "babel-preset-latest", "babel-preset-react"],
  }
  
  module.exports = require("babel-jest").createTransformer(babelOptions)