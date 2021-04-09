<?php

$email= $_POST['email'];

function validate_email($email){
    
    $domain=explode('@',$email);
    
    if(
                $email = filter_var($email, FILTER_VALIDATE_EMAIL)&&
                checkdnsrr($domain[1],"MX")
        )
                { echo 'Ok, everything is correct';
                post_mail();}
                else {echo 'Your email is incorrect, please double check it ';}
};

function post_mail(){
    $message="Sender's name:". $_POST['name'] ."\r\nSender's email:" . $_POST['email'] . "\r\nMessage:" . $_POST['message'];
    $message=wordwrap($message,70, "\r\n");

        $sent_status=mail($_POST['email'],'julia.matviishyna@edu.bc.fi', 'sent from Julia Portfolio Page', $message);

        if($sent_status){
            echo '<h1>Message was delivered</h1>';
            echo 'Thank you, I will reply to you as soon as possible';
            } else{
                echo '<h1>Message was not sent</h1>';
                echo 'Please check may be you made some mistakes inputting your details';
                    } 
}

validate_email($email);





?>