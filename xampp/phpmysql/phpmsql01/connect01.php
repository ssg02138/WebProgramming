<?php
echo "MySql 연결 테스트<br>";

$user="root";	// DB 사용자 설정
$pass="";	// DB 패스워드 설정
$host="localhost";	// DB 장소 설정
$port="4000";   // DB 포트 설정
$dbname="yournamebank";
 
$db = @mysqli_connect($host, $user, $pass, $dbname, $port); // @ = 오류 발생시 동작
 
if($db){
    echo "connect : 성공<br>";
}
else{
    echo "disconnect : 실패<br>";
}
 
$result = mysqli_query($db, 'SELECT VERSION() as VERSION');
$data = mysqli_fetch_assoc($result);
echo $data['VERSION'];
?>