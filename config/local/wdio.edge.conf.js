const { config } = require("./wdio.shared.conf")

// ============
// Capabilities
// ============
config.capabilities = [{
    browserName: 'MicrosoftEdge',
    'ms:edgeOptions': {
        args: [
            '-headless',
            '--window-size=1400,1120', `--use-fake-device-for-media-stream`, `--use-fake-ui-for-media-stream`]
    },
    acceptInsecureCerts: true
}]

config.reporters = ['spec', ['allure', {
    outputDir: './report/edge/',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: false
}]]

exports.config = config