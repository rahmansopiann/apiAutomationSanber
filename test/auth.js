const request = require('supertest');
const app = require('../app');
const expect = require('chai').expect;

const baseurl = 'https://kasir-api.belajarqa.com'

describe('Login API', function() {
    it('Should success if credential is valid', async function(){
        const res = await chai.request(baseurl)
           .post('/authentications')
           .set('Accept', 'application/json')
           .set('Content-Type', 'application/json')
           .send({ username: 'rahmansopian6@gmail.com', password: 'S4PU74G4T' })
           .expect(200)
           .expect('Content-Type', /json/)
           .expect(function(res) {
              expect(res.body).not.to.be.empty;
              expect(res.body).to.be.an('object');
           })
    }); 
});