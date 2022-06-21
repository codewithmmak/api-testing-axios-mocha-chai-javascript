const axios = require("axios");
const { expect } = require("chai");

describe("GET API Request Tests", async () => {
    it("should be able get user list", async () => {
        const res = await axios.get('https://reqres.in/api/users');
        console.log(res.data);
        expect(res.status).equal(200);
        expect(res.data.page).equal(1);
        expect(res.data.per_page).equal(6);
    })
})