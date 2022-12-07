function PrintMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function ClearMessages(){
	document.getElementById('messages').innerHTML = '';
}
