window.onload = function(){
    
    var usuario = localStorage.getItem("usuario");
    
    if(usuario == null || usuario == ""){
        alerta_error("Debe loguearse!");
    }

}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


function alerta_error(mensaje){
    swal({ 
        title:'Atencion!',
        text:mensaje,
        icon:'error',
        CONFIRM_BUTTON: '',
        CANCEL_BUTTON: ''
     }).then(function (){
        window.location="index.html"
    });
    
}