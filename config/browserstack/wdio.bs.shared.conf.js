const ENV = process.env.ENV

if (!ENV || !['STAGING', 'HML', 'PROD'].includes(ENV)) {
    console.log(`Por favor informe corretamente o ambiente de execução dos testes.
    \nEntradas válidas: ENV=STAGING | ENV=HML | ENV=PROD |
    \nExemplo válido: ENV=STAGING npm run browserstack_chrome\n`)
    process.exit()
}
exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'jonatasmartinsfa_NCTlSB',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'LLzB8RrxrqsRVqadVu2R',

    specs: [
        './tests/**/**/*.js'
    ],
    suites: {
        login: [
            './test/login/*.js'
        ],
        otherFeature: [
            // ...
        ]
    },
    maxInstances: 10,
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 190000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    host: 'hub.browserstack.com',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd'
    },
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        await browser.takeScreenshot()
    }
}