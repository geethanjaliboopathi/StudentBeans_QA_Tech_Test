const {Given , And , When , Then} = require('cucumber')
const WebDriver = require('webdriver');

const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', function () {
  simpleSearchPageObject.goToHomePage()
  simpleSearchPageObject.verifyHomePage()
})

// And I open the search bar
When ('I open the search bar', function() {
  simpleSearchPageObject.openSearch()
})

//When I enter "Samsung"
When ('I enter "Samsung"', function() {
  simpleSearchPageObject.searchSamsung()
})

//Then I should be shown a search listing for "Samsung"
Then ('I should be shown a search listing for "Samsung"', function() {
  simpleSearchPageObject.resultSamsung()
})