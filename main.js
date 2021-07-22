function preload() {
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
        console.log("Mouth x = " + results[0].pose.mouth.x);
        console.log("Mouth y = " + results[0].pose.mouth.y);
    }
}
