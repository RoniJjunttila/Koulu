<?php
include 'inc/headers.php';

$curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "http://www.students.oamk.fi/~n0juro00/MobiiliProjekti/proxy/json/data.json",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "cache-control: no-cache"
    ),
  ));

  $response = curl_exec($curl);
  $err = curl_error($curl);
  $response = json_decode($response, true); //because of true, it's in an array

echo json_encode(array(
  0 => $response[0],
  1 => $response[1],
  2 => $response[2],
));