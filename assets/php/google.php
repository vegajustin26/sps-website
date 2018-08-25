<?php
$content = file_get_contents('https://www.google.com/calendar/embed?src=%23contacts%40group.v.calendar.google.com&ctz=America/Montreal');
$content = str_replace('</title>','</title><base href="https://www.google.com/calendar/" />', $content);
$content = str_replace('</head>','<link rel="stylesheet" href="http://www.yourwebsiteurl.com/google.css" /></head>', $content);
echo $content;
?>