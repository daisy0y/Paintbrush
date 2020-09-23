let painting = false;
let filling = false;



const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.querySelectorAll(".controls_color");
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');
const save = document.getElementById('jsSave');

// default value
const DEFAULT_COLOR = "#2c2c2c";
const CANVAS_WIDTH = "700";
const CANVAS_HEIGHT = "700";

canvas.width = CANVAS_WIDTH;   // 캔버스의 크기를 지정 해줘야 한다.
canvas.height = CANVAS_HEIGHT;

ctx.strokeStyle = DEFAULT_COLOR; 
ctx.fillStyle = DEFAULT_COLOR;
ctx.lineWidth = 2.5;


function stopPainting(){
    painting=false;
}

function onMouseMove(e){
    const x = e.offsetX
    const y = e.offsetY
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }

}

function startPainting(){
    painting = true;

}

function changeColor(e){
    const color = e.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function rangeControl(e){
    const rangeSize = e.target.value;
    ctx.lineWidth = rangeSize;

}

function modeControl(){
    if(filling){
        filling = false;
        mode.innerText="채우기"
      
    }else{
        filling = true;
        mode.innerText="그리기"
        canvasClick();
    }
}

function canvasClick(){
    if(filling){
    ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)

}}

function handleCM(e){
    e.preventDefault();
    console.log(e)
}

function saveClick(){
    const image = canvas.toDataURL()
    const link = document.createElement("a");
    link.href= image;
    link.download = "image";
    link.click();
}


if(canvas){
    canvas.addEventListener('mousemove',onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener('mouseup',stopPainting);
    canvas.addEventListener('mouseleave',stopPainting);
    canvas.addEventListener('click',canvasClick);
    canvas.addEventListener('contextmenu',handleCM)

}


Array.from(colors).forEach(color => color.addEventListener('click',changeColor))

if(range){
    range.addEventListener('input',rangeControl)
}

if(mode){
    mode.addEventListener('click',modeControl)
}

if(save){
    save.addEventListener('click',saveClick)
}