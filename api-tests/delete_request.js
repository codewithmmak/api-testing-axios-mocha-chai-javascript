const axios = require("axios");
const { expect } = require("chai");

describe("DELETE API Request Tests", async () => {
    it("should be able delete user with id 2", async () => {
        const res = await axios.delete('https://reqres.in/api/users/2');
        console.log(res.data);
        expect(res.status).equal(204);
    })
})