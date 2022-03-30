window.onload = function(){
    var tablero;
    document.getElementById("boton").onclick = function inicio(){
        tablero = document.getElementById("juego");
        if(tablero && tablero.getContext){
            var ctx = tablero.getContext("2d");

            function tab(){
                ctx.fillStyle = 'rgba(128, 175, 0, 0.9)';   //cambiar el color.
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

            

        }
    }
}



