const hello = require('@leanjs/hello')

function world() {
  console.log(`${hello} world 🎉`)
  return `${hello} world 🎉`
}

module.exports = world
