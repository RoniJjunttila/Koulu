<?php

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

require('headers.php');
require('functions.php');


$requestHeaders = apache_request_headers();

if (isset($requestHeaders['Authorization'])) {
    $authvalue = explode(" ", $requestHeaders['Authorization']);

    if($authvalue[0] === 'Bearer') {
        $token = $authvalue[1];

        try {
            $decoded = JWT::decode($token, new Key(base64_encode('mysecret'), "HS256"));

            $username = $decoded->sub;
            echo $username;
        }catch(Exception $e) {
            echo "JWT ei ole validi";
        }
    }
}


echo "Ei onnaaaa!";