window.onload = function(){
    clean_data();
}


const registro = () => {
    
    let usuario = document.getElementById('usuario').value;
    let clave = document.getElementById('clave').value;
    let dni = document.getElementById('dni').value;
    
    var user = {};
    user.usuario = usuario;
    user.clave = clave;
    user.dni = dni;
    
    var jsonuser = JSON.stringify(user);
  
    if(usuario == '' || clave == '' || dni == ''){
        alerta_error('Ingrese datos en los campos!!');
    }else{
        const url = getRegistro_services();
        let request = new XMLHttpRequest();
        request.open('POST',url, true);
        request.setRequestHeader('Content-type', 'aplication/json');
        request.send(jsonuser);
        request.onload = function(){
           var objusuario = JSON.parse(request.response);
           var error = objusuario[0]['access'];
           
           if(error == 'denied'){
               alerta_error('Ya existe una cuenta con ese Dni');
               
               
               
           }else{
               
               alerta_ok('Cuenta creada con exito'); 
           }
        }
    }
}



function clean_data(){
    localStorage.removeItem('usuario');
    localStorage.removeItem('rol');
    //localStorage.clear();
}



function alerta_error(mensaje){
    swal({ 
        title:'Atencion!',
        text:mensaje,
        icon:'error',
        button:'continuar'
     });
     clean_data();
}

function alerta_ok(user){
    swal({ 
        title:'Acceso correcto',
        text:''+ user,
        icon:'success',
        button:'continuar'
     }).then(function(){
        window.location = 'index.html';
     });

    
}