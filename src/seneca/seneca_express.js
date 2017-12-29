const Seneca = require('seneca')
const SenecaWeb = require('seneca-web')
const Express = require('express')
const seneca = Seneca()
seneca.use(SenecaWeb, {
  context: Express(),
  adapter: require('seneca-web-adapter-express')
})
seneca.ready(() => {
  const app = seneca.export('web/context')()
  app.listen(3000)
})