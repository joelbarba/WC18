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
    
    $sql = "SELECT id, name, email, score, game1, game2, game3, game4, game5, game6, game7, game8, game9, game10, game11, game12, game13, game14, game15 FROM players";
    $result = $conn->query($sql);
    
    $ind = 0;
    if ($result->num_rows > 0) {

        while($row = $result->fetch_assoc()) {
           if ($ind > 0) {
                echo ", ";
            }
            echo " { 'id' : '"   . $row["id"]. "', ";
            echo "'name' : '" . $row["name"]. "', ";
            echo "'email' : '" . $row["email"]. "', ";
            echo "'score' : '" . $row["score"]. "', ";
            echo "'game1' : '" . $row["game1"]. "', ";
            echo "'game2' : '" . $row["game2"]. "', ";
            echo "'game3' : '" . $row["game3"]. "', ";
            echo "'game4' : '" . $row["game4"]. "', ";
            echo "'game5' : '" . $row["game5"]. "', ";
            echo "'game6' : '" . $row["game6"]. "', ";
            echo "'game7' : '" . $row["game7"]. "', ";
            echo "'game8' : '" . $row["game8"]. "', ";
            echo "'game9' : '" . $row["game9"]. "', ";
            echo "'game10' : '" . $row["game10"]. "', ";
            echo "'game11' : '" . $row["game11"]. "', ";
            echo "'game12' : '" . $row["game12"]. "', ";
            echo "'game13' : '" . $row["game13"]. "', ";
            echo "'game14' : '" . $row["game14"]. "', ";
            echo "'game15' : '" . $row["game15"]. "' }";
            $ind++;
        }
        
    }
    
    $conn->close();
		
	echo "] }";
?>