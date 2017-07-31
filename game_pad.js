class GamePad {
	constructor(gamePadName){
		this.keyMap = { 37: 'left', 39: 'rigth', 40: 'down', 38: 'up' }
		this.setKeyPad(gamePadName)
		this.handle = document.addEventListener('keydown', this.listener)
	}
	setKeyPad(obj){
		this.keyMap = obj
	}
	listener(e){
		let k = e.keyCode;
		console.log(k, this.keyMap)
		// if (this.keyMap[k]&&(typeOf this[this.keyMap[k]]) === 'function'){
		// 	e.preventDefault()
		// 	this[this.keyMap[k]](e)
		// }
		console.log('Button press: ', k)
	}
}