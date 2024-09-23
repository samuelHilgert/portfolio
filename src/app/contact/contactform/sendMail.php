<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): // Allow preflighting to take place.
        header("Access-Control-Allow-Origin: https://samuelhilgert.com");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;

    case ("POST"): // Send the email.
        header("Access-Control-Allow-Origin: https://samuelhilgert.com");

        // Payload is not sent to $_POST Variable, it is sent to php://input as text.
        $json = file_get_contents('php://input');
        // Parse the Payload from text format to Object.
        $params = json_decode($json);

        $email = $params->email;
        $name = $params->name;
        $message = $params->message;
        $term = $params->term;

        $recipient = 'kontakt@samuelhilgert.com';
        $subject = "Contact From <$email>";
        $message = "From: " . $name . "<br>" . $message;

        $headers   = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';

        // Additional headers.
        $headers[] = "From: kontakt@samuelhilgert.com";

        // Send the mail.
        mail($recipient, $subject, $message, implode("\r\n", $headers));
        break;

    default: // Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
