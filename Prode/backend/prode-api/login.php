<?php 
include('config.php');

$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();



$usuario = $data['usuario'];
$clave = $data['clave'];
$dni = $data['dni'];



//$clave_64 = base64_encode($clave);

//$clave_hashed = hash("sha256",$clave);


$sql = "select login,rol from login where login='$usuario' and clave='$clave' and dni='$dni'";

$results = $db->query($sql);


//$cols = $results->numColumns();
 
    while ($row = $results->fetchArray(SQLITE3_ASSOC))
    {
        $jsonArray[] = $row;
    }
 
    if (empty($jsonArray))
    {
        $jsonArray = array(['access'=>'denied']);
    }
 
    $response = json_encode($jsonArray,JSON_PRETTY_PRINT);
 
    print $response;

    ?>