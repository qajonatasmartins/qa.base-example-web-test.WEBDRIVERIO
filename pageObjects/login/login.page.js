import { timeoutMsgData } from '../../data/global/timeoutMsg.data'
const base = require('../../module/environments')

export default class LoginPage {

    /* Mapeamento dos elementos */
    get inpUsername() { return $('#username') }
    get inpPassword() { return $('#password') }
    get btnSubmit() { return $('button[type="submit"]') }
    get lblMessage() { return $('#flash') }

    /**
     * Método para abrir a tela de login
     */
    async openLoginPage() {
        await browser.url(`${base[process.env.ENV].url}/login`)
    }

    /**
     * Método genérico para realizar o login na aplicação.
     * @param {String} username - nome do usuário
     * @param {String} password - senha do usuário
     */
    async login(username, password) {
        await this.openLoginPage()
        await this.setInpUsername(username)
        await this.setInpPassword(password)
        await this.clickBtnSubmit()
    }

    /**
     * Método para abrir a tela de login
     */
    async getTextLblMessage() {
        return await this.lblMessage.getText()
    }

    /**
     * Método genérico para realizar o login na aplicação por uma const `data`.
     * @param {String} username - nome do usuário
     * @param {String} password - senha do usuário
     */
    async loginData(userData) {
        await this.openLoginPage()
        await this.setInpUsername(userData.username)
        await this.setInpPassword(userData.password)
    }

    /**
     * Método responsável por setar o valor do usuário.
     * @param {String} username - nome do usuário
     */
    async setInpUsername(username) {
        await this.inpUsername.waitForDisplayed({ timeoutMsg: timeoutMsgData.login.msgInpUsername.isDisplayed })
        await this.inpUsername.setValue(username)
    }

    /**
     * Método responsável por setar a senha do usuário.
     * @param {String} password - senha do usuário
     */
    async setInpPassword(password) {
        await this.inpPassword.waitForDisplayed({ timeoutMsg: timeoutMsgData.login.msgInpPassword.isDisplayed })
        await this.inpPassword.setValue(password)
    }

    /**
     * Método responsável por clicar no botão de `Login`
     * @param {String} password - senha do usuário
     */
    async clickBtnSubmit() {
        await this.btnSubmit.waitForDisplayed({ timeoutMsg: timeoutMsgData.login.msgBtnSubmit.isDisplayed })
        await this.btnSubmit.click()
    }
}
