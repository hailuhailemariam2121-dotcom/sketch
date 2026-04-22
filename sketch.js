let y = 200;

let speed = 2;

function setup() {
  
  createCanvas(400, 400);
}
function draw()
{
  background(22,120,25); 
  
  
  
  y = y + speed;
  
  if( y >= 300 || y <= 100 ) {
    speed = -speed
  }
  
fill(200, 30, 20);
  ellipse(y, 283, 283, 283);
  fill(0, 45,56);

ellipse(y - 50, 210, 100, 70);
ellipse(y + 50, 210, 100, 70); 
  
 fill(34, 34, 255);
  
ellipse(y, 150, 50, 30);

}