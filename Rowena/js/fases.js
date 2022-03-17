function responder1() {
    var resposta = prompt('Qual a alternativa correta?', 'A ou B');
    if(resposta != null){
        if(resposta == 'a'){
            window.location.assign('errado.html');
        }else if(resposta =='b'){            
            window.location.assign('certo.html');
        }else{
            alert('Digite uma resposta válida =D')
        }
    }
}

function responder2() {
    var resposta = prompt('Qual a alternativa correta?', 'A ou B');
    if(resposta != null){
        if(resposta == 'a'){
            window.location.assign('errado.html');
        }else if(resposta =='b'){            
            window.location.assign('certo-1.html');
        }else{
            alert('Digite uma resposta válida =D')
        }
    }
}

function responder3() {
    var resposta = prompt('Qual a alternativa correta?', 'A ou B');
    if(resposta != null){
        if(resposta == 'a'){
            window.location.assign('errado.html');
        }else if(resposta =='b'){            
            window.location.assign('final.html');
        }else{
            alert('Digite uma resposta válida =D')
        }
    }
}

function proximaFase() {
    window.location.assign('fase-2.html');
}

function proximaFase1() {
    window.location.assign('fase-3.html');
}