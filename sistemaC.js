let usuarios = [
    {
        nome: "lucas",
        saldo: 1000
    }
];

let produtos = [
    {
        tipo: "console",
        nomep: "playstation",
        estoque: 2,
        preco: 500
    }
];

// Função para realizar uma compra
function comprar(nomeUsuario, nomeProduto) {
    // Buscar o usuário e o produto
    let usuario = usuarios.find(u => u.nome === nomeUsuario);
    let produto = produtos.find(p => p.nomep === nomeProduto);

    // Verificar se o produto está em estoque e se o saldo do usuário é suficiente
    if (produto && produto.estoque > 0 && usuario.saldo >= produto.preco) {
        // Atualiza o saldo do usuário
        usuario.saldo -= produto.preco;
        
        // Atualiza o estoque do produto
        produto.estoque -= 1;
        
        console.log(`${usuario.nome} comprou um ${produto.nomep}. Novo saldo: R$${usuario.saldo}`);
        console.log(`Estoque do ${produto.nomep}: ${produto.estoque}`);
    } else {
        console.log("Não foi possível realizar a compra.");
    }
}

// Exemplo de compra
comprar("lucas", "playstation");


function mostrar(x){
    console.log(x)


}

mostrar(produtos)

comprar("lucas", "playstation");

mostrar(produtos)
