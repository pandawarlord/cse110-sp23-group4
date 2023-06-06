/**
 * @file Contains puppeteer tests for the cards page of the web app
 * @author Christian Lee
 */

const functions = require('../prototyping/card-script.js');

test('Sample test', () => {
  let numArr = functions.generateNonDuplicateRandomNumbers(0, 10, 2);

  expect(numArr.length).toBe(2);
  for (let i = 0; i < numArr.length; i++) {
    expect(numArr[i]).toBeInstanceOf(Number);
  }
});

