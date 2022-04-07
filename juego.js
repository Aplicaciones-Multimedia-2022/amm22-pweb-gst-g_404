window.onload = function(){
    var tablero;
    document.getElementById("boton").onclick = function inicio(){

        var tablero = document.getElementById("juego");

        if(tablero && tablero.getContext){
            var ctx = tablero.getContext("2d");
            /*---------------------------------------------------------------------------*/
                //INICIALIZACIÓN DE VARIABLES//
            /*---------------------------------------------------------------------------*/
            //var marginLeft= 10;
            //var homerctx = homer.getContext("2d")
            var flag=1;

            var upPress = false; //Para la flecha de arriba
            var downPress = false; //Para la flecha de abajo

            //variables de movimiento
            var pelota_radio = 20;
            var pelota_x = tablero.width/16;
            var pelota_y = tablero.height/2;

            //tamaño de imagenes 80x80 (homer)
            var altH=80;
            var ancH=80;



            //variables movimiento donuts y brocolis
            var donut_x = (tablero.width - tablero.width/16);   //ancho original - 1/16 ancho
            //var donut_x2 = (tablero.width - tablero.width/16);
            var dx_donut = 1;

            //variables de movimiento brocoli CREO QUE SE PUEDEN USAR LAS MISMAS PARA AMBOS
            var brocoli_x = (tablero.width - tablero.width/16);
          //  var brocoli_y = Math.random();


            /*---------------------------------------------------------------------------*/
            //Inicialización de las alturas de los donuts
            var donut_y = Math.random();

            if(donut_y >= 0 && donut_y < 0.2){
                donut_y = (tablero.height/2)-166;
            }else if(donut_y >= 0.2 && donut_y < 0.4){
                donut_y = (tablero.height/2) - 83;
            }else if(donut_y >= 0.4 && donut_y < 0.6){
                donut_y = 250;
            }else if(donut_y >= 0.6 && donut_y < 0.8){
                donut_y = 333;
            }else{
                donut_y = 416;
            }
            function obtener_y(y){
                var y = Math.random();
                if(y >= 0 && y < 0.2){
                    y = (tablero.height/2)-166;
                }else if(y >= 0.2 && y < 0.4){
                    y = (tablero.height/2)-83;
                }else if(y >= 0.4 && y < 0.6){
                    y = 250;
                }else if(y >= 0.6 && y < 0.8){
                    y = 333;
                }else{
                    y = 416;
                }
                return y;
            }
            /*---------------------------------------------------------------------------*/
            //Variable y función para incrementar el contador de tiempo
            var tiempo = 0;
            function incremento_tiempo(){
                tiempo += 1;
                return tiempo;
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



            /*---------------------------------------------------------------------------*/
                //FUNCIONES DEL JUEGO//
            /*---------------------------------------------------------------------------*/
            //Función para pintar el tablero
            function tab(){
                ctx.fillStyle = 'lightpink';   //cambiar el color.
                ctx.fillRect(0, 0, 800, 500);

                /*  //PARA PONER BORDES
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
            //objeto Homer
            let homer = function(vidas, score){
              this.vidas = vidas ;
              this.score = score;
              //homer.posicion = ;
              this.pintar_homer = function(){ //Función para pintar a homer
                var img_h = document.getElementById("homer");
                ctx.drawImage(img_h, 50, 25, 500, 500, pelota_x, pelota_y-35, altH, ancH);
                //El 80, 80 es el tamaño de la imagen. Lo tenemos que tener en cuenta para las colisiones.
                };
            }
            pers_homer = new homer(3,0);

            //objeto donuts
            let donuts = function() {
              this.pintar_donuts = function(){ //Función para pintar a homer
                var img_d = document.getElementById("donuts");
                ctx.drawImage(img_d, 400, 250, 500, 500, donut_x, donut_y, altH, ancH);
                };
            }
            obj_donut = new donuts();

            //objeto brocoli
            let brocoli= function(){
              this.pintar_brocoli = function(){ //Función para pintar a homer
                var img_b = document.getElementById("brocoli");
                ctx.drawImage(img_b, 600, 600, 700, 700, brocoli_x, donut_y-35, 80, 80);
                };
            }
            obj_brocoli = new brocoli();


            //variables para detectar la colision
            var colisionB = false; //colision con brocoli
            var colisionD = false; //colision con donut

            function colision(col, x){
              if((pelota_x+ancH)>x && ((pelota_y)==(donut_y))){
                col = true;
              }
              return col;
            }

            function pintar_tiempo(){
                ctx.font = "16px Arial";
                ctx.fillStyle = "black";
                ctx.fillText("Tiempo de juego: "+ tiempo + " segundos", 10, 20);
            }

            function pintar_vidas(){
                ctx.font = "16px Arial";
                ctx.fillStyle = "black";
                ctx.fillText("Vidas: "+ pers_homer.vidas, 10, 20);
            }

            function desaparecer(){//que desaparezca el objeto cuando colisione

            }

            /*---------------------------------------------------------------------------*/
                //BUCLE DEL JUEGO//
            /*---------------------------------------------------------------------------*/
            function pintar (){

                ctx.clearRect(0, 0, tablero.width, tablero.height); //Limpiamos el tablero
                tab();  //Dibujamos el tablero
                //colision();
                pers_homer.pintar_homer();

                //obj_donut.pintar_donuts();
                //obj_brocoli.pintar_brocoli();
                //pintar_homer(); //Pintamos a homer
                //pintar_tiempo(); // temporizador
                pintar_vidas();
                //array de donuts
                //array de brocolis


                if(brocoli_x > tablero.width/32){
                    obj_brocoli.pintar_brocoli();

                    //obj_donut.pintar_donuts();
                }else{
                    brocoli_x = tablero.width - tablero.width/16
                    donut_y = obtener_y(donut_y);
                }


                if(colision(colisionB, brocoli_x)==true){
                  pers_homer.vidas -=1;
                  //pintar_vidas();
                  //clearInterval(intervalo);
                }else if(colision(colisionD, donut_x) == true){
                  pers_homer.score +=1;
                }



                //Movimineto de homer
                if(upPress) {
                    if(pelota_y < 100){      //Para poner un borde artificial y que no nos salgamos del mapa
                        pelota_y -= 0;
                    }
                    else{
                        pelota_y += -83;
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
                brocoli_x -= 2*dx_donut;



            }
            const intervalo = setInterval(pintar, 15);
            const time = setInterval(incremento_tiempo, 1000);  //incrementamos el tiempo cuando pasa 1s

        }
        else{
            return alert('No se ha podido crear el objeto canvas');
        }
    }
}
