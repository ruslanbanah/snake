class GamePad {
	constructor(gamePadMap){
		this.setKeyPad(gamePadMap)
		this.handle = document.addEventListener('keydown', (e)=>{ this.listener(e) })
	}
	setKeyPad(obj){
		this.keyMap = obj
	}
	listener(e){
		let k = e.keyCode;
		if (this.keyMap[k]&&(typeof this[this.keyMap[k]]) === 'function'){
			e.preventDefault()
			this[this.keyMap[k]](e)
		}
		console.log('Button press: ', k)
	}
	left(){
		console.log('left')
	}
	right(){
		console.log('right')
	}
	up(){
		console.log('up')
	}
	down(){
		console.log('down')
	}
}

