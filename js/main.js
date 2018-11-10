
var paintBrushProperties ={
    color: "black",
    type: "0px",
    height: "4px",
    width: "4px"

};


//handling of arenaSize
//This part works
var arena = document.getElementById("drawArea");
var arenaButton = document.getElementById('arenaSize');
arena.style.height = arenaButton.value;
arena.style.width = arenaButton.value;

arenaButton.addEventListener('keypress', changeArenaSize);

function changeArenaSize(event) {
    if (event.keyCode == 13){
        var arena = document.getElementById("drawArea");
        arena.style.height = ((event.target.value)) + "px";
        arena.style.width = ((event.target.value)) + "px";    
    }
    
}
//This part works
//handling of arenaSize


//handling of canvas reset
//this part works
var resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetFunction);

function resetFunction() {
    var points = document.querySelectorAll('#drawArea > div');

    for (var i = 0; i < points.length; i++) {
        points[i].remove();
    }
};
//handling of canvas reset
//this part works


//handling of type square/circle variable
//This part works

var squareButton = document.getElementById("square");
var circleButton = document.getElementById("circle");
squareButton.addEventListener('click', changeBrushType);
circleButton.addEventListener('click', changeBrushType);

function changeBrushType(event) {
    
    if (typeof event === "undefined") {
        paintBrushProperties.type = "0px";
    } else {
        if (event.currentTarget.value === "square") {
            paintBrushProperties.type="0px";
        } else {
            paintBrushProperties.type ="100%";

        }
    }

}

var borderRadius = changeBrushType(event);
console.log(borderRadius);

//This part works
//end of handling of type square/circle variable

//handling of eraser 
var eraserButton = document.getElementById('eraser');
eraserButton.addEventListener('click', makeWhite)
function makeWhite(){
    paintBrushProperties.color= eraserButton.value;
}
    

//This part works
//End of color handling variable

//handling of color variable
//This part works
var colorButtons = document.querySelectorAll(".colors-container .color-circle");
console.log(colorButtons[0]);
for (var i = 0; i < colorButtons.length; i++) {
    colorButtons[i].addEventListener('click', changeColor);
}

var activeColor = "black";
function changeColor(event) {
    if (typeof event === "undefined") {
        paintBrushProperties.color = "black";
    } else {
        var activeColor = event.target.style.backgroundColor;
        if (activeColor === "") {
            paintBrushProperties.color = "black";
        } else {
            paintBrushProperties.color = activeColor;
        }
    }
};
activeColor = changeColor();
console.log(activeColor);

//This part works
//End of color handling variable



//handling of font pixel width and height variable
//This part works

var increaseButton = document.getElementById("plus");
var decreaseButton = document.getElementById("minus");

increaseButton.addEventListener('click', changeBrushSize);
decreaseButton.addEventListener('click', changeBrushSize);

var currentSize = 3;

function changeBrushSize(event) {

    if (event.target.value === "+") {
        currentSize = currentSize + 3;
        paintBrushProperties.height= currentSize+"px";
        paintBrushProperties.width= currentSize+"px";
    } else {
        currentSize = currentSize - 3;
        paintBrushProperties.height= currentSize+"px";
        paintBrushProperties.width= currentSize+"px";
    }

};

var heightPixel = currentSize + "px";
var widthPixel = currentSize + "px";


//This part works
//End of handling of font pixel width and height variable

arena.addEventListener("mousedown", function(){
    document.getElementById("drawArea").addEventListener("mousemove", getPos);
});



function getPos(event) {


    var point = document.createElement('div');

    var drawArea = document.querySelector('#drawArea');
    drawArea.appendChild(point);

    point.style.height = paintBrushProperties.height;
    point.style.width = paintBrushProperties.width;
    point.style.borderRadius = paintBrushProperties.type;
    point.style.backgroundColor = paintBrushProperties.color;

    var xVar = event.clientX;
    var yVar = event.clientY;
    console.log(`${xVar}, ${yVar}`);
    point.style.position = "absolute";

    var paintArea = document.getElementById("drawArea");
    var canvasX = paintArea.getBoundingClientRect().x;
    var canvasY = paintArea.getBoundingClientRect().y;
    point.style.left = (xVar- canvasX) + 'px';
    point.style.top = (yVar - canvasY) + 'px';

}



document.getElementById("drawArea").addEventListener("mouseup", offFunction);
function offFunction() {
    var paintArea = document.getElementById("drawArea");
    paintArea.removeEventListener("mousemove", getPos);
}



var colorPalletSubmit = document.getElementById("pallet");
colorPalletSubmit.addEventListener('click', colorPalletChange);

function colorPalletChange(){
    paintBrushProperties.color = "#"+document.getElementById('palletColor').value;
    
}






// var canvasX = paintarea.getBoundingClientRect().x.value;
// var canvasY = paintarea.getBoundingClientRect().y.value;
