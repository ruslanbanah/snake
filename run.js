
window.game = new Game(document.getElementById('gP'))
window.game.addPlayer({ 
	name:' boom', 
	color: 'yellow', 
	padMap: { 37: 'left', 39: 'rigth', 40: 'down', 38: 'up' }
})
window.game.addPlayer({ 
	name:' boom', 
	color: 'green', 
	padMap: { 65: 'left', 68: 'rigth', 83: 'down', 87: 'up' }
})
window.game.run()

