const setupApi = require('./setupApi')
const config = require('config')
const autopilotapikey = config.get('autopilotapikey')

const server = setupApi({ autopilotapikey }).listen(4040, () => {
  const { address, port } = server.address()
  console.log(`Environment = ${process.env.NODE_ENV}`)
  console.log(`Running a server at http://${address}:${port}`)
})
