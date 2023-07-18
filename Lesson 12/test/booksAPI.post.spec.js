import axios from "axios";
import {expect} from "chai";
import validator from "jsonschema";
import postBooksListSchema from "../data/BooksAPI.post.json" assert { type: 'json' };

describe('POST - Check API endpoint: /api/v1/Books', async()=>{

    let response
    before(async () => {
        response = await axios({
            method: 'Post',
            url: 'https://fakerestapi.azurewebsites.net/api/v1/Books',
            headers: {
                accept: "application/json",
                'Content-Type': "application/json"
            }, 
            data:
                {
                    id: 123,
                    title: "New book",
                    description: "Lorem",
                    pageCount: 234,
                    excerpt: "This is a new book",
                    publishDate: "2023-07-16T17:34:17.763Z"
                  } 
                })
    })
    it("Check that POST response returns 200 Status", async ()=>{
        expect(response.status).to.equal(200)
    }),
    it("Check that POST body schema is valid", async ()=>{
        let isValid = validator.validate(response.data, postBooksListSchema).valid
        expect(isValid).to.equal(true)
    })


})