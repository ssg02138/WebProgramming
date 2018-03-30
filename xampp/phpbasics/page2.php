<?php
    // HTML is embedded in php
    echo "<h1>Hello world!</h1>";
?>

<!-- PHP is embedded in html-->
<h1><?php echo "PHP Variabels";?></h1>

<!-- -->
<?php
    $a = "Suwon Univ";
    $b = "The Best";
    echo $a." ".$b;
    echo "<br/>";
    echo "$a $b";

    $r = "a";
    echo "<br/>";
    echo "${$r}";   // 변수 참조
    echo "<br/>";
    echo "$$r = ${$r}";

    echo "<br/>";
    echo "<h3>Numbers </h3>";
    $a = 5;
    $b = 10;
    $c = $a+$b;
    echo "The sum of ". $a." and ".$b." is ".$c."<br/>";

    // 5.00 or 5.250000
    // printf();
    printf("The amount is %.2f<br/>", $a);
    printf("The amount is %.6f<br/>", 5.25);

    if($a==5){
        echo "Yes it's 5";
    } else {
        
    }

    switch($a){
        case 1:break;
        case 2:break;
        case 3:break;
        case 4:break;
        case 5:echo "<br/>it's number is 5<br/>"; break;
    }

    for($i=0; $i<5; $i++){
        echo $i."<br/>";
    }

    while($i>0){
        echo $i."<br/>";
        $i--;
    }
    
    do{
        echo $i."<br/>";
        $i++;
    }while($i<8);

    $fruits = Array();  // 배열 선언과 사용
    var_dump($fruits);
    $fruits[0]="Banana";
    $fruits[7]="Banana";
    $fruits[1]="Apple";
    $fruits[2]="Berry";
    echo "<br/>";
    var_dump($fruits);
    echo "<br/>";
    foreach($fruits as $k=>$fruit)
        echo "[$k] = ".$fruit."<br/>";

        
    echo "<br/>";
    sort($fruits);
    var_dump($fruits);
    echo "<br/>";
    foreach($fruits as $k=>$fruit)
    echo "[$k] = ".$fruit."<br/>";

    $cars = ['kia','Hyundai','samsung'];
    var_dump($cars);
    echo "<br/>";
    foreach($cars as $k=>$car)
        echo "[$k] = ".$car."<br/>";
    echo "<br/>";

    $nf = array_unique($fruits);
    foreach($nf as $k=>$fruit)
        echo "[$k] = ".$fruit."<br/>";
?>