let painting = false;

const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;
canvas.width = 700;   // 캔버스의 크기를 지정 해줘야 한다.
canvas.height = 700;

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

function onMouseDown(e){
    painting = true;
}

if(canvas){
    canvas.addEventListener('mousemove',onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener('mouseup',stopPainting);
    canvas.addEventListener('mouseleave',stopPainting);
}