//Возвращает случайное число.
function rand (min, max) {k = Math.floor(Math.random() * (max - min) + min); return (Math.round( k / s) * s);}
//Функция для создания нового яблока.
function newA () {a = [rand(0, innerWidth),rand(0, innerHeight)];}
//Функция для создания тела змейки из одного элемента.
function newB () {sBody = [{x: 0,y: 0}];}

var gP = document.getElementById('gP'), //Достаем canvas.
	//Получаем "контекст" (методы для рисования в canvas).
        g = gP.getContext('2d'), 
	sBody = null, //Тело змейки, мы потом его создадим.
	d = 1, //Направление змейки 1 - dправо, 2 - вниз 3 - влево, 4 - вверх.
	a = null, //Яблоко, массив, 0 элемент - x, 1 элемент - y.
	s = 30; newB(); newA(); //Создаем змейку.
	frmae = 0;
gP.width = innerWidth; //Сохраняем четкость изображения, выставив полную ширину экрана.
gP.height = innerHeight; //То же самое, но только с высотой.

setInterval(function(){
	g.clearRect(0,0,gP.width,gP.height); //Очищаем старое.
	g.fillStyle = "red"; //Даем красный цвет для рисования яблока.
	g.fillRect(...a, s, s); //Рисуем яблоко на холсте 30x30 с координатами a[0] и a[1].
	g.fillStyle = "#000"; //А теперь черный цвет для змейки.
	console.log('Frame: ', frmae++)
	sBody.forEach(function(el, i){
   
    //Проверка на то, что яблоко ушло за границы окна, мы его не можем увидеть.
    if (a[0] + s >= gP.width || a[1] + s >= gP.height) newA();

    //Проверка на столкновение.
    var last = sBody.length - 1;
    if ( el.x == sBody[last].x && el.y == sBody[last].y && i < last) { 
        sBody.splice(0,last); //Стираем тело змейки.
        sBody = [{x:0,y:0}]; //Создаем его заново.
        d = 1;  //Меняем направление на правую сторону.
	    }

	});

	//+
	// Сохраняем хвост и голову змейки.
	var m = sBody[0], 
		f = {x: m.x,y: m.y}, 
		l = sBody[sBody.length - 1];

	/*

	    Далее мы создаем тот самый эффект движения.
	    Напомню, что мы меняем координаты лишь хвоста, оставляя неподвижным 
	    остальную часть тела. 

	    Делается это путем проверки направления змейки (изначально -  это 1, - право), 
	    а затем уже изменяем координаты. Соответственно, комментарии все описывают.

	*/


	//Если направление вправо, то тогда сохраняем Y, но меняем X на + s.
	if (d == 1)  f.x = l.x + s, f.y = Math.round(l.y / s) * s;
	// Если направление вниз, то сохраняем X, но меняем Y на + s.
	if (d == 2) f.y = l.y + s, f.x = Math.round(l.x / s) * s;
	//Если направление влево, то сохраняем Y, но меняем X на -s.
	if (d == 3) f.x = l.x - s, f.y = Math.round(l.y / s) * s;
	//Если направление вверх, то сохраняем X, Но меняем Y на -s.
	if (d == 4) f.y = l.y - s, f.x = Math.round(l.x / s) * s;


	sBody.push(f); //Добавляем хвост после головы с новыми координатами.
	sBody.splice(0,1); //Удаляем хвост.

	//Отрисовываем каждый элемент змейки.
	sBody.forEach(function(pob, i){
	    //Если мы двигаемся вправо, то если позиция элемента по X больше, чем ширина экрана, то ее надо обнулить
	    if (d == 1) if (pob.x > Math.round(gP.width / s) * s) pob.x = 0;
	    //Если мы двигаемся вниз, то если позиция элемента по X больше, чем высота экрана, то ее надо обнулить.
	    if (d == 2) if (pob.y > Math.round(gP.height / s) * s) pob.y = 0;
	   //Если мы двигаемся влево, и позиция по X меньше нуля, то мы ставим элемент в самый конец экрана (его ширина).
	    if (d == 3) if (pob.x < 0) pob.x = Math.round(gP.width / s) * s;
	    //Если мы двигаемся вверх, и позиция по Y меньше нуля, то мы ставим элемент в самый низ экрана (его высоту).
	    if (d == 4) if (pob.y < 0) pob.y = Math.round(gP.height / s) * s;
	   
	    //И тут же проверка на то, что змейка съела яблоко.
	    if (pob.x == a[0] && pob.y == a[1]) newA(), sBody.unshift({x: f.x - s, y:l.y})
	    
	    //А теперь рисуем элемент змейки.
	    // g.fillRect(pob.x, pob.y, s, s);		

		g.beginPath();
		g.arc(pob.x + s / 2, pob.y + s / 2, s / 2, 0, 2 * Math.PI, false);
		g.fillStyle = 'green';
		g.fill();
		g.lineWidth = 5;
		g.strokeStyle = '#003300';
		g.stroke();
	});

	
}, 60);

onkeydown = function (e) {
	var k = e.keyCode;
	if ([38,39,40,37].indexOf(k) >= 0) e.preventDefault();
	if (k == 39 && d != 3) d = 1; //Вправо
	if (k == 40 && d != 4) d = 2; //Вниз
	if (k == 37 && d != 1) d = 3; //Влево
	if (k == 38 && d != 2) d = 4; //Вверх
	console.log('Button press: ', k, d)
};