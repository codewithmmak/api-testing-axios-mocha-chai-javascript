var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('config/env.properties');

const axios = require("axios");
const { expect } = require("chai");

describe("Base URL from Property File Tests", async () => {
    it("should be able get baseUrl from property file", async () => {
        console.log(properties.get("baseUrl"));
        const res = await axios.get(properties.get("baseUrl") + '/users');
        console.log(res.data);
        expect(res.status).equal(200);
        expect(res.data.page).equal(1);
        expect(res.data.per_page).equal(6);
    })
})