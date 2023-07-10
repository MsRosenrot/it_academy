const {expect} = require('chai');
const Calculator = require('../calculator');

const calculator = new Calculator();

describe('Check exponentiation feature', async ()=>{
  [
    {nums: [19], result: 361},
    {nums: [19, -123], result: 361},
  ].forEach((run) => {
    it(`Check that .exponentiation(${run.nums} equals ${run.result})`, ()=>{
      const result = calculator.exponentiation(...run.nums);
      expect(result).to.be.equal(run.result);
    });
  }),
  it('Check passing 0 arg to .exponentiation(): returns NaN', ()=>{
    const result = calculator.exponentiation();
    expect(result).to.be.NaN;
  });
});
