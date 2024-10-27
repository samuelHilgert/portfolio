<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"):
        header("Access-Control-Allow-Origin: https://samuelhilgert.com");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;

    case ("POST"):
        header("Access-Control-Allow-Origin: https://samuelhilgert.com");

        $json = file_get_contents('php://input');
        $params = json_decode($json);

        $email = $params->email;
        $name = $params->name;
        $message = $params->message;
        $term = $params->term;

        $recipient = 'mail@samuelhilgert.com';
        $subject = "Nachricht über Kontaktformular von <$email>";
        $message = "From: " . $name . "<br>" . $message;

        $headers   = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';

        $headers[] = "From: mail@samuelhilgert.com";

        mail($recipient, $subject, $message, implode("\r\n", $headers));
        break;

    default:
        header("Allow: POST", true, 405);
        exit;
}
