var status = '';
var img = '';
var objects = [];

function preload() {
            img = loadImage('object1.png');
}

function setup() {
            canvas = createCanvas(400 , 400);
            canvas.center();
            objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
            document.getElementById('status').innerText = 'Status : Detecting Objects';
}

function draw() {
            image(img , 0 , 0 ,400 , 400);
}

function modelLoaded() {
            console.log('Model Loaded!');
            status = true;
            objectDetector.detect(img , gotResults);
}

function gotResults(error , results) {
            if(error){
                        console.log(error);
            }else{
                        console.log(results);
                        objects = results;
            }
}