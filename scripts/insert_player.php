<?php

    echo "{ 'result': 'error' }";
/*

    $newName = str_replace(" ", "_", str_replace("'", "", $_REQUEST['name']));
    $newEmail = str_replace(" ", "_", str_replace("'", "", $_REQUEST['email']));

    $game1  = str_replace(" ", "_", str_replace("'", "", $_REQUEST['game1']));
    $game2  = str_replace(" ", "_", str_replace("'", "", $_REQUEST['game2']));
    $game3  = str_replace(" ", "_", str_replace("'", "", $_REQUEST['game3']));
    $game4  = str_replace(" ", "_", str_replace("'", "", $_REQUEST['game4']));
    $game5  = str_replace(" ", "_", str_replace("'", "", $_REQUEST['game5']));
    $game6  = str_replace(" ", "_", str_replace("'", "", $_REQUEST['game6']));
    $game7  = str_replace(" ", "_", str_replace("'", "", $_REQUEST['game7']));
    $game8  = str_replace(" ", "_", str_replace("'", "", $_REQUEST['game8']));
    $game9  = str_replace(" ", "_", str_replace("'", "", $_REQUEST['game9']));
    $game10 = str_replace(" ", "_", str_replace("'", "", $_REQUEST['game10']));
    $game11 = str_replace(" ", "_", str_replace("'", "", $_REQUEST['game11']));
    $game12 = str_replace(" ", "_", str_replace("'", "", $_REQUEST['game12']));
    $game13 = str_replace(" ", "_", str_replace("'", "", $_REQUEST['game13']));
    $game14 = str_replace(" ", "_", str_replace("'", "", $_REQUEST['game14']));
    $game15 = str_replace(" ", "_", str_replace("'", "", $_REQUEST['game15']));
    
    $servername = "localhost";
    $username = "r570151_wc18";
    $password = "C0c4in4_0000";
    $dbname = "r570151_wc18";
    
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    $sql = "INSERT INTO players (name, email, game1, game2, game3, game4, game5, game6, game7, game8, game9, game10, game11, game12, game13, game14, game15) VALUES ('$newName', '$newEmail', 
      '$game1', '$game2', '$game3', '$game4', '$game5', '$game6', '$game7', '$game8', 
      '$game9', '$game10', '$game11', '$game12', '$game13', '$game14', '$game15')";  
            
    if ($conn->query($sql) === TRUE) {
        echo "{ 'result': 'ok' }";
        // echo "{ 'result': 'ok', 'response': {";
        // echo "    'id'    :  $conn->insert_id , ";
        // echo "    'name'  : '$newName', ";
        // echo "    'email' : '$newEmail' ";        
        // echo "} }";
    } else {
        // echo "{ 'result': 'error', 'response': '". $conn->error. "' }";
        echo "{ 'result': 'error' }";
    }
    
    
    $conn->close();
*/
?>