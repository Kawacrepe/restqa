const express = require('express')
const Controllers = require('./controllers')

module.exports = express.Router()
  .get('/version', Controllers.version)
  .get('/api/restqa/steps', Controllers.steps)
  .post('/api/restqa/generate', Controllers.generate)
  .post('/api/restqa/install', Controllers.install)
  .post('/api/restqa/run', Controllers.run)
  .get('/api/info', Controllers.info)
