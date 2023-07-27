import axios from "axios";
import {expect} from "chai";
import validator from "jsonschema";
import putBookSchema from "../data/BooksAPI.put.json" assert { type: 'json' };

describe('PUT - Check API endpoint: /api/v1/Books', async()=>{
    let config = {
        headers:
           {
               accept: "*/*",
               'Content-Type': "application/json; v=1.0"
           },
                id: 123,
                title: "I just put a book to the DB",
                description: "string",
                pageCount: 123456,
                excerpt: "put",
                publishDate: "2023-07-17T13:25:16.405Z"
        }
   let response;
   before(async()=>{
    response = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Books/123', config)
   })
    it('Check that PUT response returns 200 Status', async ()=>{
        expect(response.status).to.equal(200)
    })
    it('Check that PUT body schema is valid', async ()=>{
        let isValid = validator.validate(response.data, putBookSchema).valid
        expect(isValid).to.equal(true)
    })
})
