function sortearImagem() {
    var imagens = ["imagem1.jpg", "imagem2.jpg", "imagem3.jpg", "imagem4.jpg"]; // Substitua com os nomes das suas imagens
    var imagemSorteada = document.getElementById("imagemSorteada");
    var indice = Math.floor(Math.random() * imagens.length);
    var imagemSelecionada = imagens[indice];
    imagemSorteada.src = imagemSelecionada;
}
