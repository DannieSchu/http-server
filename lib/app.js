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
    // } else if(request.path === '/echo' && request.method === 'POST') {
    //   client.end(createResponse({
    //     status: '200 OK',
    //     contentType: 'application/json',
    //     body:
    //     (`
    //     <html>
    //       <body>
    //         <h1>HELLO Hello hello</h1>
    //       </body>
    //     </html>`)
    //   }));
    } else if(request.path === '/red' && request.method === 'GET') {
      client.end(createResponse({
        status: '200 OK',
        contentType: 'text/plain',
        body:
        (`
        <html>
          <body>
            <h1>Red</h1>
          </body>
        </html>`
        )
      }));
    } else if(request.path === '/green' && request.method === 'GET') {
      client.end(createResponse({
        status: '200 OK',
        contentType: 'text/plain',
        body:
        (`
        <html>
          <body>
            <h1>Green</h1>
          </body>
        </html>`
        )
      }));
    } else if(request.path === '/blue' && request.method === 'GET') {
      client.end(createResponse({
        status: '200 OK',
        contentType: 'text/plain',
        body:
        (`
        <html>
          <body>
            <h1>Blue</h1>
          </body>
        </html>`
        )
      }));
    } else {
      client.end(createResponse({ 
        status: '404 Not Found', 
        contentType: 'text/plain', 
        body: 'Not Found' 
      }));
    }
  });
});

module.exports = app;
