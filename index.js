
var ran= Math.floor(Math.random() *6)+1;
var img="dice" +ran +".png";
var im="images/" + img;
var img1= document.querySelectorAll("img")[0];
img1.setAttribute("src", im);

var ran2=Math.floor(Math.random()*6)+1;
var img2="dice"+ran2 +".png";
var im2="images/" +img2;
var img2= document.querySelectorAll("img")[1];
img2.setAttribute("src",im2);

if(ran>ran2){
	document.querySelector("h1").textContent="Player 1 is the winner";}
else if(ran<ran2){document.querySelector("h1").textContent="Player 2 is the winner";}
else{document.querySelector("h1").textContent="It's a draw";}

