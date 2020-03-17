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
});

