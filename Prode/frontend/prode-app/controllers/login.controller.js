window.onload = function(){
    clean_data();
}


const login = () => {
    
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
        const url = getLogin_services();
        let request = new XMLHttpRequest();
        request.open('POST',url, true);
        request.setRequestHeader('Content-type', 'aplication/json');
        request.send(jsonuser);
        request.onload = function(){
           var objusuario = JSON.parse(request.response);
           var error = objusuario[0]['access'];
           if(error == 'denied'){
               alerta_error('Acceso denegado, Datos Erroneos');
               
               
               
           }else{

               var user_response = objusuario[0]['login'];
               var rol_response = objusuario[0]['rol'];
                var id_response = objusuario[0]['id'];
               set_data(user_response, rol_response, user.dni, id_response);
               alerta_ok(user_response); 
           }
        }
    }

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
        text:'Bienvenido '+ user,
        icon:'success',
        button:'continuar'
     }).then(function(){
        window.location = 'preguntas.html';
     });

    
}

function set_data(usuario, rol, dni, id){
    localStorage.setItem('usuario', usuario);
    localStorage.setItem('rol',rol);
    localStorage.setItem('dni', dni);
    localStorage.setItem('id', id);
}
 function clean_data(){
     localStorage.removeItem('usuario');
     localStorage.removeItem('rol');
     localStorage.removeItem('dni');
     localStorage.removeItem('id');
     
 }
