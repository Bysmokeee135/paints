<?php

$method = $_SERVER['REQUEST_METHOD'];




//Script Foreach
$c = true;
if ( $method === 'POST' ) {
	$username = trim($_POST["username"]);

} else if ( $method === 'GET' ) {

	$username = trim($_GET["username"]);
}


