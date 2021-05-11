canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var colour = "black";
var width_of_line = 2;
var radius = 15;

canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e){
    colour = document.getElementById("colour").value;
    width_of_line = document.getElementById("width_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", mymouseup);

function mymouseup(e){
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", mymouseleave);

function mymouseleave(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", mymousemove);

function mymousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
}

function clear_area(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}