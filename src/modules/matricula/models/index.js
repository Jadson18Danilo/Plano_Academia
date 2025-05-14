import client from "../../../config/database.js"

class MatriculaModel {
    static async novaMatricula(id_matricula,data_inicio, data_fim, status, id_aluno, id_plano) {
        const dados = [id_matricula, data_inicio, data_fim, status, id_aluno, id_plano]
        const consulta = `insert into matricula(id_matricula, data_inicio, data_fim, status, id_aluno, id_plano)
            values ($1, $2, $3, $4, $5, $6) returning *;`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }
    
    static async atualizarMatricula(id_matricula, data_inicio, data_fim, status, id_aluno, id_plano) {
        const dados = [id_matricula, data_inicio, data_fim, status, id_aluno, id_plano]
        const consulta = `update matricula set id_matricula = $1, data_inicio = $2, data_fim = $3,
            status = $4 where id_aluno = $5 and id_plano = $6 returning *`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }
    
    static async excluirMatricula(id_matricula) {
        const dados = [id_matricula]
        const consulta = `delete from matricula where id_matricula = $1 returning *`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }

    static async listarPorPlanoOuAluno(id_plano, id_aluno){
        const dados = [id_plano, id_aluno]
        const consulta = `select * from plano where id_plano = $1 or id_aluno = $2`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }

    static async filtrarMatriculaPorStatus(status){
        const dados = [status]
        const consulta = `select matricula from aluno where status =  $1 ;`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }

    static async totalDeAlunoPorPlano(id_aluno){
        const dados = [id_aluno]
        const consulta = `select count(id_aluno) as total_alunos from aluno
        where id_aluno = $1;`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }

    static async totalDePlano(id_plano){
        const dados = [id_plano]
        const consulta = `select sun(valor_coluna) as total_plano from id_plano`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }
    


}

export default MatriculaModel