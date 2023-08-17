var altura = 0;
var largura = 0;
vidas = 1
tempo = 10
criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?','')

if (nivel == "facil") {
  criaMosquitoTempo = 1500;
} else if (nivel == "medio") {
  criaMosquitoTempo = 1000;
} else if (nivel == "dificil") {
  criaMosquitoTempo = 750;
} else if (nivel == "imp") {
  criaMosquitoTempo = 500;
}


function ajustarTamanhoPalcoJogo(){ 
    largura = window.innerWidth;
    altura = window.innerHeight;
    console.log(altura, largura);

}
ajustarTamanhoPalcoJogo()

var cronometro = setInterval(function(){
  tempo--;
  if(tempo<0){
    clearInterval(cronometro)
    clearInterval(criaMosquito)
    window.location.href = 'vitoria.html'

  }
  else{
    document.getElementById("cronometro").innerHTML = tempo;
  }
}, 1000)


  //Posições randomicas

  function posicaoRandom() {
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        
        if(vidas>3){
            window.location.href = 'gameover.html'
        }
        else{
          document.getElementById("v"+vidas).src = "imagens/coracao_vazio.png";
          vidas++;
        };



    }
   
    var posicaoX = Math.floor(Math.random() * largura) - 120;
    var posicaoY = Math.floor(Math.random() * altura) - 120;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoY, posicaoX);

    //criar elemento html
    var mosquito = document.createElement("img");
    mosquito.src = "imagens/mosca.png";
    mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio();
    mosquito.style.left = posicaoX + "px";
    mosquito.style.top = posicaoY + "px";
    mosquito.style.position = "absolute";
    mosquito.id = "mosquito";
    mosquito.onclick = function(){
      this.remove()
    }

    document.body.appendChild(mosquito);
    console.log(tamanhoAleatorio());
    console.log(ladoAleatorio());
  }

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random()*3)

    switch (classe) {
      case 0:
        return "mosquito1";
      case 1:
        return "mosquito2";
      case 2:
        return "mosquito3";
    }
}

function ladoAleatorio() {
  var classe = Math.floor(Math.random() * 2);

  switch (classe) {
    case 0:
      return "ladoA";
    case 1:
      return "ladoB";
  }
}







