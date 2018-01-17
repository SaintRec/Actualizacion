<?php session_start();?>
<html>

<head>
	<title>Login</title>
	<!-- <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css"> -->
	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
	<script src="vendor/animsition/js/animsition.min.js"></script>
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
	<script src="vendor/select2/select2.min.js"></script>
	<script src="vendor/daterangepicker/moment.min.js"></script>
	<script src="vendor/daterangepicker/daterangepicker.js"></script>
	<script src="vendor/countdowntime/countdowntime.js"></script>
	<link rel="shortcut icon" href="Img/67.ico" />
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="fonts/iconic/css/material-design-iconic-font.min.css">
	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
	<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
	<link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
	<link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css">
	<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
</head>

<body>
	<div class="container-login100">
		<form role="form" name="login" action="php/login.php" method="post">
			<span class="login100-form-title p-b-26">
				Bienvenido
			</span>
			<span class="login100-form-title p-b-48">
				<img src="Img/67.ico" width="70" height="70" class="d-inline-block align-top" alt="">
			</span>

			<div class="wrap-input100 ">
				<input class="input100" id="username" type="text" name="username">
				<span class="focus-input100" data-placeholder="Sala de Chat"></span>
			</div>

			<div class="wrap-input100 ">
				<label for="password"></label>
				<input class="input100" id="password" type="password" name="password">
				<span class="focus-input100" data-placeholder="Password"></span>
			</div>

			<div class="container-login100-form-btn">
				<div class="wrap-login100-form-btn">
					<div class="login100-form-bgbtn"></div>
					<button type="submit" class="login100-form-btn">
						Login
					</button>
				</div>
			</div>
		</form>
	</div>

	<script src="js/valida_login.js"></script>
</body>

</html>