window.onload = function(){
    var tablero;
    document.getElementById("boton").onclick = function inicio(){

        var tablero = document.getElementById("juego");

        if(tablero && tablero.getContext){
            var ctx = tablero.getContext("2d");
            
            //var marginLeft= 10;
            //var homerctx = homer.getContext("2d")

            var upPress = false; //Para la flecha de arriba
            var downPress = false; //Para la flecha de abajo

            //variables de movimiento
            var pelota_radio = 20;
            var pelota_x = tablero.width/16;
            var pelota_y = tablero.height/2;

            //variables movimiento donuts
            var donut_x = (tablero.width - tablero.width/16);   //ancho original - 1/16 ancho
            var dx_donut = 1;
            var donut_y = Math.random();

            //Posibles valores para los donuts en sus carriles
            if(donut_y > 0 && donut_y < 0.2){
                donut_y = 83;
            }else if(donut_y >= 0.2 && donut_y < 0.4){
                donut_y = 166;
            }else if(donut_y >= 0.4 && donut_y < 0.6){
                donut_y = 250;
            }else if(donut_y >= 0.6 && donut_y < 0.8){
                donut_y = 333;
            }else{
                donut_y = 416;
            }
            

            //Eventos de escucha del teclado
            document.addEventListener("keydown", keyDownHandler, false); //para saber si se pulsa
            document.addEventListener("keyup", keyUpHandler, false); //para saber si se deja de pulsar
            
            //Funciones de detección de las teclas
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
            

            function pintar_homer() {
                var img = document.getElementById("homer");
                //ctx.drawImage(img, 100, 100, 200, 140);
                ctx.drawImage(img, 50, 25, 500, 500, pelota_x, pelota_y-35, 80, 80);

                /*var homero = new Image();
                homero.src = '../imagenes/Jugador-Homer.jpeg'
                homero.onload = function() {
                    ctx.drawImage(homero.src, 200, 250);
                };*/
            }


            function pelota(){      //Dibujo una pelota para simular que es homer
                ctx.beginPath();
                ctx.arc(pelota_x, pelota_y, pelota_radio, 0, Math.PI*2);
                ctx.fillStyle = "green";
                ctx.fill();
                ctx.closePath();

            }
            

            
            function pintar_donuts(){
                ctx.beginPath();
                ctx.arc(donut_x, donut_y, pelota_radio, 0, Math.PI*2);
                ctx.fillStyle = "green";
                ctx.fill();
                ctx.closePath();
            }
            

            /* ---------------------- FUNCION PARA PINTAR -------------------------------- */
            
            function pintar (){

                ctx.clearRect(0, 0, tablero.width, tablero.height);
                tab();
                //pelota();
                pintar_homer();
                pintar_donuts();
                
                //Movimineto de la pelota
                if(upPress) {
                    if(pelota_y < 100){      //Para poner un borde artificial y que no nos salgamos del mapa
                        pelota_y -= 0;
                    }
                    else{
                        pelota_y -= 83;
                        upPress = false;        //Para que las pulsaciones sean finitas
                    }
                    
                }
                else if(downPress) {
                    if(pelota_y > 400){ 
                        pelota_y += 0;
                    }
                    else{
                        pelota_y += 83;
                        downPress = false;
                    }
                }
                
                //Movimiento de los donuts
                donut_x -= 2*dx_donut;
            }
            setInterval(pintar, 20);
            
        }
        else{
            return alert('No se ha podido crear el objeto canvas');
        }
    }
}
