const config = require('config')
const autopilotapikey = config.get('autopilotapikey')
const bodyParser = require('body-parser')

const { setupApi } = require('./setupApi')
const middlewares = [bodyParser.json()]

const server = setupApi({ autopilotapikey, middlewares }).listen(4040, () => {
  const { address, port } = server.address()
  console.log(`Environment = ${process.env.NODE_ENV}`)
  console.log(`Running a server at http://${address}:${port}`)
})
