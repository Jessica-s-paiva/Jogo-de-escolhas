let contador = 0;

function responder1() {
    let resposta = prompt('Qual a alternativa correta?', 'A ou B');
    if(resposta != null){
        if(resposta == 'a'){
           window.location.assign('errado.html');
        }else if(resposta =='b'){
            contador = contador + 1;
            window.location.assign('certo.html');
        }else{
            alert('Digite uma resposta válida =D')
        }
    }
}

function avanco() {
    if(contador == 1){
        window.location.assign('fase2.html');
    }else if(contador == 2){
        window.location.assign('fase3.html');
    }else{
        window.location.assign('errado.html');
    }
}

function responder2() {
    let resposta = prompt('Qual a alternativa correta?', 'A ou B');
    if(resposta != null){
        if(resposta == 'a'){
            window.location.assign('certo.html');
            contador = contador + 1;
        }else if(resposta =='b'){
            window.location.assign('errado.html');
        }else{
            alert('Digite uma resposta válida =D')
        }
    }
}

function responder3() {
    let resposta = prompt('Qual a alternativa correta?', 'A ou B');
    if(resposta != null){
        if(resposta == 'a'){
            window.location.assign('certo.html');
        }else if(resposta =='b'){
            window.location.assign('errado.html');
        }else{
            alert('Digite uma resposta válida =D')
        }
    }
}

