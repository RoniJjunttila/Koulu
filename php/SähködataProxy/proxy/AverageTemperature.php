<?php

  $Year = date("Y");
  $Month = date("m");;
  $Date = date("d");
  $alldata = array();
  $singledata = 0;
  $selection = array(
    0 => "178", #Helsinki l mp tila
    1 => "196", #Oulu l mp tila
    2 => "185", #Rovaniemi l mp tila 
  );

  $Q1 = 0;
  $Q2 = 0;
  $Q3 = 0;
  $Q4 = 0;

  $linesOfArray = array(

);
  $CombinedData = 0;
 #

  for ($i = 0; $i < count($selection); $i++){

    $urls = array(
      );

    for($m = 1; $m < 13; $m++) {
        array_push($urls, "https://api.fingrid.fi/v1/variable/". $selection[$i] . "/events/json?start_time=". $Year ."-". $m ."-" . "1" . "T00%3A00%3A00Z&end_time=" . date("Y-m-t", strtotime($Year . "-" . $m . "-10")) ."T01%3A00%3A00Z");
    }


  for($z = 0; $z < count($urls); $z++){
    $curl = curl_init();

    curl_setopt_array($curl, array(
      CURLOPT_URL => $urls[$z],
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
    $response = json_decode($response, true);
    $singledata = 0;
    $linesOf = 0;
    if($response !== null){
      for ($x = 0; $x <= count($response); $x++) {
        if(isset($response[$x]['value'])) {    
          $CombinedData += $response[$x]['value'];
          $singledata += $response[$x]['value'];
          $linesOf++;
          }
        } 
    }

    array_push($linesOfArray ,$linesOf);
    if($singledata !== 0){
        $alldata[] = $singledata / $linesOf;
    } else {
        $alldata[] = 0;
    }
  }
}

$TempData = array(
  "Keskilampotila" => array(
    0 => ($alldata[0] + $alldata[12] + $alldata[24]) / 3, 
    1 => ($alldata[1] + $alldata[13] + $alldata[25]) / 3, 
    2 => ($alldata[2] + $alldata[14] + $alldata[26]) / 3, 
    3 => ($alldata[3] + $alldata[15] + $alldata[27]) / 3, 
    4 => ($alldata[4] + $alldata[16] + $alldata[28]) / 3, 
    5 => ($alldata[5] + $alldata[17] + $alldata[29]) / 3, 
    6 => ($alldata[6] + $alldata[18] + $alldata[30]) / 3, 
    7 => ($alldata[7] + $alldata[19] + $alldata[31]) / 3, 
    8 => ($alldata[8] + $alldata[20] + $alldata[32]) / 3, 
    9 => ($alldata[9] + $alldata[21] + $alldata[33]) / 3, 
    10 => ($alldata[10] + $alldata[22] + $alldata[34]) / 3, 
    11 => ($alldata[11] + $alldata[23] + $alldata[35]) / 3,
  )
);

 file_put_contents('json/FingridData/TempData.json',  json_encode(array($TempData))); 


