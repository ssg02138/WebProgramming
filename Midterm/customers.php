<?php include_once("./dbfunctions.php"); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Customers</title>
    <link rel="stylesheet" href="mystyle.css"/>
</head>

<body>
  <div id="main">
    
  <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
 <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->
 <g>
  <title>background</title>
  <rect fill="#fff" id="canvas_background" height="202" width="402" y="-1" x="-1"/>
  <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
   <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
  </g>
 </g>
 <g>
  <title>Layer 1</title>
  <rect id="svg_2" height="87" width="83" y="53.5" x="55" stroke-width="1.5" stroke="#000" fill="#fff"/>
  <rect id="svg_4" height="87" width="83" y="52.5" x="246.5" stroke-width="1.5" stroke="#000" fill="#fff"/>
  <rect id="svg_5" height="87" width="83" y="53.5" x="152.25" stroke-width="1.5" stroke="#000" fill="#fff"/>
  <text xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="50" id="svg_6" y="112.5" x="69" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#000000">김</text>
  <text xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="50" id="svg_7" y="113" x="167" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#000000">범</text>
  <text xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="50" id="svg_8" y="112.5" x="264" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#000000">석</text>
 </g>
</svg>

      <?php
        if($_POST){
            $data['name'] = $_POST['name'];
            $data['price'] = $_POST['price'];

            //var_dump($data);
            if(saveCustomer($data))
                echo "saved...";
            else   
                echo "failed...";
        }
        ?>

      <h1>Product Information</h1>
      <div id="input">
      <form method="POST">
        Name  <input id="name" type="text" name="name"/><br/>
        Price <input id="price" type="text" name="price"/><br/>
        <button type="submit">Save</button>
        </form>
        </div>
    <br/>
    <?php
        $product = getCustomers();
        echo "<table border = '1' width='100%' id='insertTable'>";
        echo "<tr> <th onclick='idSort();'>ID</th><th onclick='nameSort();'>NAME</th><th onclick='priceSort();'>PRICE</th></tr>";
        //while($rec = mysqli_fetch_assoc($customers)){
        foreach($product as $rec){
            $id = $rec['id'];
            $name = $rec['name'];
            $price = $rec['price'];
            echo "<tr>";
            echo "<td>$id</td><td>$name</td><td>$price</td>";
            echo "</tr>";
        }
        echo "</table>";
    ?>

    <div id="footer">
        <br/><br/>
                &copy;2018. Kim Beom-Seok 15054008.
    </div>

    </div>
</body>
<script src="sort.js"></script>
</html>