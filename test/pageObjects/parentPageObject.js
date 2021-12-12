const TEN_SECOND_TIMEOUT = 10000

class ParentPageObject {
  isElementEqualToExpected (element, expectedText) {
    browser.waitUntil(
      () => {
        const errorMessage = 'actual does not equal expected'
        return expect(element.getText(), errorMessage).to.equal(expectedText)
      },
      TEN_SECOND_TIMEOUT,
      'Text does not match expected'
    )
  }

  isSearchResultAvailable (element, expectedText) {
     browser.waitUntil(
     () => {
        const resultMessage = 'search results not available'
        return expect(element.getText(), resultMessage).to.include(expectedText)
       },
       TEN_SECOND_TIMEOUT,
       'search results not available'
     )
  }

}
module.exports = ParentPageObject
