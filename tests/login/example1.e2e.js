import { assertJs, loginPage, utils } from "../../constants"
import { describeName } from "../../data/global/describe.data"
import { feature } from "../../data/global/feature.data"
import { severity } from "../../data/global/severity.data"
import { loginAccount } from "../../data/login/login.data"

describe(describeName.securityTeam, () => {

    it('[WDIO-LOGIN-0001] - Validar login por usuario e senha', async () => {
        await utils.addTagsAllureReports(feature.login, severity.blocker, `CAO-1234`)
        await loginPage.login(loginAccount.username, loginAccount.password)
        await assertJs.include(await loginPage.getTextLblMessage(), loginAccount.success, 'A mensagem obtida é divergente do esperado!')
    })

    it('[WDIO-LOGIN-0002] - Validar mensagem de login por usuario inválido', async () => {
        await utils.addTagsAllureReports(feature.login, severity.normal, `CAO-1234`)
        await loginPage.login(loginAccount.invalidUser, loginAccount.password)
        await assertJs.include(await loginPage.getTextLblMessage(), loginAccount.invalidUsername, 'A mensagem obtida de usuário é divergente do esperado!')
    })

    it('[WDIO-LOGIN-0003] - Validar mensagem de login por senha inválida', async () => {
        await utils.addTagsAllureReports(feature.login, severity.normal, `CAO-1234`)
        await loginPage.login(loginAccount.username, loginAccount.invalidPass)
        await assertJs.include(await loginPage.getTextLblMessage(), loginAccount.invalidPassword, 'A mensagem obtida de senha inválida é divergente do esperado!')
    })
})