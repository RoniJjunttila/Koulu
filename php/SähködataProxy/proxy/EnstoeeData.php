<?php

#min max avg tältä päivältä
#pelkät kolme arvo. 

function download_page($path){
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL,$path);
    curl_setopt($ch, CURLOPT_FAILONERROR,1);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION,1);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
    curl_setopt($ch, CURLOPT_TIMEOUT, 15);
    $retValue = curl_exec($ch);          
    curl_close($ch);
    return $retValue;
}

$Day = date("d");
$Month = date("m");
$Year = date("y");

function getpast31day($Day, $Month, $Year){

    if(($Day - 31) <= 0){
        if(($Day - 31) + substr(date("Y-m-t", strtotime($Year . "-" . $Month - 1 . "-10")), -2) < 10) {
            return "0" . ($Day - 31) + substr(date("Y-m-t", strtotime($Year . "-" . $Month - 1 . "-10")), -2);
        } else {
            return ($Day - 31) + substr(date("Y-m-t", strtotime($Year . "-" . $Month - 1 . "-10")), -2);
        }  
    } else {
        return $Day;
    }
}

if($Month <= 9) {
    $Month = "0" . $Month;
}

$last31day = getpast31day($Day, $Month, $Year);

#('https://web-api.tp.entsoe.eu/api?securityToken=419b446b-122c-414f-8586-fc7d6ff39def&documentType=A44&outBiddingZone_Domain=10YFI-1--------U&periodStart='. 20 . $Year . $Month-1 .  $last31day . 2300 .'&periodEnd=' . 20 . $Year . $Month . $Day . 2300 . '&in_Domain=10YFI-1--------U&out_Domain=10YFI-1--------U');
$sXML = download_page("https://web-api.tp.entsoe.eu/api?securityToken=419b446b-122c-414f-8586-fc7d6ff39def&documentType=A44&outBiddingZone_Domain=10YFI-1--------U&periodStart=2022" . ($Month - 1). $Day . "2300&periodEnd=" . 20 . $Year . $Month . $Day . 2300 . "&in_Domain=10YFI-1--------U&out_Domain=10YFI-1--------U");
echo ("https://web-api.tp.entsoe.eu/api?securityToken=419b446b-122c-414f-8586-fc7d6ff39def&documentType=A44&outBiddingZone_Domain=10YFI-1--------U&periodStart=2022" . ($Month - 1). $Day . "2300&periodEnd=" . 20 . $Year . $Month . $Day . 2300 . "&in_Domain=10YFI-1--------U&out_Domain=10YFI-1--------U");
$oXML = new SimpleXMLElement($sXML);

$singleday = [];

$lastItem = $oXML -> TimeSeries -> count() - 1;


$data = number_format((float)($oXML -> TimeSeries[$lastItem - 1] -> Period -> Point[23] -> {"price" . "." . "amount"}) * 0.1, 2, '.', '');
array_push($singleday, (float)$data); 

for($hour = 0; $hour <= 23; $hour++) {  
    $data = number_format((float)($oXML -> TimeSeries[$lastItem] -> Period -> Point[$hour] -> {"price" . "." . "amount"}) * 0.1, 2, '.', '');
    array_push($singleday, number_format($data, 2, ',', ' ')); #24h data
}

echo json_encode(array(
    "24h" => array(
        ["price" => $singleday[0], "time" => "00"],
        ["price" => $singleday[1], "time" => "01"],
        ["price" => $singleday[2], "time" => "02"],
        ["price" => $singleday[3], "time" => "03"],
        ["price" => $singleday[4], "time" => "04"],
        ["price" => $singleday[5], "time" => "05"],
        ["price" => $singleday[6], "time" => "06"],
        ["price" => $singleday[7], "time" => "07"],
        ["price" => $singleday[8], "time" => "08"],
        ["price" => $singleday[9], "time" => "09"],
        ["price" => $singleday[10], "time" => "10"],
        ["price" => $singleday[11], "time" => "11"],
        ["price" => $singleday[12], "time" => "12"],
        ["price" => $singleday[13], "time" => "13"],
        ["price" => $singleday[14], "time" => "14"],
        ["price" => $singleday[15], "time" => "15"],
        ["price" => $singleday[16], "time" => "16"],
        ["price" => $singleday[17], "time" => "17"],
        ["price" => $singleday[18], "time" => "18"],
        ["price" => $singleday[19], "time" => "19"],
        ["price" => $singleday[20], "time" => "20"],
        ["price" => $singleday[21], "time" => "21"],
        ["price" => $singleday[22], "time" => "22"],
        ["price" => $singleday[23], "time" => "23"],
        ["price" => $singleday[24], "time" => "24"],
        ["avg" => array_sum($singleday) / count($singleday)],
        ["min" => min($singleday)],
        ["max" => max($singleday)]
     )
)); 


file_put_contents('json/EnstoeeData.json',  json_encode(array(
    "24h" => array(
        ["price" => $singleday[0], "time" => "00"],
        ["price" => $singleday[1], "time" => "01"],
        ["price" => $singleday[2], "time" => "02"],
        ["price" => $singleday[3], "time" => "03"],
        ["price" => $singleday[4], "time" => "04"],
        ["price" => $singleday[5], "time" => "05"],
        ["price" => $singleday[6], "time" => "06"],
        ["price" => $singleday[7], "time" => "07"],
        ["price" => $singleday[8], "time" => "08"],
        ["price" => $singleday[9], "time" => "09"],
        ["price" => $singleday[10], "time" => "10"],
        ["price" => $singleday[11], "time" => "11"],
        ["price" => $singleday[12], "time" => "12"],
        ["price" => $singleday[13], "time" => "13"],
        ["price" => $singleday[14], "time" => "14"],
        ["price" => $singleday[15], "time" => "15"],
        ["price" => $singleday[16], "time" => "16"],
        ["price" => $singleday[17], "time" => "17"],
        ["price" => $singleday[18], "time" => "18"],
        ["price" => $singleday[19], "time" => "19"],
        ["price" => $singleday[20], "time" => "20"],
        ["price" => $singleday[21], "time" => "21"],
        ["price" => $singleday[22], "time" => "22"],
        ["price" => $singleday[23], "time" => "23"],
        ["price" => $singleday[24], "time" => "24"],
     )
))); 
 
