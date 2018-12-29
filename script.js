function proverka() {
	var date = document.form.birth.value	
	var date_right = "1999-03-20"
	if (date == date_right) {
		document.getElementById("li").click()
	} else {
		alert("Ви не та людина, введіть правильний день народження, або покиньте сайт")
	}
	}
function redir_main() {
	document.getElementById("link").click()
}
function cl(e) {
e = window.event;
 if (e.keyCode === 13) { 
 	document.getElementById("li").click()
 }
}