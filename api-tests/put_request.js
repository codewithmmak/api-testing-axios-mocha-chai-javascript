const axios = require("axios");
const { expect } = require("chai");
const { faker } = require("@faker-js/faker");

describe("PUT API Request Tests", async () => {
    it("should be able update a user", async () => {
        const randomName = faker.name.findName();
        const randomJobTitle = faker.name.jobTitle();
        const res = await axios.put('https://reqres.in/api/users/2',
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