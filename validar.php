<?php
session_start();
include('db.php');  // Asegúrate de que este archivo contiene la conexión correctamente

// Verificar si el formulario fue enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = trim($_POST['usuario']);
    $contraseña = trim($_POST['contraseña']);

    // Validar que no estén vacíos
    if (empty($usuario) || empty($contraseña)) {
        echo "<script>alert('Error: Usuario o contraseña vacíos.'); window.location.href='index2.php';</script>";
        exit();
    }

    // Conectar a la base de datos de forma segura
    $conexion = mysqli_connect("185.176.40.25", "root", "8M2Z0N004", "4554922_base");

    if (!$conexion) {
        die("Error de conexión: " . mysqli_connect_error());
    }

    // Usar consultas preparadas para evitar SQL Injection
    $stmt = mysqli_prepare($conexion, "SELECT password FROM login WHERE username = ?");
    mysqli_stmt_bind_param($stmt, "s", $usuario);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_store_result($stmt);
    
    // Verificar si el usuario existe
    if (mysqli_stmt_num_rows($stmt) > 0) {
        mysqli_stmt_bind_result($stmt, $hash);
        mysqli_stmt_fetch($stmt);

        // Verificar la contraseña
        if (password_verify($contraseña, $hash)) {
            $_SESSION['usuario'] = $usuario;
            header("location: soctrad/");
            exit();
        } else {
            echo "<script>alert('Error: Contraseña incorrecta.'); window.location.href='index2.php';</script>";
        }
    } else {
        echo "<script>alert('Error: Usuario no encontrado.'); window.location.href='index2.php';</script>";
    }

    // Cerrar conexiones
    mysqli_stmt_close($stmt);
    mysqli_close($conexion);
} else {
    header("Location: index2.php");
    exit();
}
?>
