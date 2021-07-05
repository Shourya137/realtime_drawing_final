NoseX=0;
NoseY=0;
difference=0;
leftWristx=0;
rightWristx=0;


function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas= createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('Posnet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
        {
         console.log(results);
         NoseX=results[0].pose.nose.x;
         NoseY=results[0].pose.nose.y;
         console.log("NoseX= "+NoseX +" NoseY = "+NoseY);
         leftWristx=results[0].pose.leftWrist.x;
         rightWristx=results[0].pose.rightWrist.x;
        difference=floor(leftWristx-rightWristx);
        console.log("rightWristx= "+rightWristx+ " leftWristx = "+leftWristx+" difference = "+difference);
        }
}


function draw(){
    background("#969A97");
    document.getElementById("square_side").innerHTML="width height of the square will be "+difference+" px";
    fill("#ff0000");
    text('Shourya',50,400);
    textSize(difference);
}