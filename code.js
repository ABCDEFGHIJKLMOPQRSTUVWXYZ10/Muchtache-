function preloaded(){

}
function setup(){
    Canvas.createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modleLoaded);
    poseNet.on('pose', gotPoses);
}
function modleLoaded(){
    console.log('PoseNet Is Initialized');
}
function draw(){
    image(video, 0, 0, 300, 300);
}
function take_snapshot(){
    save("myFilterImage.png");
}