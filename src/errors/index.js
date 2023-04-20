module.exports = Object.freeze({
    geral: {
        itemJaExiste: {
            mensagem: 'Ocorreu um erro ao criar o registro! Item já existe',
            statusCode: 400,
            code: 'GEN0002'
        },
        erroAoCriarRegistro: {
            mensagem: 'Ocorreu um erro ao criar o registro',
            statusCode: 422,
            code: 'GEN0001'
        },
        erroAoAtualizarRegistro: {
            mensagem: 'Ocorreu um erro ao atualizar o registro',
            statusCode: 422,
            code: 'GEN0003'
        },
        erroAoDeletarRegistro: {
            mensagem: 'Ocorreu um erro a odeletar o registro',
            statusCode: 422,
            code: 'GEN0005'
        }
    },
    usuario: {
        erroAoBuscarUsuariosAtivos: {
            mensagem: 'Um erro ocorreu ao buscar os Usuarios Ativos',
            statusCode: 422,
            code: 'USU0001',
        },
        erroAoCriarUsuario: {
            mensagem: 'Um erro ocorreu ao criar o Usuario',
            statusCode: 422,
            code: 'USU0002',
        },

        usuarioNaoEncontrado: {
            mensagem: 'Usuário não encontrado',
            statusCode: 400,
            code: 'USU0003'
        },
        erroAoInserirLink: {
            mensagem: 'Ocorreu um erro ao inserir o link',
            statusCode: 422,
            code: 'USU0004'
        },
        linkNaoEncontrado: {
            mensagem: 'Link não encontrado',
            statusCode: 422,
            code: 'USU0005'

        }
    }

})
