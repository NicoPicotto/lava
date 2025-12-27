<?php
header("Access-Control-Allow-Origin: https://lavaugc.com");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (!isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['message'])) {
        echo json_encode(["success" => false, "error" => "Faltan campos requeridos."]);
        exit;
    }

    $name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $location = isset($_POST['location']) ? filter_var(trim($_POST['location']), FILTER_SANITIZE_STRING) : 'No especificado';
    $userType = isset($_POST['type']) ? filter_var(trim($_POST['type']), FILTER_SANITIZE_STRING) : 'No especificado';
    $messageText = filter_var(trim($_POST['message']), FILTER_SANITIZE_STRING);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["success" => false, "error" => "Email inválido."]);
        exit;
    }

    if (empty($name) || empty($email) || empty($messageText)) {
        echo json_encode(["success" => false, "error" => "Los campos nombre, email y mensaje son obligatorios."]);
        exit;
    }

    $to = "hello@lavaugc.com";
    $subject = "Nuevo mensaje de contacto - " . $name;

    $message = "Has recibido un nuevo mensaje de contacto:\n\n";
    $message .= "Nombre: " . $name . "\n";
    $message .= "Email: " . $email . "\n";
    $message .= "Ubicación: " . $location . "\n";
    $message .= "Tipo: " . $userType . "\n\n";
    $message .= "Mensaje:\n" . $messageText . "\n";

    $headers = "From: noreply@lavaugc.com\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["success" => true, "message" => "Mensaje enviado correctamente."]);
    } else {
        echo json_encode(["success" => false, "error" => "No se pudo enviar el mensaje. Intenta nuevamente."]);
    }
} else {
    echo json_encode(["success" => false, "error" => "Método no permitido."]);
}
?>