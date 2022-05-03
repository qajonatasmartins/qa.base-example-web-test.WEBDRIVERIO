/* Centralizador das mensagens de timeout apresentadas quando o elemento é exibido ou não na tela */
export const timeoutMsgData = {
    login: {
        msgInpUsername: {
            isDisplayed: `O campo 'Username' da tela de 'Login' não foi exibido!`,
            isNotDisplayed: `O campo 'Username' da tela de 'Login' não deve ser exibido!`,
        },
        msgInpPassword: {
            isDisplayed: `O campo 'Password' da tela de 'Login' não foi exibido!`,
            isNotDisplayed: `O campo 'Password' da tela de 'Login' não deve ser exibido!`,
        },
        msgBtnSubmit: {
            isDisplayed: `O botão 'Login' da tela de 'Login' não foi exibido!`,
            isNotDisplayed: `O botão 'Login' da tela de 'Login' não deve ser exibido!`,
        }
    }
}