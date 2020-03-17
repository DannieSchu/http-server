const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('retrieves plain text greeting', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual(
          'hi'
        );
      });
  });
  // it('creates echo json', () => {
  //   return request(app)
  //     .post('/echo')
  //     .then(res => {
  //       expect(res.body).toEqual(
  //         `<html>
  //         <body>
  //           <h1>HELLO Hello hello</h1>
  //         </body>
  //       </html>`
  //       );
  //     });
  // });
  it('retrieves red', () => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual(`
        <html>
          <body>
            <h1>Red</h1>
          </body>
        </html>`
        );
      });
  });
  it('retrieves green', () => {
    return request(app)
      .get('/green')
      .then(res => {
        expect(res.text).toEqual(`
        <html>
          <body>
            <h1>Green</h1>
          </body>
        </html>`
        );
      });
  });
  it('retrieves blue', () => {
    return request(app)
      .get('/blue')
      .then(res => {
        expect(res.text).toEqual(`
        <html>
          <body>
            <h1>Blue</h1>
          </body>
        </html>`
        );
      });
  });
});
