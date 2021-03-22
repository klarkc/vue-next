<?php
	$template_filename = realpath(__DIR__ . "/../../web/index.html");
	$script_filename = realpath(__DIR__ . "/index.js");
	$template = file_get_contents($template_filename);
	$script = file_get_contents($script_filename);
	$v8 = new \V8Js();
	ob_start();
	$v8->executeString($script);
	echo str_replace('<div id="app"></div>', ob_get_clean(), $template);
?>