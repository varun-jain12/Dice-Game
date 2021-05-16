var rand1= Math.floor((Math.random() * 6) + 1);
var rand2 = Math.floor((Math.random() * 6) + 1);
var randomdice1 = "/images/dice"+ rand1 + ".png";
var randomdice2 = "/images/dice"+ rand2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomdice1 );
document.querySelectorAll("img")[1].setAttribute("src", randomdice2 );


function refreshPage()
   {
        location.reload();
    }				

 
if(rand1 > rand2){
     document.querySelector(".answer").innerHTML="🚩 Player 1 wins";
 }
 else if(rand1 < rand2){
     document.querySelector(".answer").innerHTML="Player 2 wins 🚩";
}
else {
    document.querySelector(".answer").innerHTML="Draw";
}