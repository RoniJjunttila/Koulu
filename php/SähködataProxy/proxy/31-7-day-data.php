<?php

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
$LastMonth = date("m");

$SevenDays = [];
$Alldata = [];

#download_page("https://web-api.tp.entsoe.eu/api?securityToken=419b446b-122c-414f-8586-fc7d6ff39def&documentType=A44&outBiddingZone_Domain=10YFI-1--------U&periodStart=2022" . ($Month - 1). $Day . "2300&periodEnd=. 20 . $Year . $Month . $Day . 2300 . &in_Domain=10YFI-1--------U&out_Domain=10YFI-1--------U");

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
    $LastMonth = "0" . $Month - 1; 
} else {
    $LastMonth = $Month - 1;
}

$last31day = getpast31day($Day, $Month, $Year);
$sXML = download_page('https://web-api.tp.entsoe.eu/api?securityToken=419b446b-122c-414f-8586-fc7d6ff39def&documentType=A44&outBiddingZone_Domain=10YFI-1--------U&periodStart='. 20 . $Year . $LastMonth .  $last31day . 2300 .'&periodEnd=' . 20 . $Year . $Month . $Day . 2300 . '&in_Domain=10YFI-1--------U&out_Domain=10YFI-1--------U');
echo ('https://web-api.tp.entsoe.eu/api?securityToken=419b446b-122c-414f-8586-fc7d6ff39def&documentType=A44&outBiddingZone_Domain=10YFI-1--------U&periodStart='. 20 . $Year . $LastMonth .  $last31day . 2300 .'&periodEnd=' . 20 . $Year . $Month . $Day . 2300 . '&in_Domain=10YFI-1--------U&out_Domain=10YFI-1--------U');

#"https://web-api.tp.entsoe.eu/api?securityToken=419b446b-122c-414f-8586-fc7d6ff39def&documentType=A44&outBiddingZone_Domain=10YFI-1--------U&periodStart=" . 20 . 22 . 12 . 08 . 2300 . "2300&periodEnd=202212082300&in_Domain=10YFI-1--------U&out_Domain=10YFI-1--------U";
$oXML = new SimpleXMLElement($sXML);

#echo "paskap�" . $oXML -> TimeSeries -> Period -> Point -> {"price" . "." . "amount"};

 for($day = 0; $day <= 30; $day++) {
        for($hour = 0; $hour <= 23; $hour++){
           array_push($Alldata, (float)number_format($oXML -> TimeSeries[$day] -> Period -> Point[$hour] -> {"price" . "." . "amount"} * 0.1 , 2 , '.' , ''));
            #(array_push($Alldata, (float)$oXML -> TimeSeries[$day] -> Period -> Point[$hour] -> {"price" . "." . "amount"} * 0,1));  #t�yden kuukauden data
        }
     #array_push($Alldata, (float)number_format((float)$fullMonth * 0.1, 2 , '.', ''));
}

echo "paskaa" .  $oXML -> TimeSeries[30] -> Period -> Point[3] -> {"price" . "." . "amount"} * 0.1;


##tarvii invertin eli viimeset seitt�m�n p�iv��  day kohtaa ehk� alotus ois 23? ja lopetus 30?
for($day = 23; $day <= 30; $day++) {
    for($hour = 0; $hour <= 23; $hour++){
       array_push($SevenDays, (float)number_format($oXML -> TimeSeries[$day] -> Period -> Point[$hour] -> {"price" . "." . "amount"} * 0.1 , 2 , '.' , ''));
    }
}

echo '<pre>'; print_r($Alldata); echo '</pre>';
############31 p�iv� data
#31 p�iv�n keskiarvo  array_sum($a)/count($a)
#31 suurin ja pienin min() max() yksitt�inen tuntiarvo
#SeisamanPaivanData
 file_put_contents('json/PidemmanAikaValinData.json',  json_encode(array(
     "31PaivanData" => array(
        "keskiarvo" => array_sum($Alldata) / count($Alldata),
        "minimi" => min($Alldata),
        "korkein" =>  max($Alldata)
     ),
    "SeisamanPaivanData" => array(
       "keskiarvo" => array_sum($SevenDays) / count($SevenDays),
       "minimi" => min($SevenDays),
       "korkein" =>  max($SevenDays)
    )
))); 
#$nombre_format_francais = number_format($surkia, 2, ',', ' ');
 echo '</br>' . array_sum($Alldata) / count($Alldata);
echo '</br>' . max($Alldata);
echo '</br>' . min($SevenDays);
#############echo '<pre>'; print_r($Alldata); echo '</pre>';
/*
echo '</br>' . array_sum($SevenDays) / count($SevenDays);
echo '</br>' . max($SevenDays);
echo '</br>' . min($SevenDays); */