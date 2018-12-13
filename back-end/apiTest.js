const request = require('supertest');
const app = require('./server');

describe('POST /api/auth/register', function() {
     it('responsed with 400 not created, invalid email', function(done) {
        let data = {
            login: 'MAx',
            password: 'Kolnako',
            email: 'sasda.pl'
        }
        request(app)
            .post('/api/auth/register')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .expect(['"email" must be a valid email'])
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });

    it('responsed with 400 not created, email is not allowed to be empty', function(done) {
        let data = {
            login: 'MAx',
            password: 'Kolnako',
            email: ''
        }
        request(app)
            .post('/api/auth/register')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .expect(["\"email\" is not allowed to be empty", '"email" must be a valid email'])
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });

    it('responsed with 400 not created, invalid password', function(done) {
        let data = {
            login: 'MAx',
            password: '',
            email: 'test@sasda.pl'
        }
        request(app)
            .post('/api/auth/register')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .expect(['\"password\" is not allowed to be empty', 
                    "\"password\" length must be at least 5 characters long"])
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });

    it('responsed with 400 not created, login is not allowed to be empty', function(done) {
        let data = {
            login: '',
            password: 'asdfg',
            email: 'test@sasda.pl'
        }
        request(app)
            .post('/api/auth/register')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .expect(['\"login\" is not allowed to be empty',
                    "\"login\" length must be at least 2 characters long"])
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });

    it('responsed with 400 not created, login must be at least 2 characters long', function(done) {
        let data = {
            login: 'B',
            password: 'asdfg',
            email: 'test@sasda.pl'
        }
        request(app)
            .post('/api/auth/register')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .expect(["\"login\" length must be at least 2 characters long"])
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});