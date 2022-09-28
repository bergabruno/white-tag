main();
function fazGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(produto){
    linha = document.createElement("tr")
    tdId = document.createElement("td")
    tdNome = document.createElement("td")
    tdQuantidade = document.createElement("td")
    tdValor = document.createElement("td")

    tdId.innerHTML = produto.id;
    tdNome.innerHTML = produto.nome;
    tdQuantidade.innerHTML = produto.quantidade;
    tdValor.innerHTML = produto.valor;


    linha.appendChild(tdId)
    linha.appendChild(tdNome)
    linha.appendChild(tdQuantidade)
    linha.appendChild(tdValor)

    return linha;

}

function main(){
    let data = fazGet("http://127.0.0.1:8080/api/v1/produtos"); 
    let produtos = JSON.parse(data);  

    let tabela = document.getElementById("tabelaProduto");
    produtos.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
    //para cada user criar uma linha e add na tabela

}