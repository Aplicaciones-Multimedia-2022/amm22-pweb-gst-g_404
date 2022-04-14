window.onload = function(){
    //var tablero;
    document.getElementById("boton").onclick = function inicio(){

        var tablero = document.getElementById("juego");

        if(tablero && tablero.getContext){
            var ctx = tablero.getContext("2d");

            class Homer{
                constructor(x, y, alt, ancho, vidas, score){
                    this.x = x;
                    this.y = y;
                    this.alt = alt;
                    this.ancho = ancho;
                    this.vidas = vidas;
                    this.score = score;
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
                    ctx.drawImage(img, 550, 500, 850, 800, this.x, this.y - 35, this.alt, this.ancho);
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
                    ctx.drawImage(img, 50, 50, 800, 800, this.x, this.y - 35, this.alt, this.ancho);
                }

                actualizar(){
                    this.pintar();
                    this.x = this.x + this.velocidad;
                }
            }

            class Duff{
                constructor(x, y, alt, ancho, velocidad){
                    this.x = x;
                    this.y = y;
                    this.alt = alt;
                    this.ancho = ancho;
                    this.velocidad = velocidad;
                }

                pintar(){
                    var img = document.getElementById("duff");
                    ctx.drawImage(img, 50, 50, 800, 800, this.x, this.y - 35, this.alt, this.ancho);
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
            /*---------------------------------------------------------------------------*/
            //Función para las alturas de los objetos aleatorios
            function obtener_y(y){
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

            const x = tablero.width/16;
            const y = tablero.height/2;
            const altura = 80;
            const ancho = 80;
            const vidas = 3;

            const jugador = new Homer(x, y, altura, ancho, vidas, 0);

            const brocolis_ = [];
            const donuts_ = [];
            const duff_ =[];

            function crearBrocolis(){
                intervalo = setInterval(() => {
                    const x = tablero.width - tablero.width/16;
                    const a = Math.random();
                    const y = obtener_y(a);
                    const altura = 80;
                    const ancho = 80;
                    const velocidad = -1;
                    brocolis_.push(new Brocoli(x, y, altura, ancho, velocidad));
                    console.log(brocolis_);
                }, 3000);
            }

            function crearDonuts(){
                intervalo = setInterval(() => {
                    const x = tablero.width - tablero.width/16;
                    const a = Math.random();
                    const y = obtener_y(a);
                    const altura = 80;
                    const ancho = 80;
                    const velocidad = -1;
                    donuts_.push(new Donut(x, y, altura, ancho, velocidad));
                    console.log(donuts_);
                }, 3843);
            }

            function crearDuff(){
                intervalo = setInterval(() => {
                    const x = tablero.width - tablero.width/16;
                    const a = Math.random();
                    const y = obtener_y(a);
                    const altura = 80;
                    const ancho = 80;
                    const velocidad = -1;
                    donuts_.push(new Duff(x, y, altura, ancho, velocidad));
                    console.log(donuts_);
                }, 5000);
            }


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

            let animationId
            function jugar(){
                animationId = requestAnimationFrame(jugar);
                ctx.clearRect(0, 0, tablero.width, tablero.height);
                tab();
                jugador.pintar();
                console.log(jugador.vidas)

                    //LOS BROCOLIS
                brocolis_.forEach((brocoli, index) => {
                    brocoli.actualizar()

                    //vamos a eliminar los proyectiles cuando se salgan del canvas
                    //para evitar tener infinitos objetos
                    if (brocoli.x + ancho < 0){
                        setTimeout(() => {
                            brocolis_.splice(index, 1)
                        }, 0)
                    }

                    //Colisiones de homer con los brocolis
                    if ((brocoli.x < jugador.x + jugador.ancho) && (brocoli.x + brocoli.ancho > jugador.x) && (brocoli.y == jugador.y)){
                        jugador.vidas--;
                        setTimeout(() => {
                            brocolis_.splice(index, 1)
                        }, 0)
                    }

                    //PARAMOS CUANDO NOS QUEDAMOS SIN VIDAS
                    if (jugador.vidas == 0){
                        cancelAnimationFrame(animationId)

                    }

                })

                    //LOS DONUTS
                donuts_.forEach((donut, index) => {
                    donut.actualizar()

                    //vamos a eliminar los objetos cuando se salgan del canvas
                    //para evitar tener infinitos objetos
                    if (donut.x + ancho < 0){
                        setTimeout(() => {
                            donuts_.splice(index, 1)
                        }, 0)
                    }

                    //Colisiones de homer con los brocolis
                    if ((donut.x < jugador.x + jugador.ancho) && (donut.x + donut.ancho > jugador.x) && (donut.y == jugador.y)){
                        jugador.score++;
                        setTimeout(() => {
                            donuts_.splice(index, 1)
                        }, 0)
                    }

                })

                //LAS DUFF
                duff_.forEach((duff, index) => {
                    duff.actualizar()

                    //vamos a eliminar los objetos cuando se salgan del canvas
                    //para evitar tener infinitos objetos
                    if (duff.x + ancho < 0){
                        setTimeout(() => {
                            duff_.splice(index, 1)
                        }, 0)
                    }

                    //Colisiones de homer con los brocolis
                    if ((duff.x < jugador.x + jugador.ancho) && (duff.x + duff.ancho > jugador.x) && (duff.y == jugador.y)){
                        jugador.score+=10;
                        setTimeout(() => {
                            duff_.splice(index, 1)
                        }, 0)
                    }

                })


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

            jugar();
            crearDonuts();
            crearBrocolis();
            crearDuff(); 

        }
    }
}
