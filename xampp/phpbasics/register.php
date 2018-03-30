<h1>Inside Register Page</h1>
<?php
    /*phpinfo();  // php 상태 확인
    var_dump($_GET);
    var_dump($_POST);
    var_dump($_SESSION);
    var_dump($_SERVER);
    foreach($_SERVER as $k=>$s){    // 서버 상태 값 불러오기
        echo "$k $s <br/>";
    } */

    echo "<h3>GET DATA</h3>";
    if($_GET){  // 주소창에 인자값이 있을때 GET data 반환
        // http://localhost/phpbasics/page3.php?hi=hello&pw=1
        // ? 부분 뒤부터 인자값 & 구분자
        echo "GET data";
        var_dump($_GET);
    } else{
        echo "No GET data";
    }

    echo "<h3>POST DATA</h3>";
    if($_POST){  // 주소창에 인자값이 있을때 GET data 반환
        // http://localhost/phpbasics/page3.php?hi=hello&pw=1
        // ? 부분 뒤부터 인자값 & 구분자
        echo "POST data";
        var_dump($_POST);
        $f = fopen("abc.txt","a+");
        fwrite($f, $_POST['name']." # ".$_POST['pass']);
        fclose($f);
    } else{
        echo "No POST data";
    }

    
?>