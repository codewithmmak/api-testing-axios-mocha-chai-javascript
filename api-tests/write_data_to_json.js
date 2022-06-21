const axios = require("axios");
const { expect } = require("chai");
const { faker } = require("@faker-js/faker");
const fs = require("fs");
const postResData = require("../response-data/post_response_data.json");

describe("Write Data Tests", async () => {
    it("should be able write data to JSON", async () => {
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

        postResData.name = res.name; // get and set the token to env variable
        postResData.job = res.job;
        postResData.id = res.id;
        postResData.createdAt = res.createdAt;
        fs.writeFileSync("./response-data/post_response_data.json", JSON.stringify(postResData)); // write the post response data to the post_response_data.json file

    })
})