leftWristX = 0;
leftWristY = 0;
function preload(){
    
}
function setup(){
    canvas=createCanvas(500, 400);
    canvas.position(600, 300);
    video=createCapture(VIDEO);
    video.hide(); 
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 500, 400);
    songStatus=false;
    fill("#bb860b");
    stroke("#bb860b");
    circle(leftWristX, leftWristY, 50);
}

function modelLoaded() {
    console.log('model is loaded model is loaded model is loaded model is loaded mod...');       
}
function gotPoses(results) {
   if (results.length>0) {
      
       console.log(results);
       leftWristX = results[0].pose.leftWrist.x;
       leftWristY = results[0].pose.leftWrist.y;
       
       console.log('leftX='+leftWristX+',Y'+leftWristY);
   } 
}