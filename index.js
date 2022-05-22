const http = require('http');
const requestListener = require('./requestListener');

const PORT = process.env.PORT || 5000;

const httpServer = http.createServer(requestListener);

httpServer.listen(PORT, () =>
  console.log(`Server app is listening ${PORT} port`)
);
