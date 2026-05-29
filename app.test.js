const request = require('supertest');
const app = require('./app');

describe('PipelineIQ test app', () => {
  test('GET /health returns ok', async () => {
    const response = await request(app).get('/health');

    expect(response.status).toBe(200);
    expect(response.body.status).toBe('ok');
  });

  test('GET / returns greeting', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.body.message).toContain('PipelineIQ');
  });
});
