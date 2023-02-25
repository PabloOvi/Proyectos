<?php
include('config.php');

$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();

$usuario = $data['usuario'];
$clave = $data['clave'];
$dni = $data['dni'];

//$clave_hashed=hash("sha256",$clave);


$sql = "select dni from login where dni='$dni';";

$results = $db->query($sql);
 
$cols = $results->numColumns();


while ($row = $results->fetchArray(SQLITE3_ASSOC))
{
    $jsonArray[] = $row;
}

if (empty($jsonArray))
{
    $sql = "insert into login ('login', 'clave', 'rol', 'dni') values ('$usuario', '$clave', '0','$dni');";
  
$db->query($sql);

$jsonArray = array(['access' => 'granted']);
$response = json_encode($jsonArray,JSON_PRETTY_PRINT);
print $response;

    
   
    
}else {
    $jsonArray = array(['access'=>'denied']);
    $response = json_encode($jsonArray,JSON_PRETTY_PRINT);
    
    print $response;
    
    
 
}


    
    ?>
