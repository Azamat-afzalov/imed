<?php
    $TOKEN = '5431416948:AAGhNSA9lzXEGjHrmMgnyIM4vi4EvvitvcA';
    $CHAT_ID = '@imedapplicationsbot';
    $name = $_REQUEST['fullName'];
	$phone = $_REQUEST['phone'];
	$comment = $_REQUEST['comment'];

    $message= '';
	
    $send_text = 'https://api.telegram.org/bot'
        .$TOKEN
        .'/sendMessage?chat_id='
        .$CHAT_ID.'&parse_mode=Markdown&text='
        .$message;

?>