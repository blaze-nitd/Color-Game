var colors=generateRandomColors(6)

var squares=document.querySelectorAll(".square")


var pickedColor=pickColor();
var colorDisplay=document.getElementById('colorDisplay')
var d=document.querySelector("#message");
var hpick=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
colorDisplay.textContent=pickedColor;
var easyBtn=document.querySelector("#easybtn");
var hardBtn=document.querySelector("#hardbtn");
var numcolor;
easyBtn.addEventListener("click",function(){
     easyBtn.classList.add("selected");
     hardBtn.classList.remove("selected");
     numcolor=3;
     colors=generateRandomColors(3);
     pickedColor=pickColor();
     colorDisplay.textContent=pickedColor;
     for(var i=0;i<squares.length;i++)
     {
     	if(colors[i])
     	{
          squares[i].style.background=colors[i];
     	}
     	else
     	{
     		squares[i].style.display="none";
     	}
     }

});
hardBtn.addEventListener("click",function(){
     hardBtn.classList.add("selected");
     easyBtn.classList.remove("selected");
     numcolor=6;
     colors=generateRandomColors(6);
     pickedColor=pickColor();
     colorDisplay.textContent=pickedColor;
     for(var i=0;i<squares.length;i++)
     {
          
          squares[i].style.background=colors[i];
     		squares[i].style.display="block";
     }
});
resetButton.addEventListener("click",function(){
	colors=generateRandomColors(numcolor);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}
	hpick.style.background="#232323";
});
for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor){
			d.textContent="Correct";
			changeColors(clickedColor);
			hpick.style.backgroundColor=clickedColor;
			resetButton.textContent="Play Again"

		}
		else
		{
			this.style.backgroundColor="#232323";
			d.textContent="Try Again";

		}
	});
}

function changeColors(color)
{
	for(var j=0;j< squares.length;j++)
		squares[j].style.backgroundColor=color;
}


function pickColor(){
	
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
       arr.push(generateColor());
	}
	return arr;
}

function generateColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
    var s="rgb("+r+", "+g+", "+b+")";
    return s;

}