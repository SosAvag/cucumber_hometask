const yargs = require('yargs').argv

exports.config = {
  //seleniumAddress:'http://localhost:4444/wd/hub/',
  directConnect: true,
       
    Capabilities:{
        'browserName': 'firefox'
      }, 
  
      framework: 'custom',
      frameworkPath: require.resolve('protractor-cucumber-framework'),
    onPrepare: function(){
        browser.waitForAngularEnabled(false)
    },
    onComplete: function(){
        browser.close()
    },
    
    specs: ['../Features/**.feature'],
   // baseUrl = 'https://www.youtube.com/',
  
   cucumberOpts: {
    require: ('../Features/Step_Defination/stepdefination.js'),
    ignoreUncaughtExceptions: true,
    format: ['json:./reports/report.json'],

   },

    getPageTimeout: 10000,
    mochaOpts: {
        reporter: 'spec',
        timeout: 40000
    }
  };