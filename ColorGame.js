var mod = 6;
var colors = generateRandomColors(mod);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var ColorDisplay = document.getElementById("ColorDisplay");
var messageDisplay = document.querySelector("#message"); 
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click" , function(){	
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  mod =3;
  colors = generateRandomColors(mod);
  pickedColor = pickColor();
  ColorDisplay.textContent = pickedColor;


  for(var i=0; i<squares.length ; i++)
  {
  	if(colors[i])
  	{
  		squares[i].style.backgroundColor = colors[i];
  	}
  	else{
  		squares[i].style.display = "none";
  	}
  }
});

hardBtn.addEventListener("click" , function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  mod = 6;
    colors = generateRandomColors(mod);
  pickedColor = pickColor();
  ColorDisplay.textContent = pickedColor;


  for(var i=0; i<squares.length ; i++)
  {
  	
  		squares[i].style.backgroundColor = colors[i];
  		squares[i].style.display = "block";
  	}
});

resetBtn.addEventListener("click", function(){
	h1.style.backgroundColor= "steelblue";
   colors = generateRandomColors(mod);

	for(var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
 }
	 ColorDisplay.textContent = pickedColor;

	pickedColor = pickColor();

	ColorDisplay.textContent = pickedColor;

 	
});



ColorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;

      if (clickedColor === pickedColor){
      	messageDisplay.textContent = "correct";
      	changeColors(pickedColor);
      	h1.style.backgroundColor= pickedColor;
      	resetBtn.textContent = "Play Again"
      } else {
      	this.style.backgroundColor = "#232323";
      	messageDisplay.textContent = "Try Again";
      }
});
}

function changeColors(color){

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor= color;
	}
}

function pickColor(){
	var random =Math.floor(Math.random() * colors.length);
	return colors[random];
	}

	function generateRandomColors(num){
		var arr = []

		for(var i = 0; i < num; i++) {
			arr[i]=randomColor()
		}
		return arr;
	}

function randomColor(){

	//For Random Red
	var red = Math.floor(Math.random()* 256);
    //For Random Green
	var green = Math.floor(Math.random()* 256);
	//For Random blue
	var blue = Math.floor(Math.random()* 256);

	return "rgb("+red +", "+green +", "+ blue +")";
}
