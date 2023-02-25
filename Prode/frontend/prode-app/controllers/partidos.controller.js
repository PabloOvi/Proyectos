window.onload = function(){
    
    var usuario = localStorage.getItem("usuario");
    var rol = localStorage.getItem("rol");
    if(usuario == null || usuario == ""){
        alerta_error1("Debe loguearse!");
    }else{
    var user = {};
    
    user.dni = localStorage.getItem('dni');
    //console.log(user.dni);
    var jsonuser = JSON.stringify(user);
const url = getProde_services();
let request = new XMLHttpRequest();
request.open('POST',url, true);
request.setRequestHeader('Content-type', 'aplication/json');
request.send(jsonuser);
request.onload = function(){
   var objusuario = JSON.parse(request.response);
   var error = objusuario[0]['access'];
   
   if(error == 'denied'){
       alerta_error('Ya realizaste el Prode anteriormente');
       
       
       
   }else{
       
       
   }
}
    }

}

function enviar_resultados(){
    
        
    
    // partidos locales
     let puno = document.getElementById('goles_equipo_local_P1').value;
     let pdos = document.getElementById('goles_equipo_local_P2').value;
     let ptres = document.getElementById('goles_equipo_local_P3').value;
     let pcuatro = document.getElementById('goles_equipo_local_P4').value;
     let pcinco = document.getElementById('goles_equipo_local_P5').value;
     let pseis = document.getElementById('goles_equipo_local_P6').value;
     let psiete = document.getElementById('goles_equipo_local_P7').value;
     let pocho = document.getElementById('goles_equipo_local_P8').value;
     let pnueve = document.getElementById('goles_equipo_local_P9').value;
     let pdiez = document.getElementById('goles_equipo_local_P10').value;
     let ponce = document.getElementById('goles_equipo_local_P11').value;
     let pdoce = document.getElementById('goles_equipo_local_P12').value;
     let ptrece = document.getElementById('goles_equipo_local_P13').value; //
     let pcatorce = document.getElementById('goles_equipo_local_P14').value; //
     let pquince = document.getElementById('goles_equipo_local_P15').value;
     let pdseis = document.getElementById('goles_equipo_local_P16').value;
     let pdsiete = document.getElementById('goles_equipo_local_P17').value;
     let pdocho = document.getElementById('goles_equipo_local_P18').value;
     let pdnueve = document.getElementById('goles_equipo_local_P19').value;
     let pveinte = document.getElementById('goles_equipo_local_P20').value;
     let pvuno = document.getElementById('goles_equipo_local_P21').value;
     let pvdos = document.getElementById('goles_equipo_local_P22').value;
     let pvtres = document.getElementById('goles_equipo_local_P23').value;
     let pvcuatro = document.getElementById('goles_equipo_local_P24').value;
     let pvcinco = document.getElementById('goles_equipo_local_P25').value;
     let pvseis = document.getElementById('goles_equipo_local_P26').value;
     let pvsiete = document.getElementById('goles_equipo_local_P27').value;
     let pvocho = document.getElementById('goles_equipo_local_P28').value;
     let pvnueve = document.getElementById('goles_equipo_local_P29').value;
     let ptreinta = document.getElementById('goles_equipo_local_P30').value;
     let ptuno = document.getElementById('goles_equipo_local_P31').value;
     let ptdos = document.getElementById('goles_equipo_local_P32').value;
     let pttres = document.getElementById('goles_equipo_local_P33').value;
     let ptcuatro = document.getElementById('goles_equipo_local_P34').value;
     let ptcinco = document.getElementById('goles_equipo_local_P35').value;
     let ptseis = document.getElementById('goles_equipo_local_P36').value;
     let ptsiete = document.getElementById('goles_equipo_local_P37').value;
     let ptocho = document.getElementById('goles_equipo_local_P38').value;
     let ptnueve = document.getElementById('goles_equipo_local_P39').value;
     let pcuarenta = document.getElementById('goles_equipo_local_P40').value;
     let pcuno = document.getElementById('goles_equipo_local_P41').value;
     let pcdos = document.getElementById('goles_equipo_local_P42').value;
     let pctres = document.getElementById('goles_equipo_local_P43').value;
     let pccuatro = document.getElementById('goles_equipo_local_P44').value;
     let pccinco = document.getElementById('goles_equipo_local_P45').value;
     let pcseis = document.getElementById('goles_equipo_local_P46').value;
     let pcsiete = document.getElementById('goles_equipo_local_P47').value;
     let pcocho = document.getElementById('goles_equipo_local_P48').value;


    
     // partidos visitantes
     let vuno = document.getElementById('goles_equipo_visitante_P1').value;
     let vdos = document.getElementById('goles_equipo_visitante_P2').value;
     let vtres = document.getElementById('goles_equipo_visitante_P3').value;
     let vcuatro = document.getElementById('goles_equipo_visitante_P4').value;
     let vcinco = document.getElementById('goles_equipo_visitante_P5').value;
     let vseis = document.getElementById('goles_equipo_visitante_P6').value;
     let vsiete = document.getElementById('goles_equipo_visitante_P7').value;
     let vocho = document.getElementById('goles_equipo_visitante_P8').value;
     let vnueve = document.getElementById('goles_equipo_visitante_P9').value;
     let vdiez = document.getElementById('goles_equipo_visitante_P10').value;
     let vonce = document.getElementById('goles_equipo_visitante_P11').value;
     let vdoce = document.getElementById('goles_equipo_visitante_P12').value;
     let vtrece = document.getElementById('goles_equipo_visitante_P13').value;
     let vcatorce = document.getElementById('goles_equipo_visitante_P14').value;
     let vquince = document.getElementById('goles_equipo_visitante_P15').value;
     let vdseis = document.getElementById('goles_equipo_visitante_P16').value;
     let vdsiete = document.getElementById('goles_equipo_visitante_P17').value;
     let vdocho = document.getElementById('goles_equipo_visitante_P18').value;
     let vdnueve = document.getElementById('goles_equipo_visitante_P19').value;
     let vveinte = document.getElementById('goles_equipo_visitante_P20').value;
     let vvuno = document.getElementById('goles_equipo_visitante_P21').value;
     let vvdos = document.getElementById('goles_equipo_visitante_P22').value;
     let vvtres = document.getElementById('goles_equipo_visitante_P23').value;
     let vvcuatro = document.getElementById('goles_equipo_visitante_P24').value;
     let vvcinco = document.getElementById('goles_equipo_visitante_P25').value;
     let vvseis = document.getElementById('goles_equipo_visitante_P26').value;
     let vvsiete = document.getElementById('goles_equipo_visitante_P27').value;
     let vvocho = document.getElementById('goles_equipo_visitante_P28').value;
     let vvnueve = document.getElementById('goles_equipo_visitante_P29').value;
     let vtreinta = document.getElementById('goles_equipo_visitante_P30').value;
     let vtuno = document.getElementById('goles_equipo_visitante_P31').value;
     let vtdos = document.getElementById('goles_equipo_visitante_P32').value;
     let vttres = document.getElementById('goles_equipo_visitante_P33').value;
     let vtcuatro = document.getElementById('goles_equipo_visitante_P34').value;
     let vtcinco = document.getElementById('goles_equipo_visitante_P35').value;
     let vtseis = document.getElementById('goles_equipo_visitante_P36').value;
     let vtsiete = document.getElementById('goles_equipo_visitante_P37').value;
     let vtocho = document.getElementById('goles_equipo_visitante_P38').value;
     let vtnueve = document.getElementById('goles_equipo_visitante_P39').value;
     let vcuarenta = document.getElementById('goles_equipo_visitante_P40').value;
     let vcuno = document.getElementById('goles_equipo_visitante_P41').value;
     let vcdos = document.getElementById('goles_equipo_visitante_P42').value;
     let vctres = document.getElementById('goles_equipo_visitante_P43').value;
     let vccuatro = document.getElementById('goles_equipo_visitante_P44').value;
     let vccinco = document.getElementById('goles_equipo_visitante_P45').value;
     let vcseis = document.getElementById('goles_equipo_visitante_P46').value;
     let vcsiete = document.getElementById('goles_equipo_visitante_P47').value;
     let vcocho = document.getElementById('goles_equipo_visitante_P48').value;


     //       --Fase Final--
    //Partidos locales
     let final_cnueve    = document.getElementById('goles_equipo_local_P49').value;
     let final_cincuenta = document.getElementById('goles_equipo_local_P50').value;
     let final_ccuno     = document.getElementById('goles_equipo_local_P51').value;
     let final_ccdos     = document.getElementById('goles_equipo_local_P52').value;
     let final_cctres    = document.getElementById('goles_equipo_local_P53').value;
     let final_ccuatro   = document.getElementById('goles_equipo_local_P54').value;
     let final_ccinco    = document.getElementById('goles_equipo_local_P55').value;
     let final_ccseis    = document.getElementById('goles_equipo_local_P56').value;
     let final_ccsiete   = document.getElementById('goles_equipo_local_P57').value;
     let final_ccocho    = document.getElementById('goles_equipo_local_P58').value;
     let final_ccnueve   = document.getElementById('goles_equipo_local_P59').value;
     let final_sesenta   = document.getElementById('goles_equipo_local_P60').value;
     let final_suno      = document.getElementById('goles_equipo_local_P61').value;
     let final_sdos      = document.getElementById('goles_equipo_local_P62').value;
     let final_stres     = document.getElementById('goles_equipo_local_P63').value;
     let final_scuatro   = document.getElementById('goles_equipo_local_P64').value;

     //Partidos visitante
     let final_vcnueve    = document.getElementById('goles_equipo_visitante_P49').value;
     let final_vcincuenta = document.getElementById('goles_equipo_visitante_P50').value;
     let final_vccuno     = document.getElementById('goles_equipo_visitante_P51').value;
     let final_vccdos     = document.getElementById('goles_equipo_visitante_P52').value;
     let final_vcctres    = document.getElementById('goles_equipo_visitante_P53').value;
     let final_vccuatro   = document.getElementById('goles_equipo_visitante_P54').value;
     let final_vccinco    = document.getElementById('goles_equipo_visitante_P55').value;
     let final_vccseis    = document.getElementById('goles_equipo_visitante_P56').value;
     let final_vccsiete   = document.getElementById('goles_equipo_visitante_P57').value;
     let final_vccocho    = document.getElementById('goles_equipo_visitante_P58').value;
     let final_vccnueve   = document.getElementById('goles_equipo_visitante_P59').value;
     let final_vsesenta   = document.getElementById('goles_equipo_visitante_P60').value;
     let final_vsuno      = document.getElementById('goles_equipo_visitante_P61').value;
     let final_vsdos      = document.getElementById('goles_equipo_visitante_P62').value;
     let final_vstres     = document.getElementById('goles_equipo_visitante_P63').value;
    let final_vscuatro    = document.getElementById('goles_equipo_visitante_P64').value;

    


   

    //Valido si todos los campos tienen algun valor dentro
    if (puno == '' || pdos == '' || ptres == '' || pcuatro == '' || pcinco == '' || pseis == ''|| psiete == '' || pocho == ''
        || pnueve ==  '' || pdiez ==     '' || ponce == '' || pdoce ==   '' || ptrece == '' || pcatorce ==  '' || pquince == '' || pdseis == ''|| pdsiete == '' || pdocho == ''
        || pdnueve == '' || pveinte ==   '' || pvuno == '' || pvdos ==   '' || pvtres == '' || pvcuatro ==  '' || pvcinco == '' || pvseis == ''|| pvsiete == '' || pvocho == ''
        || pvnueve == '' || ptreinta ==  '' || ptuno == '' || ptdos ==   '' || pttres == '' || ptcuatro ==  '' || ptcinco == '' || ptseis == ''|| ptsiete == '' || ptocho == ''
        || ptnueve == '' || pcuarenta == '' || pcuno == '' || pcdos ==   '' || pctres == '' || pccuatro ==  '' || pccinco == '' || pcseis == ''|| pcsiete == '' || pcocho == '' 
        || vuno ==    '' || vdos ==      '' || vtres == '' || vcuatro == '' || vcinco == '' || vseis ==     '' || vsiete ==  '' || vocho == ''
        || vnueve ==  '' || vdiez ==     '' || vonce == '' || vdoce ==   '' || vtrece == '' || vcatorce ==  '' || vquince == '' || vdseis == ''|| vdsiete == '' || vdocho == ''
        || vdnueve == '' || vveinte ==   '' || vvuno == '' || vvdos ==   '' || vvtres == '' || vvcuatro ==  '' || vvcinco == '' || vvseis == ''|| vvsiete == '' || vvocho == ''
        || vvnueve == '' || vtreinta ==  '' || vtuno == '' || vtdos ==   '' || vttres == '' || vtcuatro ==  '' || vtcinco == '' || vtseis == ''|| vtsiete == '' || vtocho == ''
        || vtnueve == '' || vcuarenta == '' || vcuno == '' || vcdos ==   '' || vctres == '' || vccuatro ==  '' || vccinco == '' || vcseis == ''|| vcsiete == '' || vcocho == '') {
        
        alerta_error_prode("Debe completar el prode");


    }else if (final_cnueve  == '' || final_cincuenta  == '' || final_ccuno     == '' || final_ccdos     == '' ||
            final_cctres    == '' || final_ccuatro   == ''  || final_ccinco    == '' || final_ccseis    == '' ||
            final_ccsiete   == '' || final_ccocho    == ''  || final_ccnueve   == '' || final_sesenta   == '' ||
            final_suno      == '' || final_sdos      == ''  || final_stres     == '' || final_scuatro   == '' ||
            final_vcnueve == ''   || final_vcincuenta == '' || final_vccuno    == '' || final_vccdos    == '' ||
            final_vcctres   == '' || final_vccuatro  == ''  || final_vccinco   == '' || final_vccseis   == '' ||
            final_vccsiete  == '' || final_vccocho   == ''  || final_vccnueve  == '' || final_vsesenta  == '' ||
            final_vsuno     == '' || final_vsdos     == ''  || final_vstres    == '' || final_vscuatro  == '' ){
        
            
        alerta_error_prode("Debe completar la fase final del prode");

        
    }else{


        var user = {};
        user.puno = puno;
        user.pdos = pdos;
        user.ptres = ptres;
        user.pcuatro = pcuatro;
        user.pcinco = pcinco;
        user.pseis = pseis;
        user.psiete = psiete;
        user.pocho = pocho;
        user.pnueve = pnueve;
        user.pdiez = pdiez;
        user.ponce = ponce;
        user.pdoce = pdoce;
        user.ptrece = ptrece;
        user.pcatorce = pcatorce;
        user.pquince = pquince;
        user.pdseis = pdseis;
        user.pdsiete = pdsiete;
        user.pdocho = pdocho;
        user.pdnueve = pdnueve;
        user.pveinte = pveinte;
        user.pvuno = pvuno;
        user.pvdos = pvdos;
        user.pvtres = pvtres;
        user.pvcuatro = pvcuatro;
        user.pvcinco = pvcinco;
        user.pvseis = pvseis;
        user.pvsiete = pvsiete;
        user.pvocho = pvocho;
        user.pvnueve = pvnueve;
        user.ptreinta = ptreinta;
        user.ptuno = ptuno;
        user.ptdos = ptdos;
        user.pttres = pttres;
        user.ptcuatro = ptcuatro;
        user.ptcinco = ptcinco;
        user.ptseis = ptseis;
        user.ptsiete = ptsiete;
        user.ptocho = ptocho;
        user.ptnueve = ptnueve;
        user.pcuarenta = pcuarenta;
        user.pcuno = pcuno;
        user.pcdos = pcdos;
        user.pctres = pctres;
        user.pccuatro = pccuatro;
        user.pccinco = pccinco;
        user.pcseis = pcseis;
        user.pcsiete = pcsiete;
        user.pcocho = pcocho;
    
        //fase final local
    
        user.final_cnueve    = final_cnueve;
        user.final_cincuenta = final_cincuenta;
        user.final_ccuno     = final_ccuno;
        user.final_ccdos     = final_ccdos;
        user.final_cctres    = final_cctres;
        user.final_ccuatro   = final_ccuatro;
        user.final_ccinco    = final_ccinco;
        user.final_ccseis    = final_ccseis;
        user.final_ccsiete   = final_ccsiete;
        user.final_ccocho    = final_ccocho;
        user.final_ccnueve   = final_ccnueve;
        user.final_sesenta   = final_sesenta;
        user.final_suno      = final_suno;
        user.final_sdos      = final_sdos;
        user.final_stres     = final_stres;
        user.final_scuatro   = final_scuatro;
    
        //fase final visitante
    
        user.final_vcnueve    = final_vcnueve;
        user.final_vcincuenta = final_vcincuenta;
        user.final_vccuno     = final_vccuno;
        user.final_vccdos     = final_vccdos;
        user.final_vcctres    = final_vcctres;
        user.final_vccuatro   = final_vccuatro;
        user.final_vccinco    = final_vccinco;
        user.final_vccseis    = final_vccseis;
        user.final_vccsiete   = final_vccsiete;
        user.final_vccocho    = final_vccocho;
        user.final_vccnueve   = final_vccnueve;
        user.final_vsesenta   = final_vsesenta;
        user.final_vsuno      = final_vsuno;
        user.final_vsdos      = final_vsdos;
        user.final_vstres     = final_vstres;
        user.final_vscuatro   = final_vscuatro;
    
    
        user.vuno = vuno;
        user.vdos = vdos;
        user.vtres = vtres;
        user.vcuatro = vcuatro;
        user.vcinco = vcinco;
        user.vseis = vseis;
        user.vsiete = vsiete;
        user.vocho = vocho;
        user.vnueve = vnueve;
        user.vdiez = vdiez;
        user.vonce = vonce;
        user.vdoce = vdoce;
        user.vtrece = vtrece;
        user.vcatorce = vcatorce;
        user.vquince = vquince;
        user.vdseis = vdseis;
        user.vdsiete = vdsiete;
        user.vdocho = vdocho;
        user.vdnueve = vdnueve;
        user.vveinte = vveinte;
        user.vvuno = vvuno;
        user.vvdos = vvdos;
        user.vvtres = vvtres;
        user.vvcuatro = vvcuatro;
        user.vvcinco = vvcinco;
        user.vvseis = vvseis;
        user.vvsiete = vvsiete;
        user.vvocho = vvocho;
        user.vvnueve = vvnueve;
        user.vtreinta = vtreinta;
        user.vtuno = vtuno;
        user.vtdos = vtdos;
        user.vttres = vttres;
        user.vtcuatro = vtcuatro;
        user.vtcinco = vtcinco;
        user.vtseis = vtseis;
        user.vtsiete = vtsiete;
        user.vtocho = vtocho;
        user.vtnueve = vtnueve;
        user.vcuarenta = vcuarenta;
        user.vcuno = vcuno;
        user.vcdos = vcdos;
        user.vctres = vctres;
        user.vccuatro = vccuatro;
        user.vccinco = vccinco;
        user.vcseis = vcseis;
        user.vcsiete = vcsiete;
        user.vcocho = vcocho;
    
    
    
        user.dni_user = localStorage.getItem('dni');
    
    
    
        user.id = localStorage.getItem('id');
      
     
    console.log(user.id);
    console.log(user.dni);
    
     
    var jsonuser = JSON.stringify(user);

    const url = getEnviar_services();
    let request = new XMLHttpRequest();
        request.open('POST',url, true);
        request.setRequestHeader('Content-type', 'aplication/json');
        request.send(jsonuser);
        
        alerta_ok('Gracias por realizar el Prode');
        
    } 
}



function alerta_error(mensaje){
    swal({ 
        title:'Atencion!',
        text:mensaje,
        icon:'error',
        button:'continuar'
     }).then(function(){
        window.location = 'pago.html';
     });
    }

    function alerta_error1(mensaje){
        swal({ 
            title:'Atencion!',
            text:mensaje,
            icon:'error',
            button:'continuar'
         }).then(function(){
            window.location = 'index.html';
         });
        }

        function alerta_ok(mensaje){
            swal({ 
                title:'Acceso correcto',
                text:mensaje,
                icon:'success',
                button:'continuar'
             }).then(function(){
                window.location = 'pago.html';
             });
        
            
        }
        
    function alerta_error_prode(mensaje){
        swal({ 
            title:'Atencion!',
            text:mensaje,
            icon:'error',
            button:'continuar'
         })
        }