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
}]

config.reporters = ['spec', ['allure', {
    outputDir: './report/chrome/',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: false
}]]

exports.config = config