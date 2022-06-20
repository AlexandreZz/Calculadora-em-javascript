let resultado = document.getElementById('resultado'),
	itemSelect = document.getElementsByClassName('item');

function insert(){
	for (itemSelecionado of itemSelect) {
		itemSelecionado.addEventListener('click',function(){
			resultado.value += this.value;
			if(this.value == "c"){
				limparInput();
			}
		});
	}
}

function calcular(){
	if(resultado.value == "undefined" || resultado.value == "")
		resultado.value = "0";
	
	resultado.value = eval(resultado.value);
}

function limparInput(){
	resultado.value = "";
}


function checkInputAlf(alfa){
	let expressao = new RegExp(/^[a-záàâãéèêíïóôõöúçñ,\~\!\@\#\$\%\^\&\(\)\_\=\?\'\"\;\:\[\]\{\}\ \|\<\>]+$/i),
		currentValue = alfa.value;
	for (checkOutLyricsLater of currentValue) {
		if(expressao.test(checkOutLyricsLater))
			resultado.value = "";
	}
}


insert();