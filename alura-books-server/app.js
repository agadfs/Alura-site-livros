const express = require("express")
const rotalivro = require("./rotas/livro")
const rotaFavorito = require("./rotas/favorito")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors({origin: "*"}))
app.use('/livros', rotalivro)
app.use('/favoritos', rotaFavorito)
const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)


})