nose_x=0;
nose_y=0;

function preload(){
 img=loadImage("https://i.postimg.cc/jjqQtwmk/goggles-removebg-preview.png");
   
}
function setup(){
    canvas=createCanvas(500,500);
    canvas.position(500,160);
    video= createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function modelLoaded(){
    console.log("poseNet is initialized")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_x=results[0].pose.nose.x-70;
        nose_y=results[0].pose.nose.y-110;
       console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y ="+results[0].pose.nose.y);
    }
}
function draw(){
    image(video,0,0,649,480);
    image(img,nose_x,nose_y,170,170)
};
 function take_snapshot(){
     save('My_filter_image.png')
 }