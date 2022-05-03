const { config } = require("./wdio.devtools.device.conf")

config.reporters = ['spec', ['allure', {
    outputDir: './report/device/chrome/android/',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: false
}]]

exports.config = config