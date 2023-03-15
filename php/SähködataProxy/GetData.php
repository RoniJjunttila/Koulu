<?php
include 'headers.php';
include 'AverageTemprature.php';
include 'MonthByMonthConsumption.php';
include 'AverageFinlandConsumption.php';


 file_put_contents('data.json',  json_encode(array(
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

