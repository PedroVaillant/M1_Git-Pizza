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
    if(nomeCompleto.value = "" || email.value == "" || telefone.value == "" || mensagem.value == ""){
        alert("Preencha os campos obrigatórios");
    } 
}
