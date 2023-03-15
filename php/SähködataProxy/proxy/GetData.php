<?php

include 'AverageTemperature.php';
include 'MonthByMonthConsumption.php';
include 'AverageFinlandConsumption.php';


 file_put_contents('json/data.json',  json_encode(array(
    array(
        $data
    ), 
    array(
       $TempData
    ),
    array(
       $Consumption
    )
))); 

