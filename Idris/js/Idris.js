function responder1() {
    tentativa = 3;
    while (tentativa > 0) {
        var resposta = prompt('Qual a alternativa correta?', 'A ou B');
        if(resposta != null){
            if(resposta == 'b' || resposta == 'B'){
                tentativa--;
                alert(`Você tem ${tentativa} tentativas restantes`);
            }else if(resposta =='a'|| resposta =='A'){    
                window.location.assign('certo.html');        
                break;
            }else{
                alert('Digite uma resposta válida =D');
            }
        }
    }
    if (tentativa == 0 ) {
        alert('Suas chances acabaram');
        window.location.assign('errado.html');
    }

}

function responder2() {
    tentativa = 3;
    while (tentativa > 0) {
        var resposta = prompt('Qual a alternativa correta?', 'A ou B');
        if(resposta != null){
            if(resposta == 'b' || resposta == 'B'){
                tentativa--;
                alert(`Você tem ${tentativa} tentativas restantes`);
            }else if(resposta =='a'|| resposta =='A'){    
                window.location.assign('certo-1.html');        
                break;
            }else{
                alert('Digite uma resposta válida =D');
            }
        }
    }
    if (tentativa == 0 ) {
        alert('Suas chances acabaram');
        window.location.assign('errado.html');
    }
}

function responder3() {
    tentativa = 3;
    while (tentativa > 0) {
        var resposta = prompt('Qual a alternativa correta?', 'A ou B');
        if(resposta != null){
            if(resposta == 'a' || resposta == 'A'){
                tentativa--;
                alert(`Você tem ${tentativa} tentativas restantes`);
            }else if(resposta =='b'|| resposta =='B'){    
                window.location.assign('final.html');        
                break;
            }else{
                alert('Digite uma resposta válida =D');
            }
        }
    }
    if (tentativa == 0 ) {
        alert('Suas chances acabaram');
        window.location.assign('errado.html');
    }
}

function proximaFase() {
    window.location.assign('fase-2B.html');
}

function proximaFase1() {
    window.location.assign('fase-3C.html');
}

function jogarNovamente() {
    window.location.href='../../index.html';
}