const request = require('supertest');
const { expect, assert } = require("chai");
const { describe, it } = require ('mocha');
const data = require('../data/categoriesData.js');
const sup = require('../data/support.js');
const id = require('faker/lib/locales/id_ID/index.js');

const validData = data.category_data_2
const invalidData = data.invalid_data
const baseurl = sup.base_url
const token = sup.token
const invalidToken = sup.invalidToken
const forGet = data.forGet
const forPut = data.forPut
const forDelete = data.forDelete[1]


describe('POST/Category', () => {
    it('POST/Category with valid data', async () => {
        return request(baseurl)
        .post('/categories')
        .set( "Authorization", "Bearer " + token )
        .send(validData)
        .then(async(response) => {
            expect((await response).status).to.equal(201)
            expect((await response).body.status).to.equal("success")
            expect((await response).body.message).to.equal("Category berhasil ditambahkan")
        })
    }),
    it('POST/Category with invalid data', async () => {
        return request(baseurl)
        .post('/categories')
        .set( "Authorization", "Bearer " + token )
        .send(invalidData)
        .then(async(response) => {
            expect((await response).status).to.equal(400)
            expect((await response).body.status).to.equal("fail")
            expect((await response).body.message).to.equal("\"name\" is not allowed to be empty")
        })
    })
})

describe('GET/Category by id', () => {
    it('GET/Category with valid id', async () => {
        return request(baseurl)
        .get('/categories/'+ forGet)
        .set( "Authorization", "Bearer " + token )
        .then(async(response) => {
            expect((await response).status).to.equal(200)
            expect((await response).body.status).to.equal("success")
            expect((await response).body.data.category.name).to.equal('Umum')
        })
    }),
    it('GET/Category with invalid id', async () => {
        return request(baseurl)
        .get('/categories/cd866e23-dc7f-4b2d-be0f-345e6ba23b0')
        .set( "Authorization", "Bearer " + token )
        .then(async(response) => {
            expect((await response).status).to.equal(404)
            expect((await response).body.status).to.equal("fail")
            expect((await response).body.message).to.equal("id tidak valid")
        })
    })
})

describe('PUT/Category', () => {
    it('PUT/Category with valid data', async () => {
        return request(baseurl)
        .put('/categories/'+ forPut)
        .set( "Authorization", "Bearer " + token )
        .send({
            "name": "test update",
            "description": "test update"
        })
        .then(async(response) => {
            expect((await response).status).to.equal(200)
            expect((await response).body.status).to.equal("success")
            expect((await response).body.data.name).to.equal("test update")
        })
    }),
    it('PUT/Category with invalid token', async () => {
        return request(baseurl)
        .put('/categories/'+ forPut)
        .set( "Authorization", "Bearer " + invalidToken )
        .send(invalidData)
        .then(async(response) => {
            expect((await response).status).to.equal(401)
            expect((await response).body.error).to.equal("Unauthorized")
            expect((await response).body.message).to.equal("Invalid token structure")
        })
    })
})

describe('DELETE/Category', () => {
    it('DELETE/Category with valid id', async () => {
        return request(baseurl)
        .get('/categories/'+ forDelete)
        .set( "Authorization", "Bearer " + token )
        .then(async(response) => {
            expect((await response).status).to.equal(200)
            expect((await response).body.status).to.equal("success")
            expect((await response).body.data).to.be.an('object')
        })
    }),
    it.only('DELETE/Category with invalid id', async () => {
        return request(baseurl)
        .get('/categories/cd866e23-dc7f-4b2d-be0f-345e6ba23b')
        .set( "Authorization", "Bearer " + token )
        .then(async(response) => {
            expect((await response).status).to.equal(404)
            expect((await response).body.status).to.equal("fail")
            expect((await response).body.message).to.equal("id tidak valid")
        })
    })
})