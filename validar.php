<?php
include('db.php');
$usuario=$_POST['usuario'];
$contraseña=$_POST['contraseña'];
session_start();
$_SESSION['usuario']=$usuario;


$conexion=mysqli_connect("localhost","root","","form");

$consulta="SELECT*FROM login where username='$usuario' and password='$contraseña'";
$resultado=mysqli_query($conexion,$consulta);

$filas=mysqli_num_rows($resultado);

if($filas){
  
    header("location:soctrad/");

}else{
    ?>


    <?php
    include("index2.php");
    
  ?>

  
  <?php
}
mysqli_free_result($resultado);
mysqli_close($conexion);
