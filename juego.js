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

            var marginLeft= 10;

            function pintar_homer(life, score) {

              var homer = new Image();
              homer.src = 'imagenes/Jugador-Homer.jpeg';
              homer.pos_x = (canvas.height/2)-(homer.height/2);
              homer.pos_y = canvas.width - (player.width == 0 ? player.Width) - marginLeft;
              homer.life = life;
              homer.score = score;
              homer.dead = False;
            }


            function pintar_donuts(){
              var x = canva.width-700;
              var y = canva.height-20;
              ctx.beginPath();
              var donuts=new Images();
              donuts.src = 'imagenes/donuts.png';
              donuts.arc = (x, y);
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
              pintar_homer(3,0);
              pintar_donuts();
              x -= 2;

              if(upPress && homer.pos_y < canvas.width-paddleWidth) { //para el movimiento de la cara de homer
                homer.pos_y += 7;
              }
              else if(downPress && homer.pos_y > 0) {
                homer.pos_y -= 7;
              }

            }
            setInterval(pintar, 10);

        }
    }
}
