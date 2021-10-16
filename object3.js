var status = '';
var img = '';
var objects = [];

function preload() {
            img = loadImage('object3.png');
}

function setup() {
            canvas = createCanvas(400, 400);
            canvas.center();
            objectDetector = ml5.objectDetector('cocossd', modelLoaded);
            document.getElementById('status').innerText = 'Status : Detecting Objects';
}

function draw() {
            image(img, 0, 0, 400, 400);
            if (status !== '') {
                        for (var i = 0; i < objects.length; i++) {
                                    document.getElementById('status').innerText = 'Status : Objects Detected';
                                    document.getElementById('objects-detected').innerText = 'Number of objects detected : ' + objects.length;
                                    var confidenceLevel = floor(objects[i].confidence * 100);
                                    text(objects[i].label + " " + confidenceLevel + "%", objects[i].x + 15, objects[i].y + 15);
                                    noFill();
                                    stroke('#ff0000');
                                    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
                        }
            }
}

function modelLoaded() {
            console.log('Model Loaded!');
            status = true;
            objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
            if (error) {
                        console.log(error);
            } else {
                        console.log(results);
                        objects = results;
            }
}
