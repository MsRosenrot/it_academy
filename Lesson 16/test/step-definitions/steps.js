import { Given, When, Then } from '@wdio/cucumber-framework';
import { $ } from '@wdio/globals';
import { expect } from 'chai';
import { mainPage } from '../pageobjects/mainPage.js';
import { header } from '../pageobjects/components/header.js';

Given(/^I navigate to (.*)$/, async (url) => {
  await mainPage.navigate(url);
  await browser.waitUntil(() => browser.execute(() => document.readyState === 'complete'));
});
Given(/^I click on element (.*)$/, async (element) => {
  await (await $(element)).waitForClickable();
  await $(element).click();
  await browser.waitUntil(() => browser.execute(() => document.readyState === 'complete'));
});
Then(/^I expect (.*) attribute of (.*) element to (contain|equal) (.*)$/, async (attribute, element, typeOfComparison, text) => {
  const attributeValue = await $(element).getAttribute(attribute);
  if (typeOfComparison === 'contain') {
    expect(attributeValue).to.contain(text);
  } else {
    expect(attributeValue).to.equal(text);
  }
});
Given(/^I hover on element (.*)$/, async (element) => {
  await (await $(element)).waitForExist();
  await (await $(element)).moveTo();
});

Given(/^I expect elements of list (.*) to contain element with inner text "(.*)"$/, async (listSelector, element) => {
  const list = await $$(listSelector);
  const listElementsInnerText = [];

  for (let i = 0; i < list.length; i++) {
    const elemInnerText = await list[i].getText();
    listElementsInnerText.push(elemInnerText);
  }
  expect(listElementsInnerText).to.contain(element);
});

Then(/^I expect (.*) element text to (equal|contain) (.*)$/, async (element, typeOfComparison, text) => {
  await browser.waitUntil(() => browser.execute(() => document.readyState === 'complete'));
  if (typeOfComparison === 'contain') {
    expect((await $(element)).getText()).to.contain(text);
  } else {
    expect(await $(element).getText()).to.equal(text);
  }
});

Given(/^I search for (.*) in Searchbar$/, async (query) => {
  await browser.waitUntil(() => browser.execute(() => document.readyState === 'complete'));
  await header.search(query);
});
When((/^I click on №(\d) search result$/), async (number) => {
  await header.clickNthResult(number);
  await browser.waitUntil(() => browser.execute(() => document.readyState === 'complete'));
});
