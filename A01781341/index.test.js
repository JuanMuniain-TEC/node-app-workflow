const request = require('supertest')
const app = require('./index.js')

describe('GET /', () => {
  it('should respond with "This is my express app"', async () => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200)
    expect(response.text).toBe('This is my express app.')
  })
})

describe('GET /hello', () => {
  it('should respond with "Hello munij"', async () => {
    const response = await request(app).get('/hello')
    expect(response.status).toBe(200)
    expect(response.text).toBe('Hello munij')
  })
})
