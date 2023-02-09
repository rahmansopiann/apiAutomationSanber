const { expect } = require("chai");
const { describe, it } = require ('mocha');

describe('App', function () {
    it ('App return Welcome to api automation', async () => {
        let response = "Welcome to api automation";
        expect(response).to.include("automation")
    })
})