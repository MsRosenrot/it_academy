import axios from "axios";
import {expect} from "chai";
import validator from "jsonschema";
import getBooksListSchema from "../data/BooksAPI.get.json" assert { type: 'json' };
import getBookByIDSchema from "../data/BooksAPI.get.byID.json" assert { type: 'json' };

describe("GET - Check API endpoint: /api/v1/Books", ()=>{

    let config = {headers:
        {
            accept: "*/*",
            'Content-Type': "application/json; v=1.0"
        }}
    let listOfBooks;
    let bookByID

    before(async()=>{
        listOfBooks = await axios('https://fakerestapi.azurewebsites.net/api/v1/Books', config)
    })
        it("Check that GET response returns 200 Status", async ()=>{
            expect(listOfBooks.status).to.equal(200)
        })
        it("Check GET books list: response schema is valid", async()=>{
            let isValid = validator.validate(listOfBooks.data, getBooksListSchema).valid;
            expect(isValid).to.equal(true)
        })
   
    before(async()=>{
        bookByID = await axios('https://fakerestapi.azurewebsites.net/api/v1/Books/123', config)
        })
        it("Check that GET book by ID returns 200 Status", async ()=>{
            expect(bookByID.status).to.equal(200)
        })
        it("Check GET book by ID: response schema is valid", async()=>{
            let isValid = validator.validate(bookByID.data, getBookByIDSchema).valid;
            expect(isValid).to.equal(true)
        })
})

