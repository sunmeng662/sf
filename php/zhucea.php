<?php
include('../lib/MySQL_Model.php');
$config = [
	'host'=>'localhost', 
	'port'=>3306, 
	'user'=>'root',  
	'passwd'=>'191300',  
	'dbname'=>'user1.0'
];
$m = new MMysql($config);
$user = $_GET['user'];
$check_usera = "select * from sf where username='$user';";
$user_da = $m->doSql($check_usera);
// var_dump($user);
if($user_da){
    $arra = [
        "err"=>1,
        "msg"=>"此手机号已被注册"
    ];
    echo json_encode($arra);
}else{
    $arra = [
        "err"=>0,
        "msg"=>""
    ];
    echo json_encode($arra);
}