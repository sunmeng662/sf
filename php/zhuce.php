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
$data = json_decode($_POST['data']);
$username = $data->user;
$password = $data->password;
$check_user = "select * from sf where username='$username';";
$user_d = $m->doSql($check_user);
if($user_d){
    $arr = [
        "err"=>1,
        "msg"=>"此手机号已被注册"
    ];
    echo json_encode($arr);
}else{
    $new_pass = md5($password);
    $sql = "insert into sf(username,password)values('$username','$new_pass');";
    if($m->doSql($sql)){
        $arr = [
            "err"=>0,
            "msg" =>"注册成功"
        ];
        echo json_encode($arr);
    }else{
        $arr = [
            "err"=>2,
            "msg"=>"注册失败，请重新输入"
        ];
        echo json_encode($arr);
    }
}
