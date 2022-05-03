const { config } = require("./wdio.bs.shared.conf")

config.commonCapabilities = {
  build: 'browserstack-build-MicrosoftEdge'
}

config.capabilities = [{
  browserName: 'MicrosoftEdge'
}]

config.reporters = ['spec', ['allure', {
  outputDir: './report/browserstack/edge/',
  disableWebdriverStepsReporting: true,
  disableWebdriverScreenshotsReporting: false
}]]

exports.config = config

config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
})