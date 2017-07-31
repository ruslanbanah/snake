class Player{
	constructor(){
		this.score = 0
		this.snake = new Snake(0, 0)
		this.gamePad = new GamePad( { 37: 'left', 39: 'rigth', 40: 'down', 38: 'up' } )

		this.gamePad.left = this.snake.left
		this.gamePad.rigth = this.snake.rigth
		this.gamePad.up = this.snake.up
		this.gamePad.down = this.snake.down
	}
}
