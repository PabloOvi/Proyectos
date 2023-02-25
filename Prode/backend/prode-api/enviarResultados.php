<?php
include('config.php');

$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();


$puno=$data['puno'];
$pdos=$data['pdos'];
$ptres=$data['ptres'];
$pcuatro=$data['pcuatro'];
$pcinco=$data['pcinco'];
$pseis=$data['pseis'];
$psiete=$data['psiete'];
$pocho=$data['pocho'];
$pnueve=$data['pnueve'];
$pdiez=$data['pdiez'];
$ponce=$data['ponce'];
$pdoce=$data['pdoce'];
$ptrece=$data['ptrece']; //
$pcatorce=$data['pcatorce']; //
$pquince=$data['pquince'];
$pdseis=$data['pdseis'];
$pdsiete=$data['pdsiete'];
$pdocho=$data['pdocho'];
$pdnueve=$data['pdnueve'];
$pveinte=$data['pveinte'];
$pvuno=$data['pvuno'];
$pvdos=$data['pvdos'];
$pvtres=$data['pvtres'];
$pvcuatro=$data['pvcuatro'];
$pvcinco=$data['pvcinco'];
$pvseis=$data['pvseis'];
$pvsiete=$data['pvsiete'];
$pvocho=$data['pvocho'];
$pvnueve=$data['pvnueve'];
$ptreinta=$data['ptreinta'];
$ptuno=$data['ptuno'];
$ptdos=$data['ptdos'];
$pttres=$data['pttres'];
$ptcuatro=$data['ptcuatro'];
$ptcinco=$data['ptcinco'];
$ptseis=$data['ptseis'];
$ptsiete=$data['ptsiete'];
$ptocho=$data['ptocho'];
$ptnueve=$data['ptnueve'];
$pcuarenta=$data['pcuarenta'];
$pcuno=$data['pcuno'];
$pcdos=$data['pcdos'];
$pctres=$data['pctres'];
$pccuatro=$data['pccuatro'];
$pccinco=$data['pccinco'];
$pcseis=$data['pcseis'];
$pcsiete=$data['pcsiete'];
$pcocho=$data['pcocho'];

$vuno=$data['vuno'];
$vdos=$data['vdos'];
$vtres=$data['vtres'];
$vcuatro=$data['vcuatro'];
$vcinco=$data['vcinco'];
$vseis=$data['vseis'];
$vsiete=$data['vsiete'];
$vocho=$data['vocho'];
$vnueve=$data['vnueve'];
$vdiez=$data['vdiez'];
$vonce=$data['vonce'];
$vdoce=$data['vdoce'];
$vtrece=$data['vtrece'];
$vcatorce=$data['vcatorce'];
$vquince=$data['vquince'];
$vdseis=$data['vdseis'];
$vdsiete=$data['vdsiete'];
$vdocho=$data['vdocho'];
$vdnueve=$data['vdnueve'];
$vveinte=$data['vveinte'];
$vvuno=$data['vvuno'];
$vvdos=$data['vvdos'];
$vvtres=$data['vvtres'];
$vvcuatro=$data['vvcuatro'];
$vvcinco=$data['vvcinco'];
$vvseis=$data['vvseis'];
$vvsiete=$data['vvsiete'];
$vvocho=$data['vvocho'];
$vvnueve=$data['vvnueve'];
$vtreinta=$data['vtreinta'];
$vtuno=$data['vtuno'];
$vtdos=$data['vtdos'];
$vttres=$data['vttres'];
$vtcuatro=$data['vtcuatro'];
$vtcinco=$data['vtcinco'];
$vtseis=$data['vtseis'];
$vtsiete=$data['vtsiete'];
$vtocho=$data['vtocho'];
$vtnueve=$data['vtnueve'];
$vcuarenta=$data['vcuarenta'];
$vcuno=$data['vcuno'];
$vcdos=$data['vcdos'];
$vctres=$data['vctres'];
$vccuatro=$data['vccuatro'];
$vccinco=$data['vccinco'];
$vcseis=$data['vcseis'];
$vcsiete=$data['vcsiete'];
$vcocho=$data['vcocho'];
$dni_user=$data['dni_user'];
$id=$data['id'];


$sql = "insert into partidos (id,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,dni_user) values ('$id','$puno,$vuno','$pdos,$vdos','$ptres,$vtres','$pcuatro,$vcuatro','$pcinco,$vcinco','$pseis,$vseis','$psiete,$vsiete','$pocho,$vocho','$pnueve,$vnueve','$pdiez,$vdiez','$ponce,$vonce','$pdoce,$vdoce','$ptrece,$vtrece','$pcatorce,$vcatorce','$pquince,$vquince','$pdseis,$vdseis','$pdsiete,$vdsiete','$pdocho,$vdocho','$pdnueve,$vdnueve','$pveinte,$vveinte','$pvuno,$vvuno','$pvdos,$vvdos','$pvtres,$vvtres','$pvcuatro,$vvcuatro','$pvcinco,$vvcinco','$pvseis,$vvseis','$pvsiete,$vvsiete','$pvocho,$vvocho','$pvnueve,$vvnueve','$ptreinta,$vtreinta','$ptuno,$vtuno','$ptdos,$vtdos','$pttres,$pttres','$ptcuatro,$vtcuatro','$ptcinco,$vtcinco','$ptseis,$vtseis','$ptsiete,$vtsiete','$ptocho,$vtocho','$ptnueve,$vtnueve','$pcuarenta,$vcuarenta','$pcuno,$vcuno','$pcdos,$vcdos','$pctres,$vctres','$pccuatro,$vccuatro','$pccinco,$vccinco','$pcseis,$vcseis','$pcsiete,$vcsiete','$pcocho,$vcocho','$dni_user');";
//$sql = "insert into partidos(id,P1,dni_user) values ($id,'$puno,$vuno',$dni_user);";


//$sql = "insert into parditos(P1,P2) values ('$puno,$vuno','$pdos,$vdos');";
$results = $db->query($sql);

?>