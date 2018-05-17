// A nightwatch test for full e2e testing

module.exports = {
  'Web Page Renders': function(browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('#app',5000)
      .end()
  },

  'Tasks are listed': function(browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('#app',5000)
      .assert.elementPresent('.todo-list')
      .end()
  },

  'Tasks can be added': function(browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('#app',5000)
      .setValue('.form__input', 'ToDo Test').pause(500)
      .click('.form__submit-btn')
      .assert.elementPresent('.todo-list__item')
      .end()
  },

  'Tasks can be removed': function(browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('#app',5000)
      .setValue('.form__input', 'ToDo Test').pause(500)
      .click('.form__submit-btn').pause(500)
      .click('.todo-list__item-remove');
      browser.elements('css selector','.to-list__item',function(result){
        browser.assert.equal(result.value.length, 0)
      }).end()
  },

  'Tasks can be completed': function(browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('#app',5000)
      .setValue('.form__input', 'ToDo Test').pause(500)
      .click('.form__submit-btn').pause(500)
      .click('.todo-list__item-content')
      .assert.elementPresent('.fa-check')
      .end()
  }
}
