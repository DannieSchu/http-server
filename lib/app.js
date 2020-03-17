const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(client => {
  client.on('data', data => {
    const request = parseRequest(data.toString());

    if(request.path === '/' && request.method === 'GET') {
      client.end(createResponse({
        status: '200 OK',
        contentType: 'text/plain',
        body: 'hi'
      }));
    }
    // client.end(createResponse({ 
    //   status: '404 Not Found', 
    //   contentType: 'text/plain', 
    //   body: 'Not Found' 
    // }));
  });
});

module.exports = app;
