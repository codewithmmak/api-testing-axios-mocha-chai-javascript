const axios = require("axios");
const { expect } = require("chai");
const { faker } = require("@faker-js/faker");

describe("POST API Request Tests", async () => {
    it("should be able post a user", async () => {
        const randomName = faker.name.findName();
        const randomJobTitle = faker.name.jobTitle();
        const res = await axios.post('https://reqres.in/api/users',
            {
                "name": randomName,
                "job": randomJobTitle
            }
        ).then(res => res.data)
        console.log(res);
        expect(res.name).equal(randomName);
        expect(res.job).equal(randomJobTitle);
    })
})