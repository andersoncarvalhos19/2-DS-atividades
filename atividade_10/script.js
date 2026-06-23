let produto = {
    nome,
    categoria,
    quantidade,
    preco
}
// Lista de Produtos
let produtos = [];
// Capturar o formulário
const formulario = document.getElementById("formProduto");
// Event Listener
formulario.addEventListener(
    "submit",
    cadastrarProduto
);
// Função de cadastrar produto
function cadastrarProduto(event) {
    event.preventDefalt();
}