canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
lineWidth = 2;
ctx.beginPath();
ctx.strokeStyle = color;
ctx.arc(200,200,40,0,2 * Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
    lineWidth = document.getElementById("lineWidth").value; 
    console.log(color);
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    console.log("X = " + mouse_x + "Y = " + mouse_y);
    circle(mouse_x, mouse_y);
}
function circle(mouse_x, mouse_y){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.arc (mouse_x, mouse_y, 40, 0, 2 *Math.PI);
    ctx.stroke();
}
function clearArea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
