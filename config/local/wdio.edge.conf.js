const { config } = require("./wdio.shared.conf")

// ============
// Capabilities
// ============
config.capabilities = [{
    browserName: 'MicrosoftEdge',
    'ms:edgeOptions': {
        args: ['-headless', '--window-size=1400,1050']
    },
    acceptInsecureCerts: true
}]

config.reporters = ['spec', ['allure', {
    outputDir: './report/edge/',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: false
}]]

exports.config = config