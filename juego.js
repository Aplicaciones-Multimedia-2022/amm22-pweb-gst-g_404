window.onload = function(){
    var tablero;
    document.getElementById("boton").onclick = function inicio(){
        tablero = document.getElementById("juego");
        if(tablero && tablero.getContext){
            var ctx = tablero.getContext("2d");

            function tab(){
                ctx.fillStyle = 'lightpink';   //cambiar el color.
                ctx.fillRect(0, 0, 800, 500);

                /*                  PARA PONER BORDES
                ctx.beginPath();
                ctx.moveTo(0,0);
                ctx.lineTo(400,0);
                ctx.lineTo(400,300);
                ctx.lineTo(0,300);
                ctx.lineWidth = 25;
                ctx.strokeStyle = 'darkgreen';
                ctx.stroke();
                */
            }

            tab();
            var homer = new Object();
            homer.pos_x = 50;
            homer.pos_y = 250;

            function pintar_homer() {
              ctx.beginPath();
              ctx.strokeStyle = 'white';
              ctx.arc(homer.pos_x, homer.pos_y, 25, 0, 2 * Math.PI);
              ctx.fillStyle = 'white';
              ctx.fill();
            }
            pintar_homer();

            function pintar_donuts(){
              ctx.beginPath();
              ctx.strokeStyle = "pink";
              ctx.arc
            }

/* ---------------------- MOVER A HOMER -------------------------------- */

            var upPress = False; //Para la flecha de arriba
            var downPress = False; //Para la flecha de abajo

            document.addEventListener("keydown", keyDownHandler, false); //para saber si se pulsa
            document.addEventListener("keyup", keyUpHandler, false); //para saber si se deja de pulsar

            function keyDownHandler(e) {
              if(e.keyCode == 38) {
                upPress = true;
              }
              else if(e.keyCode == 40) {
                downPress = true;
              }
            }

            function keyUpHandler(e) {
              if(e.keyCode == 38) {
                upPress = false;
              }
              else if(e.keyCode == 40) {
                downPress = false;
              }
            }

/* ---------------------- FUNCION PARA PINTAR -------------------------------- */

            function pintar (){
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              pintar_homer();

              if(upPress && homer.pos_y < canvas.width-paddleWidth) { //para el movimiento de la cara de homer
                homer.pos_y += 7;
              }
              else if(downPress && homer.pos_y > 0) {
                homer.pos_y -= 7;
              }

            }
            pintar();

        }
    }
}
