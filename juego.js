window.onload = function(){
    var tablero;
    document.getElementById("boton").onclick = function inicio(){

        var tablero = document.getElementById("juego");

        if(tablero && tablero.getContext){
            /*
            var ctx = tablero.getContext("2d");
            //var marginLeft= 10;
            //var homerctx = homer.getContext("2d")

            
            var upPress = False; //Para la flecha de arriba
            var downPress = False; //Para la flecha de abajo

            //Eventos de escucha del teclado
            document.addEventListener("keydown", keyDownHandler, false); //para saber si se pulsa
            document.addEventListener("keyup", keyUpHandler, false); //para saber si se deja de pulsar

            //Funciones de detección de las teclas
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

            /* //Objeto de homer
            var homer = new Image(100,100);
            homer.src = '../imagenes/Jugador-Homer.png';  
            homer.pos_y = tablero.height/2;
            homer.pos_x = tablero.width/4;
            */
            
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

            function pintar_homer() {
                var img = document.getElementById("homer");
                ctx.drawImage(img, 100, 100, 200, 140);
                /*var homero = new Image();
                homero.src = '../imagenes/Jugador-Homer.jpeg'
                homero.onload = function() {
                    ctx.drawImage(homero.src, 200, 250);
                };*/
            }
            //pintar_homer();

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

            /* ---------------------- FUNCION PARA PINTAR -------------------------------- */
            /*
            function pintar (){
                ctx.clearRect(0, 0, tablero.width, tablero.height);
                tab();
                jugador = new pintar_homer(3,0);
                pintar_donuts();
                x -= 2;

                if(upPress && homer.pos_y < tablero.width-homer.width) { //para el movimiento de la cara de homer
                    homer.pos_y += 7;
                }
                else if(downPress && homer.pos_y > 0) {
                    homer.pos_y -= 7;
                }

            }
            setInterval(pintar, 20);
            */
        }else{
            return alert('No se ha podido crear el objeto canvas');
        }
    }
}
