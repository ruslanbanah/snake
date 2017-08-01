class Player{
	constructor(params){
		this.name = 'noName'
		this.padMap = { 37: 'left', 39: 'rigth', 40: 'down', 38: 'up' }
		this.color = 'green'

		Object.assign(this, params)
		this.score = 0
		this.color = params.color
		this.snake = new Snake(0, 0)
		this.gamePad = new GamePad( this.padMap )
		this.gamePad.left = ()=>{ this.snake.left() }
		this.gamePad.rigth = ()=>{ this.snake.rigth() }
		this.gamePad.up = ()=>{ this.snake.up() }
		this.gamePad.down = ()=>{ this.snake.down() }
	}
}
