canvas=document.getElementById('myCanvas');
ctx= canvas.getContext("2d");

nasa_mars_imgs_array= ["nasa_img_1.jpg","nasa_img_2.jpg","nasa_img_3.jpg","nasa_img_4.jpg"];
var random_num=Math.floor(Math.random()*4);
console.log(random_num);

rover_width=100;
rover_height=90;

backGround_image=nasa_mars_imgs_array[random_num];
rover_image="rover.png";

rover_x=10;
rover_y=10;

function add() { 
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src =backGround_image ;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;

}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

 function uploadrover() {
     ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
 }

 window.addEventListener("keydown", my_keydown);

 function my_keydown(e)
 {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
     {
      up();
        console.log("keyPressed is up");
    }

    if(keyPressed == '40');
     {
        down();
          console.log("keyPressed is down");
      }
   
      if(keyPressed == '37')
      {
         left();
           console.log("keyPressed is left");
       }
       if(keyPressed == '39')
       {
          right();
            console.log("keyPressed is right");
        }

 }


function up(){
if(rover_y>=0 ){
    rover_y = rover_y-10;
    console.log("When up is pressed : x = "+rover_x + "Y =" +rover_y );

    uploadBackground();
    uploadrover();
}
}

function down(){
if(rover_y<=500){
    rover_y = rover_y+10;
    console.log("When down is pressed : x = "+rover_x + "Y =" +rover_y );

    
    uploadBackground();
    uploadrover();
}



}
function left(){
if(rover_x>=0){
    rover_x= rover_x-10;
    console.log("When left is pressed : x = "+rover_x + "Y =" +rover_y );

    uploadBackground();
    uploadrover();

}
}

function right(){
    if(rover_x<=700){
        rover_x= rover_x+10;
        console.log("When right is pressed : x = "+rover_x + "Y =" +rover_y );
    
        uploadBackground();
        uploadrover();
    }
}