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
    tdTexto = document.createElement("td")
    tdData = document.createElement("td")

    tdStatus.innerHTML = email.statusEmail;
    tdDestinatario.innerHTML = email.emailTo;
    tdTitulo.innerHTML = email.subject;
    tdTexto.innerHTML = email.text;
    tdData.innerHTML = email.sendDateEmail;


    linha.appendChild(tdStatus)
    linha.appendChild(tdDestinatario)
    linha.appendChild(tdTitulo)
    linha.appendChild(tdTexto)
    linha.appendChild(tdData)

    return linha;

}

function main(){
    let data = fazGet("http://localhost:8082/api/v1/email"); 
    let emails = JSON.parse(data);  

    const table = document.querySelector("#tabelaEmail tbody")
    emails.forEach(element => {
        let linha = criaLinha(element);
        table.appendChild(linha);
    });
}

function filtroPorData(){
    console.log("estou aqui");
    let dia = document.getElementById("date");
    
    const table = document.querySelector("#tabelaEmail tbody")
    while(table.childElementCount > 0){
        table.deleteRow(0);
    }
    
    let data = fazGet(`http://localhost:8082/api/v1/email/${dia.value}`); 
    let emails = JSON.parse(data);

    emails.forEach(element => {
        let linha = criaLinha(element);
        table.appendChild(linha);
    });
}
