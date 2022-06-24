const { config } = require("./wdio.shared.conf")

// ============
// Capabilities
// ============
config.capabilities = [{
    browserName: 'firefox',
    'moz:firefoxOptions': {
        "args": ["-headless", '--window-size=1400,1050'],
        "prefs": { "media.navigator.streams.fake": true, "media.navigator.permission.disabled": true }
        //"media.navigator.streams.fake": true, "media.navigator.permission.disabled": true é para habilitar a camera fake na permissao do navegador a camera
    },
    acceptInsecureCerts: true
}]

config.reporters = ['spec', ['allure', {
    outputDir: './report/firefox/',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: false
}]]

exports.config = config