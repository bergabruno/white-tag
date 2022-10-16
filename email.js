main();
function fazGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false)
    request.send();
    console.log(request.responseText);
    return request.responseText
}

function criaLinha(email){
    linha = document.createElement("tr")
    tdStatus = document.createElement("td")
    tdDestinatario = document.createElement("td")
    tdTitulo = document.createElement("td")
    tdData = document.createElement("td")

    tdStatus.innerHTML = email.statusEmail;
    tdDestinatario.innerHTML = email.emailTo;
    tdTitulo.innerHTML = email.subject;
    tdData.innerHTML = email.sendDateEmail;


    linha.appendChild(tdStatus)
    linha.appendChild(tdDestinatario)
    linha.appendChild(tdTitulo)
    linha.appendChild(tdData)

    return linha;

}

function main(){
    let data = fazGet("http://localhost:8082/api/v1/email"); 
    let emails = JSON.parse(data);  

    let tabela = document.getElementById("tabelaEmail");
    emails.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
    //para cada user criar uma linha e add na tabela

}