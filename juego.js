window.onload = function(){
    //var tablero;
    document.getElementById("boton").onclick = function inicio(){

        var tablero = document.getElementById("juego");

        if(tablero && tablero.getContext){
            var ctx = tablero.getContext("2d");

            class Homer{
                constructor(x, y, alt, ancho){
                    this.x = x;
                    this.y = y;
                    this.alt = alt;
                    this.ancho = ancho;
                } 
                
                pintar(){
                    var img = document.getElementById("homer");
                    ctx.drawImage(img, 50, 25, 450, 450, this.x, this.y-35, this.alt, this.ancho);
                }

            }

            class Brocoli{
                constructor(x, y, alt, ancho, velocidad){
                    this.x = x;
                    this.y = y;
                    this.alt = alt;
                    this.ancho = ancho;
                    this.velocidad = velocidad;
                }

                pintar(){
                    var img = document.getElementById("brocoli");
                    ctx.drawImage(img, 550, 500, 850, 800, this.x, this.y - 35, alt, ancho);
                }

                actualizar(){
                    this.pintar();
                    this.x = this.x + this.velocidad;
                }
            }

            class Donut{
                constructor(x, y, alt, ancho, velocidad){
                    this.x = x;
                    this.y = y;
                    this.alt = alt;
                    this.ancho = ancho;
                    this.velocidad = velocidad;
                }

                pintar(){
                    var img = document.getElementById("donuts");
                    ctx.drawImage(img_d, 50, 50, 800, 800, this.x, this.y - 35, alt, ancho);
                }

                actualizar(){
                    this.pintar();
                    this.x = this.x + this.velocidad;
                }
            }
            function tab(){
                ctx.beginPath();
                ctx.fillStyle = 'lightpink';   //cambiar el color.
                ctx.fillRect(0, 0, 800, 500);
            }

            const x = tablero.width/16;
            const y = tablero.height/2;
            const altura = 80;
            const ancho = 80;

            const jugador = new Homer(x, y, altura, ancho);

            const brocolis_ = [];
            const donuts_ = [];



            /**++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
            //Eventos de escucha del teclado
            var upPress = false;
            var downPress = false;

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
            /**++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

            function jugar(){
                requestAnimationFrame(jugar);
                ctx.clearRect(0, 0, tablero.width, tablero.height);
                tab();
                jugador.pintar();


                //Movimineto del jugador
                if(upPress) {
                    if(jugador.y < 100){      //Para poner un borde artificial y que no nos salgamos del mapa
                        jugador.y -= 0;
                    }
                    else{
                        jugador.y += -83;
                        upPress = false;        //Para que las pulsaciones sean finitas
                    }

                }
                else if(downPress) {
                    if(jugador.y > 400){
                        jugador.y += 0;
                    }
                    else{
                        jugador.y += 83;
                        downPress = false;
                    }
                }
            }



            jugar()


        }



























            
        //     /*---------------------------------------------------------------------------*/
        //         //INICIALIZACIÓN DE VARIABLES//
        //     /*---------------------------------------------------------------------------*/
        //     //var marginLeft= 10;
        //     //var homerctx = homer.getContext("2d")
        //     var flag=1;

        //     var upPress = false; //Para la flecha de arriba
        //     var downPress = false; //Para la flecha de abajo

        //     //variables de movimiento
        //     var pelota_x = tablero.width/16;
        //     var pelota_y = tablero.height/2;

        //     //tamaño de imagenes 80x80 (homer)
        //     var altH=80;
        //     var ancH=80;

        //     //Variables de posición de homer
        //     var homerX = tablero.width/16;
        //     var homerY = tablero.height/2;

        //     //variables movimiento donuts y brocolis
        //     var donut_x = (tablero.width - tablero.width/16);   //ancho original - 1/16 ancho
        //     var donut_x2 = (tablero.width - tablero.width/16);
        //     var donut_x3 = (tablero.width - tablero.width/16);
        //     var donut_y = 0;

        //     var dx_donut = 1;   //Movimiento de los donuts.
            

        //     //variables de movimiento brocoli CREO QUE SE PUEDEN USAR LAS MISMAS PARA AMBOS
        //     var brocoli_x = (tablero.width - tablero.width/16);
        //     var brocoli_x2 = (tablero.width - tablero.width/16);
        //     var brocoli_x3 = (tablero.width - tablero.width/16);
        //     var brocoli_y = 0;

        //     var dx_brocoli = 1;
        //   //  var brocoli_y = Math.random();


        //     /*---------------------------------------------------------------------------*/
        //     //Función para las alturas de los objetos aleatorios
        //     function obtener_y(y){
        //         if(y >= 0 && y < 0.2){
        //             y = (tablero.height/2)-166;
        //         }else if(y >= 0.2 && y < 0.4){
        //             y = (tablero.height/2)-83;
        //         }else if(y >= 0.4 && y < 0.6){
        //             y = 250;
        //         }else if(y >= 0.6 && y < 0.8){
        //             y = 333;
        //         }else{
        //             y = 416;
        //         }
        //         return y;
        //     }
        //     /*---------------------------------------------------------------------------*/
        //     //Variable y función para incrementar el contador de tiempo
        //     var tiempo = 0;
        //     function incremento_tiempo(){
        //         tiempo += 1;
        //         return tiempo;
        //     }


        //     //Eventos de escucha del teclado
        //     document.addEventListener("keydown", keyDownHandler, false); //para saber si se pulsa
        //     document.addEventListener("keyup", keyUpHandler, false); //para saber si se deja de pulsar

        //     //Funciones de detección de las teclas
        //     function keyDownHandler(e) {
        //         if(e.keyCode == 38) {
        //             upPress = true;
        //         }
        //         else if(e.keyCode == 40) {
        //             downPress = true;
        //         }
        //     }

        //     function keyUpHandler(e) {
        //         if(e.keyCode == 38) {
        //             upPress = false;
        //         }
        //         else if(e.keyCode == 40) {
        //           downPress = false;
        //         }
        //     }



        //     /*---------------------------------------------------------------------------*/
        //         //FUNCIONES DEL JUEGO//
        //     /*---------------------------------------------------------------------------*/
        //     //Función para pintar el tablero
        //     function tab(){
        //         ctx.fillStyle = 'lightpink';   //cambiar el color.
        //         ctx.fillRect(0, 0, 800, 500);

        //         /*  //PARA PONER BORDES
        //         ctx.beginPath();
        //         ctx.moveTo(0,0);
        //         ctx.lineTo(400,0);
        //         ctx.lineTo(400,300);
        //         ctx.lineTo(0,300);
        //         ctx.lineWidth = 25;
        //         ctx.strokeStyle = 'darkgreen';
        //         ctx.stroke();
        //         */
        //     }
        //     //objeto Homer
        //     let homer = function(vidas, score){
        //         this.vidas = vidas ;
        //         this.score = score;
        //         this.pintar_homer = function(){ //Función para pintar a homer
        //             var img_h = document.getElementById("homer");
        //             ctx.drawImage(img_h, 50, 25, 450, 450, homerX, homerY-35, altH, ancH);
        //         };
        //     }
        //     pers_homer = new homer(3,0);

        //     //objeto donuts
        //     let donuts = function() {
        //         var y_don = Math.random();
        //         var donut_y = obtener_y(y_don);
        //         this.pintar_donuts = function(){ //Función para pintar a homer
        //             var img_d = document.getElementById("donuts");
        //             ctx.drawImage(img_d, 50, 50, 800, 800, donut_x, donut_y-35, altH, ancH);
        //         };
        //     }
        //     obj_donut = new donuts();


        //     var y_broc = Math.random();
        //     var brocoli_y = obtener_y(y_broc);
        //     var existe = 1;
        //     //objeto brocoli
        //     let brocoli= function(){
        //         //var y_broc = Math.random();
        //         //var brocoli_y = obtener_y(y_broc);
        //         this.pintar_brocoli = function(){ //Función para pintar a homer
        //             var img_b = document.getElementById("brocoli");
        //             if(existe == 1){
        //                 ctx.drawImage(img_b, 550, 500, 850, 800, brocoli_x, brocoli_y - 35, altH, ancH);
        //             }else{
        //                 brocoli_x = tablero.width - tablero.width/16;
        //             }
        //         };
        //     }
        //     obj_brocoli = new brocoli();

           
        //     //variables para detectar la colision
        //     var colisionB = false; //colision con brocoli
        //     var colisionD = false; //colision con donut

        //     function colision(col, x){  //col = variable de la colisión. x = posición x del objeto a colisionar
        //         if( ((homerX + ancH) > x && (homerY == donut_y)) || ((homerX + ancH) > x && (homerY == brocoli_y)) ){
        //             ///////////////// Hacer en los brócolis y donuts variables desde la función obtener_y
        //             col = true;
        //         }
        //         return col;
        //     }

        //     function pintar_tiempo(){
        //         ctx.font = "16px Arial";
        //         ctx.fillStyle = "black";
        //         ctx.fillText("Tiempo de juego: "+ tiempo + " segundos", 10, 20);
        //     }

        //     function pintar_vidas(){
        //         ctx.font = "16px Arial";
        //         ctx.fillStyle = "black";
        //         ctx.fillText("Vidas: "+ pers_homer.vidas, 10, 20);
        //     }

        //     function desaparecer(){//que desaparezca el objeto cuando colisione
        //         existe = 0;
                
        //     }


        //     //Intento crear la matriz de objetos
        //     const brocolis = [];


        //     /*---------------------------------------------------------------------------*/
        //         //BUCLE DEL JUEGO//
        //     /*---------------------------------------------------------------------------*/
        //     function pintar (){

        //         requestAnimationFrame(pintar);

        //         ctx.clearRect(0, 0, tablero.width, tablero.height); //Limpiamos el tablero
        //         tab();  //Dibujamos el tablero
        //         pers_homer.pintar_homer();
        //         //pintar_tiempo(); // temporizador
        //         pintar_vidas();
        //         //obj_donut.pintar_donuts();
        //         //obj_brocoli.pintar_brocoli();

        //         /*


                
        //        if(colision(colisionB, brocoli_x)==true){
        //             pers_homer.vidas -=1;
        //             existe = 0;
        //         }
        //         */
           
        //         /*
        //         if(brocoli_x > tablero.width/32){
        //             brocolis[0].pintar_brocoli();
        //             brocolis[1].pintar_brocoli();

        //             //obj_donut.pintar_donuts();
        //         }else{
        //             brocoli_x = tablero.width - tablero.width/16
        //             donut_y = obtener_y(donut_y);
        //         }
        //         */
                
        //         /*  va bien
        //         //colisiones
        //         if(colision(colisionB, brocoli_x)==true){
        //             pers_homer.vidas -=1;
        //             brocoli_x = tablero.width- tablero.width/16;
        //             brocoli_y = obtener_y(donut_y);
        //         }else if(colision(colisionD, donut_x) == true){
        //             pers_homer.score +=1;
        //             donut_x = tablero.width - tablero.width/16;
        //             //Ver para el caso del donut las variables y
        //         }else if(pers_homer.vidas == 0){
        //             clearInterval(intervalo);
        //             alert('Has perdido todas las vidas');
        //             alert('Pulse el botón de inicio para reiniciar el juego');
        //         }
        //         */




        //         //Movimineto de homer
        //         if(upPress) {
        //             if(homerY < 100){      //Para poner un borde artificial y que no nos salgamos del mapa
        //                 homerY -= 0;
        //             }
        //             else{
        //                 homerY += -83;
        //                 upPress = false;        //Para que las pulsaciones sean finitas
        //             }

        //         }
        //         else if(downPress) {
        //             if(homerY > 400){
        //                 homerY += 0;
        //             }
        //             else{
        //                 homerY += 83;
        //                 downPress = false;
        //             }
        //         }

        //         //Movimiento de los donuts
        //         brocoli_x -= 2*dx_brocoli;
        //         donut_x -= 2*dx_donut;



        //     }
        //     //const intervalo = setInterval(pintar, 15);
        //     const time = setInterval(incremento_tiempo, 1000);  //incrementamos el tiempo cuando pasa 1s
        //     pintar();

        // }
        // else{
        //     return alert('No se ha podido crear el objeto canvas');
        // }
    }
}
