<?php


    if(isset($_POST['masuk'])){
        $username=$_POST['user'];
        $password=$_POST['pwd'];
        if($username=="admin" && $password=="123"){
            echo "<script>alert('Selamat Datang !!!');</script>";
        }
        else{
            echo "<script>alert('Nah...');</script>";
        }
    }
    ?>