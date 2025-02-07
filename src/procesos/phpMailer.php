<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

/*require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';*/
require  './phpmailer/Exception.php';
require  './phpmailer/PHPMailer.php';
require  './phpmailer/SMTP.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"));

    if (!isset($data->name, $data->email, $data->message)) {
        echo json_encode(["status" => "error", "message" => "Datos incompletos"]);
        exit;
    }

    $name = htmlspecialchars($data->name);
    $lname = htmlspecialchars($data->lname ?? '');
    $email = filter_var($data->email, FILTER_VALIDATE_EMAIL);
    $tel = htmlspecialchars($data->tel ?? '');
    $message = nl2br(htmlspecialchars($data->message));

    if (!$email) {
        echo json_encode(["status" => "error", "message" => "Email inválido"]);
        exit;
    }

    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.adming-consulting.com'; 
        $mail->SMTPAuth = true;
        $mail->Username = 'matprimas.tocha.loc33@gmail.com';
        $mail->Password = 'nab8912u36acb$%';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom('tuemail@tudominio.com', 'Tu Nombre');
        $mail->addAddress('matprimas.tocha.loc33@gmail.com', 'Destinatario');

        $mail->isHTML(true);
        $mail->Subject = 'Nuevo mensaje de contacto';
        $mail->Body = "<p><strong>Nombre:</strong> $name $lname</p>
                       <p><strong>Email:</strong> $email</p>
                       <p><strong>Teléfono:</strong> $tel</p>
                       <p><strong>Mensaje:</strong><br>$message</p>";

        $mail->send();
        echo json_encode(["status" => "success", "message" => "Correo enviado"]);
    } catch (Exception $e) {
        echo json_encode(["status" => "error", "message" => "Error al enviar: {$mail->ErrorInfo}"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Método no permitido"]);
}
?>
