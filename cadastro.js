event.preventDefault()
function fazPost(url, body){

    let request = new XMLHttpRequest;
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function(){
        console.log(this.responseText)
    }

    return request.responseText

}


function cadastrarProduto(){
  //  event.preventDefault()
    // enviandoEmail();
    url = "http://localhost:8080/api/v1/produtos/criar"

    let nome = document.getElementById('nome').value
    let quantidade = document.getElementById('quantidade').value
    let valor = document.getElementById('valor').value

    console.log("nome");
    console.log("valor");
    console.log("quantidade");


    body = 
        {
            "nome" : nome,
            "quantidade" : quantidade,
            "valor" : valor
        };


    fazPost(url, body)
}


function enviandoEmail(){
    console.log("entrei aqui");
    cadastrarProduto();

    let delay = 6200;
    let url = "./index.html";
    setTimeout(function(){
        location = url;
        },delay)
}