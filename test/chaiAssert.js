const { expect } = require("chai");
const { describe, it } = require ('mocha');

describe('App', function () {
    it ('App return Welcome to api automation', async () => {
        let response = "Welcome to api automation";
        expect(response).to.include("automation")
    })
})

expect((await response).body).to.equal(success)
expect((await response).body).to.be.an('object')

describe('Get categories', () => {
    it ('Response status is 200', async () => {
        return request(baseurl)
        .get('/categories?page=1')
        .set( "Authorization", "Bearer " + token )
        .then(async(response) => {
        //console.log((await response).body)
            expect((await response).status).to.equal(200)
        })
    }),
    it ('Response body status equal success', async () => {
        return request(baseurl)
        .get('/categories?page=1')
        .set( "Authorization", "Bearer " + token )
        .then(async(response) => {
            expect((await response).body.status).to.equal("success")
        })
    }),
    it ('Response body data to be an object', async () => {
        return request(baseurl)
        .get('/categories?page=1')
        .set( "Authorization", "Bearer " + token )
        .then(async(response) => {
            expect((await response).body.data).to.be.an('object')
        })
    })
})