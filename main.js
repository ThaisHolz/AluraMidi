/* ------PARA ATRIBUIR SOM EM UM UNICO BOTÃO------
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom; //No caso de atribuição não add ()
*/

function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    
    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }else{
        console.log('Elemento não encontrado ou seletor inválido.');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    //Ativa o som quando clica
    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    //Para deixar colorido quando usado espaço ou enter
    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }       
    }

    //Para remover a cor quando acaba o evento
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
