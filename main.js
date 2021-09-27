moustacheX=0;
moustacheY=0;
function preload(){
    moustache=loadImage('https://i.postimg.cc/gjmRCctV/tache.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        moustacheX=results[0].pose.nose.x;
        moustacheY=results[0].pose.nose.y;
        console.log("moustache x"+moustacheX);
        console.log("moustache y"+moustacheY);
    }
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function draw(){
    image(video,0,0,300,300);
    image(moustache,moustacheX,moustacheY,30,30);
}
function take_snapshot(){
    save('clown_nose_filter🐵🐵.png');
}