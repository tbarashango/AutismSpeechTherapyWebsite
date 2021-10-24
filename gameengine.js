/*function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}*/

//var imageStart = (getRandomNumber(1,10)).toString();
//document.getElementById("7").className = 'imageShown';
/*var score = 0;
var gameSection = 0;
var counter = 1;
var shown = [imageStart];

function newImage(){
  for(var i = 1; i <= 10; i++)
  {
    var item = i.toString();
    document.getElementById(item).className = 'imageHidden';
  }
  check = true;
  if(counter < 10){
    while(check == true){
    check = false;
    var image = (getRandomNumber(gameSection*10+1, gameSection*10 + 10)).toString();
      for(i = 0; i < counter; i++){
        if(image == shown[i]){
        check = true;
        }
      }
    }
    counter++;
    document.getElementById(image).className = 'imageShown';
    shown[counter-1] = image;
    score++;
    document.getElementById("Score").innerHTML = "YOUR SCORE: " + score;
  }
  else{
    counter = 1;
    gameSection++;
  }
}
