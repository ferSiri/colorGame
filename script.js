var colores=[]

function randomColor(){
	var random=''
	random+="rgb("+(parseInt((Math.random()*255)))+", "+(parseInt((Math.random()*255)))+", "+(parseInt((Math.random()*255)))+")"
	return random
}
function generateRandomColors(narr){
	for(var i=0;i<narr;i++){
	colores[i]=randomColor()
    }
	return colores
}
var numberOfSquares=6
colores=generateRandomColors(numberOfSquares)

var cuadrados =document.querySelectorAll('.square'), colorElegido=document.querySelector('#colorDisplay')
var pickedColor=pickColor(), message=document.querySelector('#message'), titulo=document.querySelector('#titulo') 
var but=document.querySelectorAll('.but')
var reset=document.querySelector('#reset')

function pickColor(){
	return colores[parseInt(Math.random()*colores.length)]
}

for(var i=0;i<cuadrados.length;i++){
	cuadrados[i].style.backgroundColor=colores[i]
}

colorElegido.textContent=pickedColor

function changeColors(co){
	for (var i=0;i<cuadrados.length;i++){
		cuadrados[i].style.backgroundColor=pickedColor
	}
}

for(var i=0;i<cuadrados.length;i++){
	cuadrados[i].addEventListener('click',function(e){
	var clickedColor=e.path["0"].style.backgroundColor
	console.log(clickedColor)
	if(clickedColor==pickedColor){
		message.textContent="Correct!"
		titulo.style.backgroundColor=clickedColor
		reset.textContent='Play again?'
		changeColors()
	}else{
		message.textContent="Try again"
		e.path["0"].style.backgroundColor='#232323'
	}
	}
	)
}

reset.addEventListener('click', function(){
	this.textContent='New Colors'
	message.textContent=''
	titulo.style.backgroundColor=''
	colores=[]
	colores=generateRandomColors(numberOfSquares)
	pickedColor=pickColor()
	for(var i=0; i<cuadrados.length;i++){
		if(colores[i]===undefined){
			cuadrados[i].style.backgroundColor='#232323'
		}else{
		cuadrados[i].style.backgroundColor=colores[i]
    	}
	}
	colorElegido.textContent=pickedColor
	console.log(colores)
})

for(var i=0; i<but.length;i++){
	but[i].addEventListener('click',function(){
		console.log(this)
		if(this.textContent==='hard'){
			this.style.fontWeight='700'
			but[1].style.fontWeight='normal'
			reset.textContent='New Colors'
			message.textContent=''
			titulo.style.backgroundColor=''
			colores=[]
			numberOfSquares=6
			colores=generateRandomColors(numberOfSquares)
			pickedColor=pickColor()
			for(var i=0;i<cuadrados.length;i++){
			cuadrados[i].style.backgroundColor=colores[i]
			}
			colorElegido.textContent=pickedColor
			}else if(this.textContent==='easy'){
				this.style.fontWeight='700'
				but[0].style.fontWeight='normal'
				reset.textContent='New Colors'
				message.textContent=''
				titulo.style.backgroundColor=''
				colores=[]
				numberOfSquares=3
				colores=generateRandomColors(numberOfSquares)
				pickedColor=pickColor()
				for(var i=0; i<cuadrados.length;i++){
					if(colores[i]===undefined){
						cuadrados[i].style.backgroundColor='#232323'
					}else{
					cuadrados[i].style.backgroundColor=colores[i]
			    }
			}
		}
	})
}


		