window.onload = function(){
    
    var usuario = localStorage.getItem("usuario");
    var rol = localStorage.getItem("rol");
    if(usuario == null || usuario == ""){
        alerta_error("Debe loguearse!");
    }
}

function alerta_error(mensaje){
    swal({ 
        title:'Atencion!',
        text:mensaje,
        icon:'error',
        button:'continuar'
     }).then(function(){
        window.location = 'index.html';
     });
    }