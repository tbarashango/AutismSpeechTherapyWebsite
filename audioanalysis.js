function playMyAudio(){
  document.getElementById("myAudio").play();
}

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var imageStart = (getRandomNumber(1,40)).toString();
document.getElementById(imageStart).className = 'imageShown';
var score = 0;
var gameSection = 0;
var counter = 1;
var shown = [imageStart];
var done = false;

function newImage(){
  if(done){
    return;
  }
  for(var i = 1; i <= 40; i++)
  {
    var item = i.toString();
    document.getElementById(item).className = 'imageHidden';
  }
  check = true;
  if(counter < 40){
    while(check == true){
    check = false;
    var image = (getRandomNumber(1, 40)).toString();
      for(i = 0; i < counter; i++){
        if(image == shown[i]){
        check = true;
        }
      }
    }
    document.getElementById(image).className = 'imageShown';
    shown[counter] = image;
    counter++;
    score++;
    document.getElementById("Score").innerHTML = "YOUR SCORE: " + score;
  }
  else{
    score++;
    document.getElementById("Score").innerHTML = "YOUR SCORE: " + score;
    document.getElementById("41").className = 'imageShown';
    done = true;
    document.getElementById("feel").className = 'imageHidden';
  }
}