const {expect} = require('chai');
const Calculator = require('../calculator');

const calculator = new Calculator();

describe('Check addition feature', async ()=>{
  [
    {nums: [], result: 0},
    {nums: [13.1232], result: 13.1232},
    {nums: [12, -6], result: 6},
    {nums: [113, 0, 113/1], result: 226},
  ].forEach((function(run) {
    it(`Check that .add(${run.nums}) equals ${run.result}`, async ()=>{
      const sum = calculator.add(...run.nums);
      expect(sum).to.be.equal(run.result);
    });
  }));
},
it.skip('Check passing NaN to .add', ()=>{
  const sum = calculator.add('string', true, {});
  expect(sum).to.be.equal('Args must be of Number type');
}),
);
describe('Check substraction feature', ()=>{
  [
    {nums: [13, 45.6789], result: -32.6789},
    {nums: [25, 34, 56], result: -9},
  ].forEach((run)=>{
    it(`Check that .subtraction(${run.nums}) equals ${run.result}`, ()=>{
      const result = calculator.subtraction(...run.nums);
      expect(result).to.be.equal(run.result);
    });
  });
  // Added separate check for 1 arg because method
  //   returns NaN and NaN isn't equal to itself.
  it(`Check passing 1 argument to .add(): returns NaN`, ()=>{
    const result = calculator.subtraction(13);
    expect(result).to.be.NaN;
    // OR : expect(Object.is(result)).to.be.equal(Object.is(NaN))
  });
});
