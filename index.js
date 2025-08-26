const server = require('./api/server');

const port = 9000;

if (!module.parent) {
  server.listen(port, () => {
    console.log(`\n*** Server running on port ${port} ***\n`);
  });
}

module.exports = server;
