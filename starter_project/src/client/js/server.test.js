import request from 'supertest';
import app from '../src/server/index'; // Assuming index.js exports the Express app

test('POST /analyze returns sentiment data', async () => {
    const response = await request(app)
        .post('/analyze')
        .send({ url: 'https://example.com' });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('sentiment');
});

test('POST /analyze handles invalid data', async () => {
    const response = await request(app)
        .post('/analyze')
        .send({});
    expect(response.statusCode).toBe(400);
});
