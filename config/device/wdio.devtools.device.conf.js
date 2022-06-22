import allureReporter from "@wdio/allure-reporter"
const OS = process.env.OS, ENV = process.env.ENV

if ((!OS || !['iOS', 'android'].includes(OS)) || (!ENV || !['STAGING', 'HML', 'PROD'].includes(ENV))) {
    console.log(`Por favor informe corretamente o OS e o ambiente de execução dos testes.
    \nVerifique se no arquivo package.json possui o 'OS=iOS' ou 'OS=android'
    \nEntradas válidas ambiente: ENV=STAGING | ENV=HML | ENV=PROD |
    \nExemplo válido: ENV=STAGING npm run local_device_chrome\n`)
    process.exit()
}

exports.config = {
    // ====================
    // Runner Configuration
    // ====================
    //
    //    runner: 'local',
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './tests/**/**/*.js'
    ],
    suites: {
        login: [
            './test/login/*.js'
        ],
        otherFeature: [
            // ...
        ]
    },
    exclude: [
        // 'path/to/excluded/files'
    ],
    // ============
    // Capabilities
    // ============
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless',]
        },
        acceptInsecureCerts: true
    }],
    //
    // ===================
    // Test Configurations
    // ===================
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'silent',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['devtools'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    //
    // =====
    // Hooks
    // =====
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function (config, capabilities) {
    // },
    /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     * @param {String} cid worker id (e.g. 0-0)
     */
    // beforeSession: function (config, capabilities, specs, cid) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
    // before: function (capabilities, specs) {
    // },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    // beforeSuite: function (suite) {
    // },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    /**
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */
    beforeTest: async function (test, context) {
        /** Devices 
        Blackberry PlayBook, BlackBerry Z30, Galaxy Note 3, Galaxy Note II, 
        Galaxy S III, Galaxy S5, Galaxy S8, Galaxy S9 +, Galaxy Tab S4, 
        iPad, iPad Mini, iPad Pro, iPhone 4, iPhone 5, iPhone 6, iPhone 6 Plus, 
        iPhone 7, iPhone 7 Plus, iPhone 8, iPhone 8 Plus, iPhone SE, iPhone X, iPhone XR, 
        iPhone 11, iPhone 11 Pro, iPhone 11 Pro Max, JioPhone 2, Kindle Fire HDX, LG Optimus L70, 
        Microsoft Lumia 550, Microsoft Lumia 950, Nexus 10, Nexus 4, Nexus 5, Nexus 5X, Nexus 6, 
        Nexus 6P, Nexus 7, Nokia Lumia 520, Nokia N9, Pixel 2, Pixel 2 XL, Pixel 3, Pixel 4 */
        if (await process.env.OS === `iOS`) {
            await browser.emulateDevice(`iPhone 11`)
            await allureReporter.addArgument(`iOS`, `iPhone 11`)
        } else if (await process.env.OS === `android`) {
            await browser.emulateDevice(`Nexus 6`)
            await allureReporter.addArgument(`android`, `Nexus 6`)
        }
        browser.enablePerformanceAudits({
            networkThrottling: 'Good 3G',
            cpuThrottling: 4,
            formFactor: 'mobile'
        })
    },
    // beforeHook: function (test, context) {
    // },
    /**
     * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
     * afterEach in Mocha)
     */
    // afterHook: function (test, context, { error, result, duration, passed, retries }) {
    // },
    /**
     * Function to be executed after a test (in Mocha/Jasmine only)
     * @param {Object}  test             test object
     * @param {Object}  context          scope object the test was executed with
     * @param {Error}   result.error     error object in case the test fails, otherwise `undefined`
     * @param {Any}     result.result    return object of test function
     * @param {Number}  result.duration  duration of test
     * @param {Boolean} result.passed    true if test has passed, otherwise false
     * @param {Object}  result.retries   informations to spec related retries, e.g. `{ attempts: 0, limit: 0 }`
     */
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        await browser.takeScreenshot()
        await browser.reloadSession()
    },
    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    // afterSuite: function (suite) {
    // },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    // onComplete: function(exitCode, config, capabilities, results) {
    // },
    /**
    * Gets executed when a refresh happens.
    * @param {String} oldSessionId session ID of the old session
    * @param {String} newSessionId session ID of the new session
    */
    //onReload: function(oldSessionId, newSessionId) {
    //}
}