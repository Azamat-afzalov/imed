<?php
    $TOKEN = '5431416948:AAGhNSA9lzXEGjHrmMgnyIM4vi4EvvitvcA';
    $CHAT_ID = '@imedapplicationsbot';
    // $name = $_REQUEST['fullName'];
	// $phone = $_REQUEST['phone'];
	// $comment = $_REQUEST['comment'];

    $message= 'Hello world';
	
    $send_text = 'https://api.telegram.org/bot'
        .$TOKEN
        .'/sendMessage?chat_id='
        .$CHAT_ID.'&parse_mode=Markdown&text='
        .$message;

    $options = array(
        'http' => array(
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            // 'content' => http_build_query($data)
        )
    );
    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);

    var_dump($result);

?>