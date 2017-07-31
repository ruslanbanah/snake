	const GO_RIGHT = 1
	const GO_DOWN = 2
	const GO_LEFT = 3
	const GO_UP = 4
class Snake{

	constructor (startX, startY){
		this.sBody = []
		this.restart(startX, startY)
	 	this.vector = GO_RIGHT
	}
	restart(startX, startY){
		if(this.sBody.length){
			this.sBody.splice(0, this.length - 1); //Стираем тело змейки.
		}
		this.sBody = [{x: startX || 0,y: startY || 0}]
        this.vector = GO_RIGHT;  //Меняем направление на правую сторону.
	}
	render(){
		this.sBody.forEach(function(el, i){
		    if ( el.x == this.sBody[this.last].x && el.y == this.sBody[this.last].y && i < last) { 
		        this.restart()
			    }
			if (this.vector == 1) this.head.x = this.tail.x, this.head.y = this.tail.y
			if (this.vector == 2) this.head.y = this.tail.y, this.head.x = this.tail.x
			if (this.vector == 3) this.head.x = this.tail.x, this.head.y = this.tail.y
			if (this.vector == 4) this.head.y = this.tail.y, this.head.x = this.tail.x
		});
		this.sBody.push(f); //Добавляем хвост после головы с новыми координатами.
		this.sBody.splice(0,1); //Удаляем хвост.
	}
	rigth(){
		if(this.vector==GO_LEFT) return
		this.vector = GO_RIGHT
	}
	left(){
		if(this.vector==GO_RIGHT) return
		this.vector = GO_LEFT
	}
	up(){
		if(this.vector==GO_DOWN) return
		this.vector = GO_UP
	}
	down(){
		if(this.vector==GO_UP) return
		this.vector = GO_DOWN
	}
	get length(){
		return this.sBody.length - 1
	}
	get tail(){
		return this.sBody[this.sBody.length - 1]
	}
	get head(){
		return this.sBody[0]
	}
}