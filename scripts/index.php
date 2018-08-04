<?php
    echo "{ 'players': [";

    $servername = "localhost";
    $username = "r570151_wc18";
    $password = "C0c4in4_0000";
    $dbname = "r570151_wc18";
    
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    $sql = "SELECT id, name, email FROM players";
    $result = $conn->query($sql);
    
    $ind = 0;
    if ($result->num_rows > 0) {

        while($row = $result->fetch_assoc()) {
           if ($ind > 0) {
                echo ", ";
            }
            echo "'id' : '"   . $row["id"]. "' ";
            echo "'name' : '" . $row["name"]. "' ";
            echo "'email' : '" . $row["email"]. "' ";
            $ind++;
        }
        
    }
    
    $conn->close();
		
	echo "] }";
?>