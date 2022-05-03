const { config } = require("./wdio.bs.shared.conf")

config.commonCapabilities = {
}

config.capabilities = [{
  browserName: 'chrome'
}, {
  browserName: 'firefox'
}, {
  browserName: 'MicrosoftEdge'
}, {
  os: 'OS X',
  os_version: 'Catalina',
  browserName: 'safari'
}]

config.reporters = ['spec', ['allure', {
  outputDir: './report/browserstack/parallel/',
  disableWebdriverStepsReporting: true,
  disableWebdriverScreenshotsReporting: false
}]]

exports.config = config

config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
})