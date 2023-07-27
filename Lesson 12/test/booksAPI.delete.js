import axios from "axios";
import {expect} from "chai";

describe('DELETE - Check API endpoint: /api/v1/Books', async()=>{
    it('Check that PUT response returns 200 Status', async ()=>{
       let response = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Books/123',{headers: {accept: "*/*"}});
       expect(response.status).to.equal(200)
    })
})
