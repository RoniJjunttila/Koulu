<?php

  $Year = date("Y");
  $Month = date("m");;
  $Date = date("d");
  $alldata = array();
  $CombinedDataArray = array();
  $singledata = 0;
  $selection = array(
    0 => "193", #Suomen kulutus
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
	$CombinedDataArray[]= $singledata;
    } else {
        $alldata[] = 0;
    }
   
  }
}

$Consumption = array(
   "KeskiKulutus" => array(
    0 => $alldata[0],
    1 => $alldata[1],
    2 => $alldata[2], 
    3 => $alldata[3], 
    4 => $alldata[4], 
    5 => $alldata[5], 
    6 => $alldata[6], 
    7 => $alldata[7], 
    8 => $alldata[8], 
    9 => $alldata[9], 
    10 => $alldata[10], 
    11 => $alldata[11], 
    'KokoVuodenData' => $CombinedDataArray[0] + $CombinedDataArray[1] + $CombinedDataArray[2] + $CombinedDataArray[3] + $CombinedDataArray[4] + $CombinedDataArray[5] + $CombinedDataArray[6] + $CombinedDataArray[7] + $CombinedDataArray[8] + $CombinedDataArray[9] + $CombinedDataArray[10] + $CombinedDataArray[11]
  )
); 

 file_put_contents('json/FingridData/consumption.json',  json_encode(array($Consumption))); 


