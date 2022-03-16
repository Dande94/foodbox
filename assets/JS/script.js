
let prato;
let bebida;
let sobremesa;


function escolherFrango(){
    document.getElementById("frango").style.borderColor = "#0F0";
    document.getElementById("carne").style.borderColor = "#FFF";
    prato = "Frango"
}
function escolherCarne(){
    document.getElementById("carne").style.borderColor = "#0F0";
    document.getElementById("frango").style.borderColor = "#FFF";
    prato = "Carne"
}

function escolherCoca(){
    document.getElementById("coca").style.borderColor = "#0F0";
    document.getElementById("suco").style.borderColor = "#FFF";
    bebida="Coca Cola"
}
function escolherSuco(){
    document.getElementById("suco").style.borderColor = "#0F0";
    document.getElementById("coca").style.borderColor = "#FFF";
    bebida="Suco Natural"
}
function escolherPudim(){
    document.getElementById("pudim").style.borderColor = "#0F0";
    document.getElementById("mousse").style.borderColor = "#FFF";
    sobremesa="Pudim"
}
function escolherMousse(){
    document.getElementById("mousse").style.borderColor = "#0F0";
    document.getElementById("pudim").style.borderColor = "#FFF";
    sobremesa="Mousse"
}

function finalizarPedido(){
    let mensagem;

    mensagem = "Olá! Gostaria de pedir um combo: " +
     prato + 
     ", " + 
     bebida + 
     " e " +
      sobremesa
    ;

    window.open("https://wa.me/+5547999999999?text= " + mensagem);

}
