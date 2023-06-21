//let -> es para declarar la variable
let app = document.getElementById('typewriter');
// document.getElementById('typewriter'); ESTA CONECTANDOSE CON EL HTML  
//.getElementById (ID)---- AGARRANDO EL ELEMENTO CON EL ID 

let typewriter = new Typewriter(app, {
  loop: true,//SE REPITE CADA QUE TERMINA EL CICLO
  delay: 75, // LA ESPERA DE TIEMPO
});
 // CADA PUNTO QUIERE DECIR QUE SE LE AGREGA UN METODO
 // METODOS CONCATENADOS EN typewriter
typewriter

  .pauseFor(2500)
  .typeString('<span style="color:#758eb7"> La mejor empresa de gomitas del país.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
