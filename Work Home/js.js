x = prompt('Введите имя пользователя', '');
if (/\d/.test(x)) {
	var arr = x.split('')
	for (var i = 0; i < arr.length; i++) {
		if (i % 2 == 0) {
			arr[i] = arr[i].toUpperCase();
		}
		b = arr.join('');
	}
	alert(b);
} else {
	function reverseStr(x) {
		return x.split('').reverse().join('');
	}
	alert(reverseStr(x))
}

function googleLink() {
	window.open('http://google.com');
}

function writeImg() {
	document.write('<img src="img.jpg" width=\'300\' height=\'200\'>');
}

function objectVasa() {
	var user = {
		'Имя' : 'Human',
		'Возраст' : 18,
		'Пол' : 'мужской',
		'Профессия' : 'Front\-end',
		'Вероисповедание' : 'Атесит',
		'Семейное положение' : 'холост'
	};
	for (var key in user) {
		writeObject.innerHTML += key + ': ' + user[key] + '<br>';
	};
	console.log(user);
}