<?php
include('config.php');

$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();


$dni = $data['dni'];


$sql = "select dni_user from partidos where dni_user='$dni';";

$results = $db->query($sql);
 
$cols = $results->numColumns();


while ($row = $results->fetchArray(SQLITE3_ASSOC))
{
    $jsonArray[] = $row;
}

if (empty($jsonArray))
{
    
}else {
    
    $jsonArray = array(['access'=>'denied']);
    $response = json_encode($jsonArray,JSON_PRETTY_PRINT);
    
    print $response;
    
 
}


    
    ?>
