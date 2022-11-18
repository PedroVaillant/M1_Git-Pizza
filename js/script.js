// COLOCAR ERRO
function setErrorNome(faleconosco) {
    var spanNome = document.getElementById("span-nome")
    spanNome.style.display = "block"
}

function setErrorEmail(faleconosco) {
    var spanEmail = document.getElementById("span-email")
    spanEmail.style.display = "block"
}

function setErrorTelefone(faleconosco) {
    var spanTelefone = document.getElementById("span-telefone")
    spanTelefone.style.display = "block"
}

function setErrorMensagem(faleconosco) {
    var spanMensagem = document.getElementById("span-mensagem")
    spanMensagem.style.display = "block"
}
// COLOCAR ERRO

// REMOVER ERRO

function removeErrorNome(faleconosco) {
    var spanNome = document.getElementById("span-nome")
    spanNome.style.display = "none"
    
}
function removeErrorEmail(faleconosco) {
    var spanEmail = document.getElementById("span-email")
    spanEmail.style.display = "none"
    
}

function removeErrorTelefone(faleconosco) {
    var spanTelefone = document.getElementById("span-telefone")
    spanTelefone.style.display = "none"
    
}

function removeErrorMensagem(faleconosco) {
    var spanMensagem = document.getElementById("span-mensagem")
    spanMensagem.style.display = "none"
    
}

// REMOVER ERRO

// VALIDAÇÃO

function nameValidate(){

    var nomeCompleto = document.getElementById("nomeCompleto")
    if (nomeCompleto.value.length<3){
        setErrorNome();
    }else{
        removeErrorNome();
    }
}

function emailValidate(){
    emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = document.getElementById("email")
    if (!emailRegex.test(email.value)){
        setErrorEmail();
    }else{
        removeErrorEmail();
    }
}

function telefoneValidate(){

    var telefone = document.getElementById("telefone")
    if (telefone.value.length<8){
        setErrorTelefone();
    }else{
        removeErrorTelefone();
    }
}

function mensagemValidate(){

    var mensagem = document.getElementById("mensagem")
    if (mensagem.value.length<1){
        setErrorMensagem();
    }else{
        removeErrorMensagem();
    }
}

// VALIDAÇÃO

// ENVIAR
function enviar(){
    if(nomeCompleto.value == "" || email.value == "" || telefone.value == "" || mensagem.value == ""){
        alert("Preencha os campos obrigatórios");
    }else { 
        alert("Sua mensagem foi enviada")
    }
}
// ENVIAR



function comprar(){
    var pedido = document.querySelectorAll(".pedir");
    alert("Sua pizza de 3 QUEIJOS está sendo preparada");
}
function comprar2(){
    var pedido = document.querySelectorAll(".pedir");
    alert("Sua pizza de CALABRESA está sendo preparada");
}
function comprar3(){
    var pedido = document.querySelectorAll(".pedir");
    alert("Sua pizza de PIZZA DE QUEIJO está sendo preparada");
}
function comprar4(){
    var pedido = document.querySelectorAll(".pedir");
    alert("Sua pizza de MARGHERITA está sendo preparada");
}
function comprar5(){
    var pedido = document.querySelectorAll(".pedir");
    alert("Sua pizza de PEPPERONI está sendo preparada");
}
function comprar6(){
    var pedido = document.querySelectorAll(".pedir");
    alert("Sua pizza de 4 QUEIJOS está sendo preparada");
}
function comprar7(){
    var pedido = document.querySelectorAll(".pedir");
    alert("Sua pizza de BAURU está sendo preparada");
}
function comprar8(){
    var pedido = document.querySelectorAll(".pedir");
    alert("Sua pizza de CATUPERONI está sendo preparada");
}
function comprar9(){
    var pedido = document.querySelectorAll(".pedir");
    alert("Sua pizza de FRANGO COM CREAM CHEESE está sendo preparada");
}
function comprar10(){
    var pedido = document.querySelectorAll(".pedir");
    alert("Sua pizza de FRANGO COM BARBECUE está sendo preparada");
}
function comprar11(){
    var pedido = document.querySelectorAll(".pedir");
    alert("Sua pizza de CALABRESA ESPECIAL está sendo preparada");
}
function comprar12(){
    var pedido = document.querySelectorAll(".pedir");
    alert("Sua pizza de PORTUGUESA está sendo preparada");
}
function comprar13(){
    var pedido = document.querySelectorAll(".pedir");
    alert("Sua pizza de MEAT & BACON está sendo preparada");
}
    
    
