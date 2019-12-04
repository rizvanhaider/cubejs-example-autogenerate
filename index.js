const CubejsServer = require('@cubejs-backend/server');
const fetch = require('node-fetch');
let version = "999";
let sversion = async () => {

  return new Promise(async (resolve, reject) => {
    return resolve(await (await fetch('http://127.0.0.1:8080/api.json')).json())
  })
}

const tenantIdToDbVersion = {
  version: "vsersion1"
};

const server = new CubejsServer({
  logger: (msg, params) => {
    console.log(`${msg}: ${JSON.stringify(params)}`);
  },
  schemaVersion: () => tenantIdToDbVersion.version,
  checkAuthMiddleware: (req, res, next) => {
    tenantIdToDbVersion.version = req.body.authInfo.dbversion
    return next && next();
  }
});

server.listen().then(({ port }) => {
  console.log(`🚀 Cube.js server is listening on ${port}`);

});


