const { config } = require("./wdio.devtools.device.conf")

config.reporters = ['spec', ['allure', {
    outputDir: './report/device/chrome/ios/',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: false
}]]

exports.config = config