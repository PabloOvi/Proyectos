<?php
include("config.php");


$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$dni_user=$data['dni'];

$sql = "select dni_user from partidos where dni_user='$dni_user';";

$results = $db->query($sql);
 
$cols = $results->numColumns();


while ($row = $results->fetchArray(SQLITE3_ASSOC))
{
    $jsonArray[] = $row;
}

if (empty($jsonArray))
{
    $jsonArray = array(['access'=>'denied']);
    $response = json_encode($jsonArray,JSON_PRETTY_PRINT);
    
    print $response;
}else {
    $sql = "select P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48 from partidos where dni_user='$dni_user';";

    $results = $db->query($sql);
    
    $cols = $results->numColumns();
    while ($row = $results->fetchArray(SQLITE3_ASSOC))
    {
        $jsonArray[] = $row;
    }
    if (empty($jsonArray))
    {
        $jsonArray = array([
        'message'=> 'not result - ok',
        'code'   => '200']);
    }
    $response = json_encode($jsonArray,JSON_PRETTY_PRINT);
    print $response;
    


}
?>

