class Game {
	constructor(el) {
		this.players = []
		this.foods = []
		this.scene = []

		this.zoom = 30

		this.canvas = el
    this.gc = this.canvas.getContext('2d'), 
		this.canvas.width = innerWidth; 
		this.canvas.height = innerHeight;
		this.width = Math.round(this.canvas.width / this.zoom)
		this.height = Math.round(this.canvas.height / this.zoom)
		this.frame = 0
	}
	rand (min, max) {
		return Math.floor(Math.round(Math.random() * (max - min) + min)); 
	}
	addPlayer(params){
		this.players.push(new Player(params))
	}
	removePlayer(player){
		let index = this.players.indexOf(player)
		if (index > -1) {
    	this.players.splice(index, 1);
		}
	}
	clearGameCanvas(){
		this.gc.clearRect(0,0,gP.width,gP.height); 
	}
	addFood(){
		this.foods.push( { x: this.rand(0, this.width), y: this.rand(0, this.height), type: 1 } )
	}
	removeFood(food){
		let index = this.foods.indexOf(food)
		if (index > -1) {
    	this.foods.splice(index, 1);
		}
	}
	isAte(player){
		let foodAte = this.foods.filter( (food)=>{
					return (player.snake.head.x == food.x && player.snake.head.y == food.y)
				})
		if(!foodAte.length) return false
		this.removeFood(foodAte[0])
		return true
	}
	renderFood(x,y,type){
		this.gc.beginPath();
		this.gc.arc(x*this.zoom + this.zoom / 2, y*this.zoom + this.zoom / 2, this.zoom / 2, 0, 2 * Math.PI, false);
		this.gc.fillStyle = 'red';
		this.gc.fill();
		this.gc.lineWidth = 8;
		this.gc.strokeStyle = '#003300';
		this.gc.stroke();
	}
	renderBody(x,y, color){
		this.gc.beginPath();
		this.gc.arc(x*this.zoom + this.zoom / 2, y*this.zoom + this.zoom / 2, this.zoom / 2, 0, 2 * Math.PI, false);
		this.gc.fillStyle = color;
		this.gc.fill();
		this.gc.lineWidth = 5;
		this.gc.strokeStyle = '#003300';
		this.gc.stroke();
	}
	renderFoods(){
		this.foods.forEach((food)=>{
			this.renderFood(food.x, food.y, '1')
		})
	}
	renderPlayers(){
		this.players.forEach((player, playerItem)=>{
			if (this.isAte(player)) {
	    	this.addFood()
	    	player.snake.grow(player.snake.head.x, player.snake.head.y) 
	    }
			player.snake.render(this.width,this.height)
			player.snake.sBody.forEach((pob, i)=>{  
				this.renderBody(pob.x, pob.y, player.color)
			});
		})
	}
	render(){
		this.clearGameCanvas()
		this.renderFoods()
		this.renderPlayers()
	}

	run(){
		for(let i=0; i<10; i++){
			this.addFood()
		}
		setInterval( ()=>{
			this.render()
		}, 100)
	}
}

