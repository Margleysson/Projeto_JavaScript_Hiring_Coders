//pegar input
// Se for Sim, a gente mostra as categorias disponiveis, pergunta qual categoria ela escolhe

//Se Não, mostra todos os livros em ordem crrescente pela quantidade de paginas
const livros = require("./database")
const redline = require('readline-sync')

const entradaInicial = redline.question('Deseja buscar um livro?S/N')

if(entradaInicial.toLocaleUpperCase () === 'S') {
    console.log('Essas são as categorias diponíveis:')
    console.log('Produtividade e estilo de vida', '/Historia brasileira', '/Américas', '/Estilo de vida', '/Tecnologia')

    const entradaCategoria = readline.question('Qual categoria você escolhe:')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)

} else {
    const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
    console.log('Essas são todos os livros disponíveis:')
    console.table(livrosOrdenados)
}