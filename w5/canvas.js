/*
    CHRISTIAN VELASCO
    ID: 10159288 
*/

var canvas = document.querySelector('canvas'); 

var canvasWidth = innerWidth/2; 
var canvasHeight = innerHeight/2; 

canvas.width = canvasWidth; 
canvas.height = canvasHeight; 


var c = canvas.getContext('2d'); 

var circleArray = []; 
function Circle(x,y,dx,dy,r,color){

    this.r = r
    this.x = x; 
    this.y = y; 
    this.dx = dx; 
    this.dy = dy;
    this.color= color; 

    this.draw = () =>{
        c.fillStyle = this.color; 
        c.beginPath(); 
        c.arc(this.x, this.y,this.r,0, Math.PI * 2, false);
        c.strokeStyle = "black"; 
        c.stroke(); 
        c.closePath(); 
        c.fill(); 
    }
    this.update = () =>{
        if( (this.x <= this.r) || (this.x >= canvasWidth - this.r)){
            this.dx = -this.dx; 
        }
        if((this.y <= this.r)||(this.y >= canvasHeight - this.r)){
            this.dy = -this.dy; 
        }
        this.x+= this.dx; 
        this.y+= this.dy; 

        this.draw();

    }
}
createBalls = () => {
    var numOfballs = Math.random() * 20; 
    var x,y,dx,dy,r,g,b,radius, color; 
    for(var i=0; i<numOfballs; i++){
        radius = Math.random() * 50; 
        x = Math.random() * window.canvasWidth;  
        y = Math.random() * window.canvasHeight;
        dx = (Math.random() - 0.5) * 10; 
        dy = (Math.random() - 0.5) * 10; 
        r =  (Math.random() * 255 ) %255; 
        g =  (Math.random() * 255 )%255 ; 
        b =  (Math.random() * 255 ) %255 ; 
        color = "rgb("+r+","+g+","+b+")"; 
        

        radius = (this.r < 10) ?  10:radius; 
        x = (x <= radius) ? (radius + 30):x; 
        x = (x + radius >= canvasWidth) ? canvasWidth-(radius*2): x; 

        y = (y <= radius) ? (radius+30): y; 
        y = (y +radius >= canvasHeight) ? canvasHeight - (radius*2) : y; 

        circleArray.push(new Circle(x,y,dx,dy,radius,color));
    }
    return circleArray; 
}
animate = () => {
    
    requestAnimationFrame(animate); 

    c.clearRect(0,0,canvasWidth,canvasHeight);  
     
    circleArray.forEach(element => {
        element.update(); 
    });

}
startCanvas = () => {
    var circleArray = createBalls(); 
    animate(circleArray); 
}
startCanvas(); 