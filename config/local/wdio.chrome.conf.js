const { config } = require("./wdio.shared.conf")

// ============
// Capabilities
// ============
config.capabilities = [{
    browserName: 'chrome',
    'goog:chromeOptions': {
        args: [
            '--headless',
            '--window-size=1400,1120', `--use-fake-device-for-media-stream`, `--use-fake-ui-for-media-stream`]
        // --use-fake-device-for-media-stream e --use-fake-ui-for-media-stream sao para habilitar um fake camera e 
        // nao mostrar aqueles pop up do navegador que solicita permissao a camera
    },
    acceptInsecureCerts: true
}]

config.reporters = ['spec', ['allure', {
    outputDir: './report/chrome/',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: false
}]]

exports.config = config