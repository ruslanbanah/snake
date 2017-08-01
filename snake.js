	const GO_RIGHT = 1
	const GO_DOWN = 2
	const GO_LEFT = 3
	const GO_UP = 4
class Snake{

	constructor (startX, startY){
		this.sBody = []
		this.restart(startX, startY)
	 	this.vector = GO_RIGHT
	 	this.isGrow = false
	}
	restart(startX, startY){
		if(this.sBody.length){
			this.sBody.splice(0, this.length - 1); //Стираем тело змейки.
		}
		this.sBody = [{x: startX || 0,y: startY || 0}]
        this.vector = GO_RIGHT;  //Меняем направление на правую сторону.
	}
	render(w,h){
		let buf = { x: 0, y: 0}
		this.sBody.forEach((el, i)=>{
			if (this.vector == GO_RIGHT) buf.x = this.tail.x + 1, buf.y = this.tail.y
			if (this.vector == GO_DOWN) buf.y = this.tail.y + 1, buf.x = this.tail.x
			if (this.vector == GO_LEFT) buf.x = this.tail.x - 1, buf.y = this.tail.y
			if (this.vector == GO_UP) buf.y = this.tail.y - 1, buf.x = this.tail.x

			if (this.vector == GO_RIGHT) if (buf.x > w) buf.x = 0;
	    if (this.vector == GO_DOWN) if (buf.y > h) buf.y = 0;
	    if (this.vector == GO_LEFT) if (buf.x < 0) buf.x = w;
	    if (this.vector == GO_UP) if (buf.y < 0) buf.y = h;

		});
		this.sBody.push(buf); //Добавляем хвост после головы с новыми координатами.
		this.sBody.splice(0,1)
	}
	grow(){
		// this.isGrow = true
		this.sBody.unshift({ x: this.head.x, y: this.head.y })
		console.log('I`m ate apple, and i`m grown to 1', this.sBody.length)
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
		return this.sBody.length
	}
	get last(){
		return this.sBody.length - 1
	}
	get tail(){
		return this.sBody[this.sBody.length - 1]
	}
	get head(){
		return this.sBody[0]
	}
}