<?php
include 'headers.php';

$Year = date("Y");
$Month = date("m");;
$Date = date("d");
$alldata = array();
$singledata = 0;
$selection = array(
  0 => "181", #Tuulivoima
  1 => "191", #Vesivoima
  2 => "188", #Ydinvoima
  3 => "202", #Teollisuuden voima
  4 => "192", #Koko Suomen tuotanto
);

$Q1 = 0;
$Q2 = 0;
$Q3 = 0;
$Q4 = 0;

$CombinedData = 0;

for ($i = 0; $i < count($selection); $i++){

  if (($Month - 3) > 0) { #jos on täys kvartaali
        $Q1 = "https://api.fingrid.fi/v1/variable/". $selection[$i] . "/events/json?start_time=". $Year ."-". "1" ."-" . "1" . "T00%3A00%3A00Z&end_time=" . date("Y-m-t", strtotime($Year . "-" . "3" . "-10")) ."T01%3A00%3A00Z";
    } else { #jos on vajaa kvartaali
        $Q1 = "https://api.fingrid.fi/v1/variable/". $selection[$i] . "/events/json?start_time=". $Year ."-". "1" ."-" . "1" . "T00%3A00%3A00Z&end_time=" . $Year ."-". $Month ."-" . substr(date("Y-m-t", strtotime($Year . "-" . $Month . "-10")), -2) ."T01%3A00%3A00Z";
  } 

    if($Month >= 3) {
        if (($Month - 6) > 0) { #jos on täys kvartaali
            $Q2 = "https://api.fingrid.fi/v1/variable/". $selection[$i] . "/events/json?start_time=". $Year ."-". "4" ."-" . "1" . "T00%3A00%3A00Z&end_time=" . date("Y-m-t", strtotime($Year . "-" . "6" . "-10")) ."T01%3A00%3A00Z";
        } else { #jos on vajaa kvartaali
            $Q2 = "https://api.fingrid.fi/v1/variable/". $selection[$i] . "/events/json?start_time=". $Year ."-". "4" ."-" . "1" . "T00%3A00%3A00Z&end_time=" . $Year ."-". $Month ."-" . substr(date("Y-m-t", strtotime($Year . "-" . $Month . "-10")), -2) ."T01%3A00%3A00Z";
        } 
    }

    if($Month >= 6) {
        if (($Month - 9) > 0) { #jos on täys kvartaali
            $Q3 = "https://api.fingrid.fi/v1/variable/". $selection[$i] . "/events/json?start_time=". $Year ."-". "7" ."-" . "1" . "T00%3A00%3A00Z&end_time=" .  date("Y-m-t", strtotime($Year . "-" . "9" . "-10")) ."T01%3A00%3A00Z";
        } else { #jos on vajaa kvartaali
            $Q3 = "https://api.fingrid.fi/v1/variable/". $selection[$i] . "/events/json?start_time=". $Year ."-". "7" ."-" . "1" . "T00%3A00%3A00Z&end_time=" . $Year ."-". $Month ."-" . substr(date("Y-m-t", strtotime($Year . "-" . $Month . "-10")), -2) ."T01%3A00%3A00Z";
        } 
    }

    if($Month > 9) {
    $Q4 = "https://api.fingrid.fi/v1/variable/". $selection[$i] . "/events/json?start_time=". $Year ."-". "10" ."-" . "1" . "T00%3A00%3A00Z&end_time=" . $Year ."-". $Month ."-" . $Date ."T01%3A00%3A00Z";
    }

    $urls = array(
    0 => $Q1,
    1 => $Q2,
    2 => $Q3,
    3 => $Q4
    );

    for($z = 0; $z < 4; $z++){
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
            $response = json_decode($response, true); //because of true, it's in an array
            $singledata = 0;
            if($response !== null){
                for ($x = 0; $x <= count($response); $x++) {
                if(isset($response[$x]['value'])) {    
                    $CombinedData += $response[$x]['value'];
                    $singledata += $response[$x]['value'];
                    }
                }
            }
        $alldata[] = $singledata;
    }
}

$data = array(
    "Tuulivoima" => array(
    #tuulivoima kvartaalit järjestyksessä 
    0 => $alldata[0], 
    1 => $alldata[1], 
    2 => $alldata[2], 
    3 => $alldata[3],
    'KokoVuodenData' => $alldata[0] + $alldata[1] + $alldata[2] + $alldata[3],
    ),
    "Vesivoima" => array(
    #vesivoima kvarvaalit
    0 => $alldata[4],
    1 => $alldata[5], 
    2 => $alldata[6], 
    3 => $alldata[7], 
    'KokoVuodenData' => $alldata[4] + $alldata[5] + $alldata[6] + $alldata[7],
    ),
    "Ydivoima" => array(
    #ydinvoima kvartaalit
    0 => $alldata[8], 
    1 => $alldata[9], 
    2 => $alldata[10], 
    3 => $alldata[11], 
    'KokoVuodenData' => $alldata[8] + $alldata[9] + $alldata[10] + $alldata[11],
    ),
    "Teollisuuden" => array(
    0 => $alldata[12], 
    1 => $alldata[13], 
    2 => $alldata[14], 
    3 => $alldata[15], 
    'KokoVuodenData' => $alldata[12] + $alldata[13] + $alldata[14] + $alldata[15]
    ),
    "KokoSuomenTuotanto" => array(
    0 => $alldata[16], 
    1 => $alldata[17], 
    2 => $alldata[18], 
    3 => $alldata[19], 
    'KokoVuodenData' => $alldata[16] + $alldata[17] + $alldata[18] + $alldata[19],    
    )
);
