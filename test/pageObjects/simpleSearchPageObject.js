const ParentPageObject = require('./parentPageObject')

class simpleSearchPageObject extends ParentPageObject {
  goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    browser.url('')
  }
//Verifying Homepage
  verifyHomePage () {

  //Click Accept cookies
        const Acceptcookie = $('[id="onetrust-accept-btn-handler"]')
        Acceptcookie.waitForClickable({ timeout: 5000 })
        Acceptcookie.click()
    this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }


    // Opening the search bar
    openSearch () {
    const classNameAndText = $('[name="query"]')
    classNameAndText.click()
  }


    //start search for Samsung
  searchSamsung() {
  const samsungText = $('[class="_1g5dvk1"]')
  samsungText.waitForClickable({ timeout:2000 })
  samsungText.setValue("Samsung")
  samsungText.pause(2000)
  }

    //search results for Samsung
  resultSamsung() {
  this.isSearchResultAvailable($('*=Samsung'), 'Samsung')
  //Logging the search result
  const textexisting = $('*=Samsung')
  console.log (textexisting.getText())
  }

}

module.exports = simpleSearchPageObject
