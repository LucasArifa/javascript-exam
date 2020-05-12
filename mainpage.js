if (typeof (Storage) !== "undefined") {

	window.onload = function () {
		if (window.localStorage.getItem('userNota1')) {
			const userNota1 = JSON.parse(window.localStorage.getItem('userNota1'));
			window.document.getElementById("txtTentativa1").innerHTML = `<strong>1º Chance - ${userNota1}%</strong> <br/>`
		} 
		if (window.localStorage.getItem('userNota2')) {
			const userNota2 = JSON.parse(window.localStorage.getItem('userNota2'));
			window.document.getElementById("txtTentativa2").innerHTML = `<strong>2º Chance - ${userNota2}%</strong> <br/>`
		}
		if (window.localStorage.getItem('userNota3')) {
			const userNota3 = JSON.parse(window.localStorage.getItem('userNota3'));
			window.document.getElementById("txtTentativa3").innerHTML = `<strong>3º Chance - ${userNota3}%</strong> <br/>`
		}
	}
	function clearLocalStorage() {
		window.location.reload();
		window.localStorage.clear();
	}
	function finalizarTeste() {
		const radiosQ1 = document.getElementsByName('radio-questao-1');
		const radiosQ2 = document.getElementsByName('radio-questao-2');
		const radiosQ3 = document.getElementsByName('radio-questao-3');
		const radiosQ4 = document.getElementsByName('radio-questao-4');
		const radiosQ5 = document.getElementsByName('radio-questao-5');
		const radiosQ6 = document.getElementsByName('radio-questao-6');
		const radiosQ7 = document.getElementsByName('radio-questao-7');
		const radiosQ8 = document.getElementsByName('radio-questao-8');
		const radiosQ9 = document.getElementsByName('radio-questao-9');
		const radiosQ10 = document.getElementsByName('radio-questao-10');


		var notaFinal = 0;
		var radiosList = {};

		for (var i = 0 in radiosQ1) {
			if (radiosQ1[i].checked) {
				Object.assign(radiosList, {
					question1: radiosQ1[i].value
				})
				if (radiosList.question1 === 'certo') {
					notaFinal = notaFinal + 10;
				}
			}
		}
		for (var i = 0 in radiosQ2) {
			if (radiosQ2[i].checked) {
				Object.assign(radiosList, {
					question2: radiosQ2[i].value
				});
				if (radiosList.question2 === 'errado') {
					notaFinal = notaFinal + 10;
				}
			}
		}
		for (var i = 0 in radiosQ3) {
			if (radiosQ3[i].checked) {
				Object.assign(radiosList, {
					question3: radiosQ3[i].value
				});
				if (radiosList.question3 === 'errado') {
					notaFinal = notaFinal + 10;
				}
			}
		}
		for (var i = 0 in radiosQ4) {
			if (radiosQ4[i].checked) {
				Object.assign(radiosList, {
					question4: radiosQ4[i].value
				});
				if (radiosList.question4 === 'questao-4-alternativa-c') {
					notaFinal = notaFinal + 10;
				}
			}
		}
		for (var i = 0 in radiosQ5) {
			if (radiosQ5[i].checked) {
				Object.assign(radiosList, {
					question5: radiosQ5[i].value
				});
				if (radiosList.question5 === 'questao-5-alternativa-c') {
					notaFinal = notaFinal + 10;
				}
			}
		}
		for (var i = 0 in radiosQ6) {
			if (radiosQ6[i].checked) {
				Object.assign(radiosList, {
					question6: radiosQ6[i].value
				});
				if (radiosList.question6 === 'questao-6-alternativa-e') {
					notaFinal = notaFinal + 10;
				}
			}
		}
		for (var i = 0 in radiosQ7) {
			if (radiosQ7[i].checked) {
				Object.assign(radiosList, {
					question7: radiosQ7[i].value
				});
				if (radiosList.question7 === 'questao-7-alternativa-e') {
					notaFinal = notaFinal + 10;
				}
			}
		}
		for (var i = 0 in radiosQ8) {
			if (radiosQ8[i].checked) {
				Object.assign(radiosList, {
					question8: radiosQ8[i].value
				});
				if (radiosList.question8 === 'questao-8-alternativa-a') {
					notaFinal = notaFinal + 10;
				}
			}
		}
		for (var i = 0 in radiosQ9) {
			if (radiosQ9[i].checked) {
				Object.assign(radiosList, {
					question9: radiosQ9[i].value
				});
				if (radiosList.question9 === 'questao-9-alternativa-a') {
					notaFinal = notaFinal + 10;
				}
			}
		}
		for (var i = 0 in radiosQ10) {
			if (radiosQ10[i].checked) {
				Object.assign(radiosList, {
					question10: radiosQ10[i].value
				});
				if (radiosList.question10 === 'questao-10-alternativa-d') {
					notaFinal = notaFinal + 10;
				}
			}
		}

		if (localStorage.length === 0) {
			window.localStorage.setItem('userNota1', notaFinal);
			window.localStorage.setItem('userRadiosList1', JSON.stringify(radiosList));
			const userNota1 = JSON.parse(window.localStorage.getItem('userNota1'));
			window.document.getElementById("txtTentativa1").innerHTML = `<strong>1º Chance - ${userNota1}%</strong> <br/>`
		} else {
			if (localStorage.length === 2) {
				window.localStorage.setItem('userNota2', notaFinal);
				window.localStorage.setItem('userRadiosList2', JSON.stringify(radiosList));
				const userNota2 = JSON.parse(window.localStorage.getItem('userNota2'));
				window.document.getElementById("txtTentativa2").innerHTML = `<strong>2º Chance - ${userNota2}%</strong> <br/>`
			} else {
				if (localStorage.length === 4) {
					window.localStorage.setItem('userNota3', notaFinal);
					window.localStorage.setItem('userRadiosList3', JSON.stringify(radiosList));
					const userNota3 = JSON.parse(window.localStorage.getItem('userNota3'));
					window.document.getElementById("txtTentativa3").innerHTML = `<strong>3º Chance - ${userNota3}%</strong> <br/>`
				}
			}
		}

		window.document.getElementById("numNota").innerText = `${notaFinal}%`;
		notaFinal = 0;

		document.querySelector("td#tdNota").className = 'tdNota';

		let inputRadios = document.getElementsByClassName("radios");
		for (var i = 0; i < inputRadios.length; i++) {
			inputRadios[i].checked = false;
		}

		window.onscroll = function () { scroll() };
		function scroll() {
			if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
				document.querySelector("td#tdNota").className = '';
			}
		}
	}
} else {
	console.error(`Browser <strong>do not support</strong> <em>LocalStorage</em>`);
alert(`</h3>O seu Navegador <strong>não suporta o sistema</strong></h3>`);
}

