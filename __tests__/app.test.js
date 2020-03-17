const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('responds with hi', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual({
          body: 'hi'
        });
      });
  });
});

