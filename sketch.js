let video;
let classifier;//分類器
let label = 'waiting...'
let url = 'https://teachablemachine.withgoogle.com/models/mhXs2Biku/'
let something = ''
let pic = [];


// STEP 1: Load the model!
function preload(){
  classifier = ml5.imageClassifier(url + 'model.json');
  
  pic[1] = loadImage('old_flower.gif');
  pic[2] = loadImage('C.png');
  pic[3] = loadImage('maja.png');
  pic[4] = loadImage('1.gif');
  pic[5] = loadImage('BG1.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // STEP 2-2: Start classifying
  video = createCapture(VIDEO);
  video.size(720,540);
  video.hide();
  classifyVideo();
}

// STEP 2-1 classify!
function classifyVideo(){
  classifier.classify(video, gotResults);

}//classifier的分類動作

function draw() {
  background(193,231,253);
  image(video, windowWidth/2-250,windowHeight/2-270,720,540);
  image(pic[5],windowWidth/2-275,windowHeight/2-295,781,601);

  textSize(32);
  textAlign(CENTER,CENTER);
  fill(255);
  text(something, width/2, height-30 );
  
  if(label == 'flower'){
  
  }else if(label == 'tree'){
   image(pic[1], windowWidth/2-600, windowHeight/3,450,450)
  }else if(label == 'nothing'){
   image(pic[3], windowWidth/2-700, windowHeight/2,350,350)
   image(pic[2], windowWidth/2-400, windowHeight/2-30)
  }
  }

// STEP 3: Get the classification!
function gotResults(error,results){
  if(error){
    console.error(error);
    return
  }
  label = results[0].label;
  classifyVideo();
}
