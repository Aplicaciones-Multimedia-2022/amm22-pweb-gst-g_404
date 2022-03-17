window.onload = function(){

  //Al prinncipio solo se muestra la página de inicio.
  document.getElementById("inicio").classList.add("mostrar");
  document.getElementById("descripcion").classList.add("ocultar");
  document.getElementById("juego").classList.add("ocultar");
  document.getElementById("autores").classList.add("ocultar");
  document.getElementById("multimedia").classList.add("ocultar");
  document.getElementById("desarrollo").classList.add("ocultar");
  document.getElementById("referencias").classList.add("ocultar");

  //Pestaña de inicio
  document.getElementById("p0").onclick = function(){
    document.getElementById("inicio").classList.add("mostrar");
    document.getElementById("inicio").classList.remove("ocultar");

    document.getElementById("descripcion").classList.add("ocultar");
    document.getElementById("descripcion").classList.remove("mostrar");
    document.getElementById("juego").classList.add("ocultar");
    document.getElementById("juego").classList.remove("mostrar");
    document.getElementById("autores").classList.add("ocultar");
    document.getElementById("autores").classList.remove("mostrar");
    document.getElementById("multimedia").classList.add("ocultar");
    document.getElementById("multimedia").classList.remove("mostrar");
    document.getElementById("desarrollo").classList.add("ocultar");
    document.getElementById("desarrollo").classList.remove("mostrar");
    document.getElementById("referencias").classList.add("ocultar");
    document.getElementById("referencias").classList.remove("mostrar");

  }
  //Pestaña de descripcion del juego
  document.getElementById("p1").onclick = function(){
    document.getElementById("inicio").classList.add("ocultar");
    document.getElementById("inicio").classList.remove("mostrar");

    document.getElementById("descripcion").classList.add("mostrar");
    document.getElementById("descripcion").classList.remove("ocultar");

    document.getElementById("juego").classList.add("ocultar");
    document.getElementById("juego").classList.remove("mostrar");
    document.getElementById("autores").classList.add("ocultar");
    document.getElementById("autores").classList.remove("mostrar");
    document.getElementById("multimedia").classList.add("ocultar");
    document.getElementById("multimedia").classList.remove("mostrar");
    document.getElementById("desarrollo").classList.add("ocultar");
    document.getElementById("desarrollo").classList.remove("mostrar");
    document.getElementById("referencias").classList.add("ocultar");
    document.getElementById("referencias").classList.remove("mostrar");
  }
  //Pestaña de juego
  document.getElementById("p2").onclick = function(){
    document.getElementById("inicio").classList.add("ocultar");
    document.getElementById("inicio").classList.remove("mostrar");
    document.getElementById("descripcion").classList.add("ocultar");
    document.getElementById("descripcion").classList.remove("mostrar");

    document.getElementById("juego").classList.add("mostrar");
    document.getElementById("juego").classList.remove("ocultar");

    document.getElementById("autores").classList.add("ocultar");
    document.getElementById("autores").classList.remove("mostrar");
    document.getElementById("multimedia").classList.add("ocultar");
    document.getElementById("multimedia").classList.remove("mostrar");
    document.getElementById("desarrollo").classList.add("ocultar");
    document.getElementById("desarrollo").classList.remove("mostrar");
    document.getElementById("referencias").classList.add("ocultar");
    document.getElementById("referencias").classList.remove("mostrar");
  }
  //Pestaña de autores
  document.getElementById("p3").onclick = function(){
    document.getElementById("inicio").classList.add("ocultar");
    document.getElementById("inicio").classList.remove("mostrar");
    document.getElementById("descripcion").classList.add("ocultar");
    document.getElementById("descripcion").classList.remove("mostrar");
    document.getElementById("juego").classList.add("ocultar");
    document.getElementById("juego").classList.remove("mostrar");

    document.getElementById("autores").classList.add("mostrar");
    document.getElementById("autores").classList.remove("ocultar");

    document.getElementById("multimedia").classList.add("ocultar");
    document.getElementById("multimedia").classList.remove("mostrar");
    document.getElementById("desarrollo").classList.add("ocultar");
    document.getElementById("desarrollo").classList.remove("mostrar");
    document.getElementById("referencias").classList.add("ocultar");
    document.getElementById("referencias").classList.remove("mostrar");
  }
  //Pestaña de multimedia
  document.getElementById("p4").onclick = function(){
    document.getElementById("inicio").classList.add("ocultar");
    document.getElementById("inicio").classList.remove("mostrar");
    document.getElementById("descripcion").classList.add("ocultar");
    document.getElementById("descripcion").classList.remove("mostrar");
    document.getElementById("juego").classList.add("ocultar");
    document.getElementById("juego").classList.remove("mostrar");
    document.getElementById("autores").classList.add("ocultar");
    document.getElementById("autores").classList.remove("mostrar");

    document.getElementById("multimedia").classList.add("mostrar");
    document.getElementById("multimedia").classList.remove("ocultar");

    document.getElementById("desarrollo").classList.add("ocultar");
    document.getElementById("desarrollo").classList.remove("mostrar");
    document.getElementById("referencias").classList.add("ocultar");
    document.getElementById("referencias").classList.remove("mostrar");
  }
  //Pestaña de desarrollo
  document.getElementById("p5").onclick = function(){
    document.getElementById("inicio").classList.add("ocultar");
    document.getElementById("inicio").classList.remove("mostrar");
    document.getElementById("descripcion").classList.add("ocultar");
    document.getElementById("descripcion").classList.remove("mostrar");
    document.getElementById("juego").classList.add("ocultar");
    document.getElementById("juego").classList.remove("mostrar");
    document.getElementById("autores").classList.add("ocultar");
    document.getElementById("autores").classList.remove("mostrar");
    document.getElementById("multimedia").classList.add("ocultar");
    document.getElementById("multimedia").classList.remove("mostrar");

    document.getElementById("desarrollo").classList.add("mostrar");
    document.getElementById("desarrollo").classList.remove("ocultar");

    document.getElementById("referencias").classList.add("ocultar");
    document.getElementById("referencias").classList.remove("mostrar");
  }
  //Pestaña de referencias
  document.getElementById("p6").onclick = function(){
    document.getElementById("inicio").classList.add("ocultar");
    document.getElementById("inicio").classList.remove("mostrar");
    document.getElementById("descripcion").classList.add("ocultar");
    document.getElementById("descripcion").classList.remove("mostrar");
    document.getElementById("juego").classList.add("ocultar");
    document.getElementById("juego").classList.remove("mostrar");
    document.getElementById("autores").classList.add("ocultar");
    document.getElementById("autores").classList.remove("mostrar");
    document.getElementById("multimedia").classList.add("ocultar");
    document.getElementById("multimedia").classList.remove("mostrar");
    document.getElementById("desarrollo").classList.add("ocultar");
    document.getElementById("desarrollo").classList.remove("mostrar");

    document.getElementById("referencias").classList.add("mostrar");
    document.getElementById("referencias").classList.remove("ocultar");
  }

}
