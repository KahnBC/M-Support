<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = htmlspecialchars($_POST["first-name"]);
    $lastName = htmlspecialchars($_POST["last-name"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars($_POST["phone-number"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "milan16djokic@gmail.com"; // Change this to your email
    $subject = "Нови упит";
    $body = "Име: $firstName\nПрезиме: $lastName\nЕ-мејл: $email\nТелефон: $phone\nПорука:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
