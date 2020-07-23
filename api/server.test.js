const supertest = require('supertest')

const server = require('./server.js')

describe('server', function () {
    it('runs the test', function () {
        expect(true).toBe(true)
    })

    describe('GET /', () => {
        it('should respond with 200 OK', () => {
            return supertest(server)
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })

        it('should respond with JSON', () => {
            return supertest(server)
                .get('/')
                .then(res => {
                    expect(res.type).toMatch(/json/i)
                })
        })

        it('should respond with api: "up"', () => {
            return supertest(server)
                .get('/')
                .then(res => {
                    expect(res.body.api).toBe('up')
                })
        })
    })
})