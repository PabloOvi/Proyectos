window.onload = function(){
    
    var usuario = localStorage.getItem("usuario");
    
    if(usuario == null || usuario == ""){
        alerta_error1("Debe loguearse!");
    }else{
    var user = {};
    
    user.dni = localStorage.getItem('dni');
    
    var jsonuser = JSON.stringify(user);
const url = getResultados_services();
let request = new XMLHttpRequest();
request.open('POST',url, true);
request.setRequestHeader('Content-type', 'aplication/json');
request.send(jsonuser);
request.onload = function(){
   var objusuario = JSON.parse(request.response);
   var error = objusuario[0]['access'];
   
   if(error == 'denied'){
       alerta_error('Aun no realizaste el Prode ');
       
       
       
   }else{
    
    let template = '';
    
    for (let index = 0; index < 10; index++) {
        
        template+=`
        <td>${objusuario[1]['P'+(index+1)]}</td>
        `
        
    }
    $("#grdUser1").html(template);

    
    template = '';
    
    for (let index = 10; index < 20; index++) {
        
        template+=`
        <td>${objusuario[1]['P'+(index+1)]}</td>
        `
        
    }
    $("#grdUser2").html(template);
   }
   
   template = '';
    
   for (let index = 20; index < 30; index++) {
       
       template+=`
       <td>${objusuario[1]['P'+(index+1)]}</td>
       `
       
   }
   $("#grdUser3").html(template);
   
   template = '';
    
   for (let index = 30; index < 40; index++) {
       
       template+=`
       <td>${objusuario[1]['P'+(index+1)]}</td>
       `
       
   }
   $("#grdUser4").html(template);

   
   template = '';
    
   for (let index = 40; index < 48; index++) {
       
       template+=`
       <td>${objusuario[1]['P'+(index+1)]}</td>
       `
       
   }
   $("#grdUser5").html(template);
}
    }

}


function alerta_error(mensaje){
    swal({ 
        title:'Atencion!',
        text:mensaje,
        icon:'error',
        CONFIRM_BUTTON: '',
        CANCEL_BUTTON: ''
     }).then(function (){
        window.location="main.html"
    });
    
}
function alerta_error1(mensaje){
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

