//tpfinalParte1
//Elian Arce y Jeremias Encinas

let imagen=[];
let estado=0;
let frases=['Sos el oficial Rojas. Es de noche y recibís un llamado por disparos en el barrio. Llegás al lugar. Ves una mochila tirada en el suelo. ¿Querés revisar la mochila?',
  'La mochila tiene papeles con nombres tachados y una foto de tu compañero. Sentís que algo raro pasa. Escuchás pasos sobre el techo. ¿Subís al techo a mirar?',
  'Ignorás la mochila y mirás los techos. Una sombra salta entre los tanques de agua. Un disparo resuena cerca. ¿Apuntás tu arma?',
  'Una voz grita: “¡No dispares! Me están persiguiendo a mí.” Ves un chico con miedo. Por radio te ordenan disparar sin dudar. ¿Cumplís la orden?',
  'Mientras observás la calle, un patrullero se detiene. Tu jefe baja y te ordena que busques al sospechoso “sin preguntas”. Sabés que algo no cierra. Confiás en tu jefe',
  'Guardás el arma y el chico baja lentamente. Te cuenta que lo quieren culpar por algo que no hizo. Te muestra un cuaderno con pruebas. ¿Decidís ayudarlo? ',
  'Abrís fuego. Cuando vas a ver, el chico desapareció. Solo queda la mochila vacía. Sentís un vacío enorme.Rojas cae en una emboscada. El jefe lo traiciona. Su historia se borra de los informes oficiales.',
  'Bajás el arma. El chico se llama Nico y dice tener pruebas contra la policía. Te pide que lo ayudes a escapar.Lo ayudas',
  'Desobedecés la orden y revisás por tu cuenta. Encontrás un galpón con cajas de armas y documentos. Tu jefe te llama furioso por radio. Le contás lo que viste ',
  'Con Nico entrás al galpón. Hay papeles, nombres y fotos de policías corruptos. Alguien los descubre.¿Grabas todo con tu celular?',
  'Arrestás a Nico y lo llevás a la comisaría. Tu jefe lo interroga y borra las pruebas. Al día siguiente, te ascienden. Pero algo te carcome por dentro.',
  'Tu jefe llega al galpón y te felicita. Pero notás el mismo símbolo en su campera que en las cajas. Ya sabés que está metido. Lo enfrentas. Grabas la evidencia',
  'Grabás todo y salís corriendo con Nico. Suben al auto y logran escapar del barrio. En las noticias, la verdad sale a la luz. ',
  'Rojas y Nico publican las pruebas. Caen los responsables. Rojas pierde su placa, pero no su conciencia. El que esquiva las balas es el que elige no disparar. ',
];
function preload() {
  for (let i=0; i<16; i++) {
    imagen[i]=loadImage('data/pantalla'+i+'.jpg');
  }
}

function setup() {
  createCanvas(640, 480);
  for (let i=0; i<16; i++) {
    imagen[i].resize(640, 480); //Funcion para redimensionar una imagen
  }
  textSize(18);
}


function draw() {
  //fondilli(imagen, texto, posX, posY, posXB, posYB, tamXB, tamYB)
  if (estado===0) {
    multi(imagen[0]);// agregamos un texto
    boton(300, 400, 100, 50, "INICIAR");
  }

  if (estado===1) {
    multi(imagen[1], frases[0], 30, 270, 28, 280, 600, 100);
    boton(50, 400, 100, 50, "SI");
    boton(500, 400, 100, 50, "NO");
  }

  if (estado===2) {
    multi (imagen[2], frases[1], 30, 270, 28, 280, 600, 100  );
    boton(50, 400, 100, 50, "SI");
    boton(500, 400, 100, 50, "NO");
  }
  if (estado===3) {
    multi (imagen[3], frases[2], 30, 270, 28, 280, 600, 100 );
    boton(50, 400, 100, 50, "SI");
    boton(500, 400, 100, 50, "NO");
  }
  if (estado===4) {
    multi (imagen[4], frases[3], 30, 270, 28, 280, 600, 100 );
    boton(50, 400, 100, 50, "SI");
    boton(500, 400, 100, 50, "NO");
  }

  if (estado===5) {
    multi (imagen[5], frases[4], 30, 270, 28, 280, 600, 100 );
    boton(300, 400, 100, 50, "Continuar")
  }
  if (estado===6) {
    multi(imagen[6], frases[5], 30, 270, 28, 280, 600, 100 );
    boton(50, 400, 100, 50, "SI");
    boton(500, 400, 100, 50, "NO");
  }
  if (estado===7) {
    multi(imagen[7], frases[6], 30, 270, 28, 280, 600, 100 );
    boton(300, 400, 100, 50, "REINICIAR");
    boton(150, 400, 100, 50, "CREDITOS");
  }
  if (estado===8) {
    multi(imagen[8], frases[7], 30, 270, 28, 280, 600, 100);
    boton(300, 400, 100, 50, "Continuar")
  }
  if (estado===9) {
    multi (imagen[9], frases[8], 30, 270, 28, 280, 600, 100);
    boton(300, 400, 100, 50, "Continuar")
  }
  if (estado===10) {
    multi (imagen[10], frases[9], 30, 270, 28, 280, 600, 100 );
    boton(50, 400, 100, 50, "SI");
    boton(500, 400, 100, 50, "NO");
  }
  if (estado===11) {
    multi(imagen[11], frases[10], 30, 270, 28, 280, 600, 100 );
    boton(300, 400, 100, 50, "REINICIAR");
    boton(150, 400, 100, 50, "CREDITOS");
  }
  if (estado===12) {
    multi (imagen[12], frases[11], 30, 270, 28, 280, 600, 100 );
    boton(300, 400, 100, 50, "Continuar") ;
  }
  if (estado===13) {
    multi (imagen[13], frases[12], 30, 270, 28, 280, 600, 100 );
    boton(300, 400, 100, 50, "Continuar");
  }
  if (estado===14) {
    multi(imagen[14], frases[13], 30, 270, 28, 280, 600, 100 );
    boton(300, 400, 100, 50, "REINICIAR");
    boton(150, 400, 100, 50, "CREDITOS");
  }
  if (estado===15) {
    multi(imagen[15], frases[14], 30, 270, 28, 280, 600, 100 );
    boton(300, 400, 100, 50, "REINICIAR");
    boton(150, 400, 100, 50, "CREDITOS");
  }
  if (estado===16) {
    multi(imagen[15] );
    boton(300, 400, 100, 50, "REINICIAR");
  }
}


function mousePressed() { // interacciones para definir la navegación
  if (estado===0) {
    if (overMouse(300, 400, 100, 50)) {
      estado = 1;
      return;
    }
  }
  if (estado===1) {
    if (overMouse(50, 400, 100, 50, )) {
      estado = 2;
      return;
    } else if (overMouse(500, 400, 100, 50)) {
      estado = 3;
      return;
    }
  }
  if (estado===2) {
    if (overMouse(50, 400, 100, 50, )) {
      estado = 4;
      return;
    } else if (overMouse(500, 400, 100, 50)) {
      estado = 5;
      return;
    }
  }
  if (estado===3) {
    if (overMouse(50, 400, 100, 50, )) {
      estado = 4;
      return;
    } else if (overMouse(500, 400, 100, 50)) {
      estado = 6 ;
      return;
    }
  }
  if (estado===4) {
    if (overMouse( 50, 400, 100, 50, )) {
      estado = 7;
      return;
    } else if (overMouse(500, 400, 100, 50)) {
      estado = 8 ;
      return;
    }
  }
  if (estado===5) {
    if (overMouse(300, 400, 100, 50, )) {
      estado = 7;
      return;
    }
  }
  if (estado===6) {
    if (overMouse(50, 400, 100, 50, )) {
      estado = 10;
      return;
    } else if (overMouse(500, 400, 100, 50)) {
      estado = 11 ;
      return;
    }
  }
  if (estado===7) {
    if (overMouse(300, 400, 100, 50)) {
      estado = 0;
      return;
    }else if (overMouse(150, 400, 100, 50)) {
      estado = 16 ;
      return;
    }
  }
  if (estado===8) {
    if (overMouse(300, 400, 100, 50, )) {
      estado = 10;
      return;
    }
  }
  if (estado===9) {
    if (overMouse(300, 400, 100, 50, )) {
      estado = 12;
      return;
    }
  }
  if (estado===10) {
    if (overMouse(50, 400, 100, 50, )) {
      estado = 13;
      return;
    } else if (overMouse(500, 400, 100, 50)) {
      estado = 14 ;
      return;
    }
  }
  if (estado===11) {
    if (overMouse(300, 400, 100, 50)) {
      estado = 0;
      return;
    }else if (overMouse(150, 400, 100, 50)) {
      estado = 16 ;
      return;
    }
    
  }
  if (estado===12) {
    if (overMouse(300, 400, 100, 50, )) {
      estado = 14;
      return;
    }
  }
  if (estado===13) {
    if (overMouse( 300, 400, 100, 50, )) {
      estado = 14;
      return;
    }
  }
  if (estado===14) {
    if (overMouse(300, 400, 100, 50, )) {
      estado = 0;
      return;
    }
    else if (overMouse(150, 400, 100, 50)) {
      estado = 16 ;
      return;
    }
  }
  if (estado===16) {
    if (overMouse(300, 400, 100, 50, )) {
      estado = 0;
      return;
    }
  }
}





function boton(posX, posY, tamX, tamY, textoB) { // una función para dibujar zonas rectangulares
  if (overMouse(posX, posY, tamX, tamY)) {
    fill(100);
  } else {
    fill(0);
  }
  rect(posX, posY, tamX, tamY, tamY/4);
  fill(255);
  textAlign(CENTER, CENTER);
  text(textoB, posX+tamX/2, posY+tamY/2);
}

function overMouse(posX, posY, tamX, tamY) {
  return mouseX>posX && mouseX<posX+tamX && mouseY>posY && mouseY<posY+tamY;
}
/*esta es una función genérica para crear pantallas flexibles a diferentes contenidos*/
function multi(imagen, texto, posX, posY, posXB, posYB, tamXB, tamYB, textoB) {
  image(imagen, 0, 0);
  boton(posXB, posYB, tamXB, tamYB, textoB);
  fill(255);
  text(texto, posX, posY, tamXB, tamYB);
}
