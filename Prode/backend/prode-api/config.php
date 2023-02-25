<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');
date_default_timezone_set('america/argentina/buenos_aires');
$db = new SQLite3('data/usuarios.db');

//DB STRING CONNECTION
//$dbname="c2191673_prode8";
//$servername = "localhost";
//$username = "c2191673_prode8";
//$password = "pulo72MAle";


//$db = new mysqli($servername, $username, $password, $dbname);


?>