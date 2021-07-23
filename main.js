noseX = 0;
noseY = 0;

function preload() {
    lips = loadImage('https://i.postimg.cc/bwX5KvtQ/lips.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(lips, noseX, noseY, 25, 20);
}

function take_snapshot() {
    save('lipstickFilter.png');
}

function modelLoaded() {
    console.log('PoseNet is initialized!');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 12;
        noseY = results[0].pose.nose.y + 13;
        console.log("Nose x = " + results[0].pose.nose.x);
        console.log("Nose y = " + results[0].pose.nose.y);
    }
}
