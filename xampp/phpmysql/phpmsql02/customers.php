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

      <?php
        if($_POST){
            $data['ln'] = $_POST['ln'];
            $data['fn'] = $_POST['fn'];
            $data['bday'] = $_POST['bday'];

            //var_dump($data);
            if(saveCustomer($data))
                echo "saved...";
            else   
                echo "failed...";
        }
        ?>

      <h1>Customers</h1>
      <form method="POST">
        Last Name: <br/>
        <input type="text" name="ln"/><br/>
        First Name: <br/>
        <input type="text" name="fn"/><br/>
        Birthday: <br/>
        <input type="date" name="bday"/><br/>
        <button type="submit">Save</button>
    </form>
        <hr/>

    <?php
        $customers = getCustomers();
        echo "<table border = '1' width='100%'>";
        echo "<tr> <th>Name</th><th>Birthday</th></th>";
        //while($rec = mysqli_fetch_assoc($customers)){
        foreach($customers as $rec){
            $ln = $rec['lastname'];
            $fn = $rec['firstname'];
            $bd = $rec['birthday'];
            echo "<tr>";
            echo "<td>$ln $fn</td><td>$bd</td>";
            echo "</tr>";
        }
        echo "</table>";
    ?>

    </div>
</body>
</html>