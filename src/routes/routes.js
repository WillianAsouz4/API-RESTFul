const router = require('express').Router();

router.get('/clientes', (req, res) => {

    res.send(
        `<h1>Rota de Clientes</h1>
        <p>Esta é a rota de clientes. Aqui você pode gerenciar os clientes do sistema.</p>`
    )

})

module.exports = router;