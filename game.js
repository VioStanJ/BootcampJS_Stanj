var val = 0;

var play = document.getElementById('play');
var rond = document.getElementById('rond');
var score = document.getElementById('score');
var stop = document.getElementById('stop');
var pause = document.getElementById('pause');
var s1 = document.getElementById('s1');
var p1 = document.getElementById('p1');
var splash = document.getElementById('splash');

rond.style.display = 'none';

stop.disabled = true;
pause.disabled = true;

var tim,inter,tcach,taff;

function playText(){
	splash.style.display = 'block';
	p1.innerHTML = 'Start On ';
	var i = 2;
	s1.innerHTML = '1';
	tim = setInterval(function(){
		s1.innerHTML = i;
		i++;
		if(i == 5){
			splash.style.display = 'none';
			clearInterval(tim);
		}
	},1000);
}

play.addEventListener('click',function(e){
	playText();
	play.disabled = true;
	pause.disabled = false;
	stop.disabled = false;
	inter = setInterval(function(){
		affiche();
	},3000);
});

pause.addEventListener('click',function(e){
	play.disabled = false;
	pause.disabled = true;
	stop.disabled = false;
	pauseApp();
});

stop.addEventListener('click',function(e){
	pause.disabled = true;
	stop.disabled = true;
	stopApp();
});

rond.addEventListener('click',function(e){
	val  += 1;
	score.innerHTML = val;	
});

function stopApp(){
	splash.style.display = 'block';
	p1.innerHTML = 'Game Over !';
	s1.innerHTML = 'Score : '+val;
	clearInterval(inter);
	clearTimeout(tcach);
	clearTimeout(taff);
	val = 0;
	score.innerHTML = val;
	rond.style.display = 'none';
	clearInterval(tim);
}

function pauseApp(){
	splash.style.display = 'block';
	p1.innerHTML = 'Replay The Game !';
	s1.innerHTML = 'Score : '+val;
	clearInterval(inter);
	clearTimeout(tcach);
	clearTimeout(taff);
	score.innerHTML = val;
	cacher();
}

function affiche(){
	getPosition();
	tcach = setTimeout(function(){
	rond.style.display = 'block';					
	},1000);
	cacher();
}

function cacher(){
	taff = setTimeout(function(){
		rond.style.display = 'none';					
	},2000);
}

function getPosition(){
	var x = Math.round(Math.random() * (500));
	var y = Math.round(Math.random() * (500));
	rond.style.top = x+'px';
	rond.style.left = y+'px';
	if( x > 460 || y > 460){
		getPosition();
	}
}