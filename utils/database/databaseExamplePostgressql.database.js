import { Client } from 'pg'

const dataBase = new Client({
    user: 'UsuarioDeAcessoAoBanco',
    host: 'HostDoBancoDeDados',
    database: 'NomeBaseDeDados',
    password: 'senhaBancoDeDados',
    port: 5432
})

export default class deleteDotDatabase {

    deleteMetodo(parametro1) {
        dataBase.connect()
        dataBase.query(
            `delete from tabela where coluna='${parametro1}';`
        )
    }
}