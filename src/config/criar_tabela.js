import dotenv from 'dotenv'
dotenv.config()
import client from './database.js'

class CriarTabela{
    static async cadastrar(){
        const consulta = `create tabe if not exists aluno(
            id_aluno serial integer,
            nome text not null,
            cpf char(14) not null,
            telefone char(15), not null
        )`
        await client.query(consulta)
        console.log('Tabela aluno criada com sucesso!')
    }
    static async plano(){
        const consulta = `reate table if not exists Plano(
        id_plano serial,
        nome text not null,
        valor numeric(10,2) no null,
        duracao_meses integer not null
        )` 
        await client.query(consulta)
        console.log('tabela plano criada com sucesso!')
    }
    static async matricula(){
        const consulta = `create table if not exists plano(
            id_matricula serial,
            data_inicio date not null,
            data_fim date not null,
            status text not null,
            id_aluno integer references aluno(id_aluno)
            id_plano integer references plano(id_plano)
        )`
        await client.query(consulta)
        console.log('Tabela matricula criada com sucesso!')
    }
}

export default CriarTabela