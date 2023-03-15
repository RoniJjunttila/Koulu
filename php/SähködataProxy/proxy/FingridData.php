<?php

$averageTemperature = json_decode(file_get_contents('./json/FingridData/TempData.json'));
$MonthByMonthData = json_decode(file_get_contents('./json/FingridData/Consumption.json'));
$AverageFinlandConsumtion = json_decode(file_get_contents('./json/FingridData/tuontato.json'));

file_put_contents('json/data.json' , json_encode(array(
    $AverageFinlandConsumtion, $averageTemperature, $MonthByMonthData, 
)));
