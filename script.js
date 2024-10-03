var botonInicio = document.getElementById("iniciar");

botonInicio.addEventListener("click", function(){
    this.innerText = "Cerrar sesión";

});

var botonAñadir =document.getElementById("añadir");

botonAñadir.addEventListener("click", function(){
    this.remove();
});


var botonLikep =document.getElementById("likep");

var botonLikeg =document.getElementById("likeg");

var cantlikep = 0;
var cantlikeg = 0;

botonLikep.addEventListener("click", function(cantLikep){
    var cantLikep= cantlikep;
    cantlikep +=1;
    this.innerText= cantlikep + " Me gusta";
    alert("Diste Me gusta a Golden Retriever");

    
});

botonLikeg.addEventListener("click", function(cantLikeg){
    var cantLikeg= cantlikeg;
    cantlikeg +=1;
    this.innerText= cantlikeg + " Me gusta";
    alert("Diste Me gusta a Gato Atigrado");
    
});