var contador = 0;

function contar(){
    contador++;
    return contador;
}

function responder() {
    var resposta = prompt('Qual a alternativa correta?', 'A ou B');
    if(resposta != null){
        if(resposta == 'a'){
           window.location.assign('errado.html');
        }else if(resposta =='b'){
            window.location.assign('certo.html');
            return contador;
        }else{
            alert('Digite uma resposta válida =D')
        }
    }
}

function avanco() {
    contar();
    alert(contador)
    if(contador == 1){
        contar();
        window.location.assign('fase-2.html');
        alert(contador);
        if(contador == 2){
            window.location.assign('fase-3.html');
        }
    }
}