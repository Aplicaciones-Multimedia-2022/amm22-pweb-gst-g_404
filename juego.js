window.onload = function(){
    var tablero;
    document.getElementById("boton").onclick = function inicio(){
      var tablero = document.getElementById("juego");

      if(tablero && tablero.getContext){
        var ctx = tablero.getContext("2d");
        var marginLeft= 10;
        var homer = new Image();
        var homerctx = homer.getContext("2d")

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



        function pintar_homer(life, score) {
          homerctx.beginPath();
          homerctx.src = 'imagenes/Jugador-Homer.jpeg';
          homerctx.pos_x = (tablero.height/2)-(homer.height/2);
          homerctx.pos_y = tablero.width - (homer.width == 0 ? homer.width) - marginLeft;
          homerctx.life = life;
          homerctx.score = score;
          homerctx.dead = False;
          homerctx.fill();
          homerctx.closePath();
        }

/*
            function pintar_donuts(){
              var x = canva.width-700;
              var y = canva.height-20;
              ctx.beginPath();
              var donuts=new Images();
              donuts.src = 'imagenes/donuts.png';
              donuts.arc = (x, y);
            }
*/
/* ---------------------- MOVER A HOMER -------------------------------- */

         var upPress = False; //Para la flecha de arriba
         var downPress = False; //Para la flecha de abajo

         document.addEventListener("keydown", keyDownHandler, false); //para saber si se pulsa
         document.addEventListener("keyup", keyUpHandler, false); //para saber si se deja de pulsar

         function keyDownHandler(e) {
           if(e.keyCode == 38) {
             upPress = true;
           }else if(e.keyCode == 40) {
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
           ctx.clearRect(0, 0, tablero.width, tablero.height);
           tab();
           jugador = new pintar_homer(3,0);
            //  pintar_donuts();
            //  x -= 2;

           if(upPress && homer.pos_y < tablero.width-homer.width) { //para el movimiento de la cara de homer
             homer.pos_y += 7;
           }
           else if(downPress && homer.pos_y > 0) {
             homer.pos_y -= 7;
           }

         }
         setInterval(pintar, 20);

         }else{
           return alert('No se ha podido crear el objeto canvas');
         }
    }
}
