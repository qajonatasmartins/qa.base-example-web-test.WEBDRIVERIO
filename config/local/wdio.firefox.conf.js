const { config } = require("./wdio.shared.conf")

// ============
// Capabilities
// ============
config.capabilities = [{
    browserName: 'firefox',
    'moz:firefoxOptions': {
        args: ['-headless', '--window-size=1400,1050']
    },
    acceptInsecureCerts: true
}]

config.reporters = ['spec', ['allure', {
    outputDir: './report/firefox/',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: false
}]]

exports.config = config