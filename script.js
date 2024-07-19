let tiempoTerminado;
let intervaloDeTiempo;
function inicioJuego(){
  tiempoTerminado = setTimeout(tiempoCumplido, 1000*30);
  intervaloDeTiempo = setInterval(ticTac, 1000);
  
  document.getElementById("cuentaRegresiva").textContent = 30;
}

function ticTac(){
  let tiempo = document.getElementById("cuentaRegresiva").textContent;

  document.getElementById("cuentaRegresiva").textContent = tiempo - 1;
  
}

function tiempoCumplido() {
  clearInterval(intervaloDeTiempo);
  document.getElementById("cuentaRegresiva").textContent = 0;
  document.getElementById("audioFinal").play();
  swal("GAME OVER", "Se termino el tiempo. Intenta nuevamente", "error",);
}

function finDeJuego(){
  clearTimeout(tiempoTerminado);
  clearInterval(intervaloDeTiempo);

  let miFecha = new Date();
  let elementoRespuesta1 = document.getElementById("respuestaUser1").value;
  let elementoRespuesta2 = document.getElementById("respuestaUser2").value;
  let elementoRespuesta3 = document.getElementById("respuestaUser3").value;
  let elementoRespuesta4 = document.getElementById("respuestaUser4").value;
  let elementoRespuesta5 = document.getElementById("respuestaUser5").value;
  
  let textResultado = 
                    " 1. " + elementoRespuesta1 + "\n" + 
                    " 2. " + elementoRespuesta2 + "\n" + 
                    " 3. " + elementoRespuesta3 + "\n" + 
                    " 4. " + elementoRespuesta4 + "\n" + 
                    " 5. " + elementoRespuesta5;
  let fechajuego = miFecha.toLocaleDateString("es-Es")

  swal("Respuestas del " + fechajuego, textResultado , "success");

}
function volverAIntentar() {
  location.reload();
  
};


