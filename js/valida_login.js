with (document.login) {
	onsubmit = function (e) {
		e.preventDefault();
		ok = true;
		if (ok && username.value == "") {
			ok = false;
			alert("Debe escribir un nombre de la sala");
			username.focus();
		}
		if (ok && password.value == "") {
			ok = false;
			alert("Debe escribir su password");
			password.focus();
		}
		if (ok) { submit(); }
	}
}
