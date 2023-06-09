const { getUsuarioController } = require("../factories/UsuarioFactory")

function rota(app) {
    const controller = getUsuarioController()

    app.get('/usuarios', (req, res) => controller.buscarTodos(req, res))
    app.post('/usuarios', (req, res) => controller.criarUsuario(req, res))
    app.put('/usuarios/:id',(req, res) => controller.atualizarUsuario(req, res))
    app.delete('/usuarios/:id',(req, res) => controller.deletarUsuario(req, res))
    app.put('/usuarios/adicionar-link/:id',(req, res) => controller.adicionarLink(req, res))
    app.put('/usuarios/editar-link/:id',(req, res) => controller.editarLink(req, res))
}

module.exports = rota