const {expect} = require('chai');
const Calculator = require('../calculator');

const calculator = new Calculator();

describe('Check division feature', async ()=>{
  [
    {nums: [19, 123], result: 0.15447154471544716},
    {nums: [19, -123], result: -0.15447154471544716},
    {nums: [19, 123, 23], result: 0.15447154471544716},
  ].forEach((run) => {
    it(`Check that .divide(${run.nums} equals ${run.result})`, ()=>{
      const result = calculator.divide(...run.nums);
      expect(result).to.be.equal(run.result);
    });
  }),
  it('Check passing 1 arg to .divide(): returns NaN', ()=>{
    const result = calculator.divide(13);
    expect(result).to.be.NaN;
  }),
  it('Check dividing by zero: returns Infinity', ()=>{
    const result = calculator.divide(13, 0);
    expect(result).to.be.equal(Infinity);
  });
  it('Check divider is zero: returns zero', ()=>{
    const result = calculator.divide(0, 3);
    expect(result).to.be.equal(0);
  });
});
describe('Check multiplication feature', async ()=>{
  [
    {nums: [], result: 1},
    {nums: [19], result: 19},
    {nums: [19, 123], result: 2337},
    {nums: [19, -123], result: -2337},
    {nums: [19, -123, -23], result: 53751},
  ].forEach((run) => {
    it(`Check that .multiply(${run.nums} equals ${run.result})`, ()=>{
      const result = calculator.multiply(...run.nums);
      expect(result).to.be.equal(run.result);
    });
  }),
  it('Check multiplying by zero: returns zero', ()=>{
    const result = calculator.multiply(13, 0);
    expect(result).to.be.equal(0);
  });
});
