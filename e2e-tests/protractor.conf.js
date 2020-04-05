exports.config = {
    allScriptsTimeout: 600000,
    specs: [
        'tests/login-logout.js'
    ],
    multiCapabilities: [
        // {
        //     'browserName': 'chrome',
        //     //chromeOptions: {
        //     //args: [ "--headless", "--disable-gpu", "--window-size=800x600" ]
        //     //},
        //     // List of devices https://cs.chromium.org/chromium/src/chrome/test/chromedriver/chrome/mobile_device_list.cc
        //     //'deviceName': 'Google Nexus 5',
        // },
      {
       'browserName': 'firefox',
       'webdriver.gecko.driver': './geckodriver',
      },

        //   {
        //    'browserName': 'safari',
        //   },
    ],
    maxSessions: '1',

    directConnect: true, // for firefox and chrome
    baseUrl: 'http://localhost:3000/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: '600000',
    },
    params: {
        user: 'user01',
        password: '123456',
    },
};