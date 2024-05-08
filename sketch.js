function movimentaRaqueteOponente(){
    if (keyIsDown(UP_ARROW)){
        yRaqueteOponente -= 10;
    }
    if (keyIsDown(DOWN_ARROW)){
        yRaqueteOponente += 10;
    }

}

function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(131, 111, 255));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(131, 111, 255));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);


}

function marcaPonto() {
  if (xBolinha > 580) {
    meusPontos += 1;
    ponto.play()
  }
  if (xBolinha < 11) {
    pontosDoOponente += 1;
    ponto.play()
  }
}
