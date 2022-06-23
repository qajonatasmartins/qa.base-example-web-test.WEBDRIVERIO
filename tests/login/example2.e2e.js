import { assertJs, loginPage, utils } from "../../constants"
import { describeName } from "../../data/global/describe.data"
import { feature } from "../../data/global/feature.data"
import { severity } from "../../data/global/severity.data"
import { loginAccount } from "../../data/login/login.data"

describe(describeName.securityTeam, () => {

    it('[WDIO-LOGIN-0001] - Validar login por usuario e senha', async () => {
        await utils.addTagsAllureReports(feature.login, severity.normal, `CAO-1234`)
        await loginPage.login(loginAccount.username, loginAccount.password)
        await assertJs.include(await loginPage.getTextLblMessage(), loginAccount.success, 'A mensagem obtida é divergente do esperado!')
    })

    afterEach(`Reload session`, async () => {
        await console.log(`Primeiro a executar exemplo2.e2e.js`)
        await browser.reloadSession()
    })
})