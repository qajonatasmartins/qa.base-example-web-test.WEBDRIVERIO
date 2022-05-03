const { config } = require("./wdio.shared.conf")

// ============
// Capabilities
// ============
config.capabilities = [{
    browserName: 'chrome',
    'goog:chromeOptions': {
        args: ['--headless', '--window-size=1400,1050']
    },
    acceptInsecureCerts: true
},
{
    browserName: 'MicrosoftEdge',
    'ms:edgeOptions': {
        args: ['-headless', '--window-size=1400,1050']
    },
    acceptInsecureCerts: true
},
{
    browserName: 'firefox',
    'moz:firefoxOptions': {
        args: ['-headless', '--window-size=1400,1050']
    },
    acceptInsecureCerts: true
}]

config.reporters = ['spec', ['allure', {
    outputDir: './report/parallel/',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: false
}]]

exports.config = config