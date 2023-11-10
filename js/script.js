var v1 = v2 = r1 = r2 = rf = v0 = 0;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.strokeStyle = "black";
ctx.lineWidth = 2;


//horizontal
ctx.beginPath();
ctx.moveTo(250, 200);
ctx.lineTo(430, 200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(540, 235);
ctx.lineTo(600, 235);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250, 270);
ctx.lineTo(330, 270);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(369, 270);
ctx.lineTo(430, 270);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(490, 100);
ctx.lineTo(600, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(420, 100);
ctx.lineTo(330, 100);
ctx.stroke();

ctx.beginPath();  
ctx.moveTo(140, 270);
ctx.lineTo(180, 270);
ctx.stroke();

ctx.beginPath();  
ctx.moveTo(140, 200);
ctx.lineTo(180, 200);
ctx.stroke();


//opamp
ctx.beginPath();
ctx.moveTo(540, 235);
ctx.lineTo(430, 295);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(540, 235);
ctx.lineTo(430, 175);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(430, 175);
ctx.lineTo(430, 295);
ctx.stroke();

//vertical

ctx.beginPath();
ctx.moveTo(330, 100);
ctx.lineTo(330, 200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(330, 200);
ctx.lineTo(330, 270);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(600, 100);
ctx.lineTo(600, 235);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(369, 270);
ctx.lineTo(369, 309);
ctx.stroke();


//resistor1

ctx.beginPath();
ctx.moveTo(180, 201);
ctx.lineTo(190,188);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(190, 188);
ctx.lineTo(200,212);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 212);
ctx.lineTo(210,188);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(210, 188);
ctx.lineTo(220,212);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(220, 212);
ctx.lineTo(230,188);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(230, 188);
ctx.lineTo(240,212);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(240, 212);
ctx.lineTo(250,200);
ctx.stroke();

//resistor2

ctx.beginPath();
ctx.moveTo(180, 271);
ctx.lineTo(190,258);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(190, 258);
ctx.lineTo(200,282);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 282);
ctx.lineTo(210,258);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(210, 258);
ctx.lineTo(220,282);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(220, 282);
ctx.lineTo(230,258);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(230, 258);
ctx.lineTo(240,282);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(240, 282);
ctx.lineTo(250,270);
ctx.stroke();

//resistor3

ctx.beginPath();
ctx.moveTo(420, 101);
ctx.lineTo(430,88);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(430, 88);
ctx.lineTo(440,112);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(440, 112);
ctx.lineTo(450,88);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(450, 88);
ctx.lineTo(460,112);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(460, 112);
ctx.lineTo(470,88);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(470, 88);
ctx.lineTo(480,112);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(480, 112);
ctx.lineTo(490,100);
ctx.stroke();

//ground
ctx.beginPath();  
ctx.moveTo(385, 385);
ctx.lineTo(355, 385);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(380, 390);
ctx.lineTo(360, 390);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(375, 395);
ctx.lineTo(365, 395);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(369, 305);
ctx.lineTo(369, 385);
ctx.stroke();

// resistor 1 naming
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("r1", 185, 175)

// resistor 2 naming
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("r2", 185, 300)

// resistor 3 naming
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("r3", 435, 75)

//positive naming
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("+", 435, 200)

//negative naming
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("_", 440, 260)

ctx.beginPath();
ctx.arc(135, 200, 5, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(135, 270, 5, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

ctx.fillStyle="red"
ctx.beginPath();
ctx.arc(330, 200, 5, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

ctx.fillStyle = "black";
ctx.fillRect(60,225, 90, 30);
ctx.fillStyle = "white";
ctx.fillText("300 V",70,240)

ctx.fillStyle = "black";
ctx.fillRect(60,300, 90, 30);
ctx.fillStyle = "white";
ctx.fillText("300 V",70,315)

ctx.fillStyle = "black";
ctx.fillRect(220,155, 90, 30);

ctx.fillStyle = "black";
ctx.fillRect(220,155, 90, 30);

ctx.fillStyle = "black";
ctx.fillRect(220,285, 90, 30);

ctx.fillStyle = "black";
ctx.fillRect(470,55, 90, 30);

function resistance2Display(res){
  let text = `${res} Ω`;
  ctx.fillStyle = "white";
  ctx.fillRect(715,300,100,25);
  ctx.fillStyle = "black";
  ctx.font = "small-caps 20px Arial";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 730, 310)
  ctx.fillStyle = "black";
}

function resistance1Display(res){
  let text = `${res} Ω`;
  ctx.fillStyle = "white";
  ctx.fillRect(155,90,100,25);
  ctx.fillStyle = "black";
  ctx.font = "small-caps 20px Arial";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 158, 100)
  ctx.fillStyle = "black";
}

function resistancefDisplay(res){
  let text = `${res} Ω`;
  ctx.fillStyle = "white";
  ctx.fillRect(415,300,100,25);
  ctx.fillStyle = "black";
  ctx.font = "small-caps 20px Arial";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 418, 310);
  ctx.fillStyle = "black";
}

//Initialise system parameters here
function varinit() {
  varchange();
  //Variable slider and number input types
  $("#voltage1Slider").slider("value", 0.05); // slider initialisation : jQuery widget
  $("#voltage1Spinner").spinner("value", 0.05); // number initialisation : jQuery widget
  
  $("#voltage2Slider").slider("value", 0.05); // slider initialisation : jQuery widget
  $("#voltage2Spinner").spinner("value", 0.05);
  //resistor 1
  $("#resistor1Slider").slider("value", 0.01);
  $("#resistor1Spinner").spinner("value", 0.01);
  //resistor 2
  $("#resistor2Slider").slider("value", 0.01);
  $("#resistor2Spinner").spinner("value", 0.01);
  //resistor 3
  $("#resistorfSlider").slider("value", 0.01);
  $("#resistorfSpinner").spinner("value", 0.01);
  // $("#CsArea").spinner("value", 0.01);
  // $("#Ivalue").spinner("value", 0.01);

  $('#voltage1Slider').slider("disable"); 
  $('#voltage2Slider').slider("disable"); 
  $('#resistor1Slider').slider("disable"); 
  $('#resistor2Slider').slider("disable"); 
  $('#resistorfSlider').slider("disable"); 

  $("#add-to-table-btn").prop("disabled", true);
  $("#result-btn").prop("disabled", true);
  
}

function varchange() {
  $("#voltage1Slider").slider({ max: 30, min: 0, step: 1 });
  $("#voltage1Spinner").spinner({ max: 30, min: 0, step: 1 });

  $("#voltage1Slider").on("slide", function (e, ui) {
    $("#voltage1Spinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#voltage1Spinner").on("spin", function (e, ui) {
    $("#voltage1Slider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#voltage1Spinner").on("change", function () {
    varchange();
  });
 
  $("#voltage2Slider").slider({ max: 30, min: 0, step: 1 });
  $("#voltage2Spinner").spinner({ max: 30, min: 0, step: 1 });

  $("#voltage2Slider").on("slide", function (e, ui) {
    $("#voltage2Spinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#voltage2Spinner").on("spin", function (e, ui) {
    $("#voltage2Slider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#voltage2Spinner").on("change", function () {
    varchange();
  });

  // resistor 1

  $("#resistor1Slider").slider({ max: 200, min: 0, step: 1 });
  $("#resistor1Spinner").spinner({ max: 200, min: 0, step: 1 });

  $("#resistor1Slider").on("slide", function (e, ui) {
    $("#resistor1Spinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistor1Spinner").on("spin", function (e, ui) {
    $("#resistor1Slider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistor1Spinner").on("change", function () {
    varchange();
  });
  $("#resistor1Spinner").on("touch-start", function () {
    varchange();
  });

  // resistor 2
  $("#resistor2Slider").slider({ max: 200, min: 0, step: 1 });
  $("#resistor2Spinner").spinner({ max: 200, min: 0, step: 1 });

  $("#resistor2Slider").on("slide", function (e, ui) {
    $("#resistor1Spinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistor2Spinner").on("spin", function (e, ui) {
    $("#resistor2Slider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistor2Spinner").on("change", function () {
    varchange();
  });
  $("#resistor2Spinner").on("touch-start", function () {
    varchange();
  });

  // resistor 3
  $("#resistorfSlider").slider({ max: 200, min: 0, step: 1 });
  $("#resistorfSpinner").spinner({ max: 200, min: 0, step: 1 });

  $("#resistorfSlider").on("slide", function (e, ui) {
    $("#resistorfSpinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistorfSpinner").on("spin", function (e, ui) {
    $("#resistorfSlider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistorfSpinner").on("change", function () {
    varchange();
  });
  $("#resistorfSpinner").on("touch-start", function () {
    varchange();
  });
  //
  $("#CsArea").spinner({ max: 1, min: 0.01, step: 0.0001 });
  $("#Ivalue").spinner({ max: 1, min: 0.01, step: 0.0001 });
}
function varupdate() {
  $("#voltage1Spinner").spinner("value", $("#voltage1Slider").slider("value")); //updating slider location with change in spinner(debug)
  $("#voltage2Spinner").spinner("value", $("#voltage2Slider").slider("value"));
  $("#resistor1Spinner").spinner("value", $("#resistor1Slider").slider("value"));
  $("#resistor2Spinner").spinner("value", $("#resistor2Slider").slider("value"));
  $("#resistorfSpinner").spinner("value", $("#resistorfSlider").slider("value"));
  volt1 = $("#voltage1Spinner").spinner("value"); //Updating variables
  volt2 = $("#voltage2Spinner").spinner("value"); //Updating variables
  res1 = $("#resistor1Spinner").spinner("value");
  res2 = $("#resistor2Spinner").spinner("value");
  resf = $("#resistorfSpinner").spinner("value");

  resistance2Display(res2);
  resistance1Display(res1);
  resistancefDisplay(resf);

  v1Assign(volt1);
  v2Assign(volt2);
  let v0 = ((resf*volt1/res1)+(resf*volt2/res2));
  // v0Assign(v0);

  if (isNaN(v0) || !isFinite(v0)) {
    v0Assign(0)    
  }else{
    v0Assign(v0);
  }
  resis1Assign(res1);
  resis2Assign(res2);
  resisfAssign(resf);

// console.log(v0);
};

function v1Assign(volt) {
  v1 = volt;
  // console.log(v1);
}

function v2Assign(volt) {
  v2 = volt;
  // console.log(v1);
}

function resis1Assign(res) {
  r1 = res;
  // console.log(r1);
}

function resis2Assign(res) {
  r2 = res;
  // console.log(r2);
}

function resisfAssign(res) {
  rf = res;
  // console.log(rf);
}

function v0Assign(volt) {
  v0 = volt;
  console.log("v0",v0);
}


function startSimulation(){
  $('#voltage1Slider').slider("enable");
  $('#voltage2Slider').slider("enable");
  $('#resistor1Slider').slider("enable"); 
  $('#resistor2Slider').slider("enable"); 
  $('#resistorfSlider').slider("enable"); 
  $("#simulate-btn").prop("disabled", true);
  $("#add-to-table-btn").prop("disabled", false);
  $("#result-btn").prop("disabled", false);
};

function addtable(){
  var table=document.getElementById("mytable");
  var row=table.insertRow(-1);
  var cell1=row.insertCell(0);
  var cell2=row.insertCell(1);
  var cell3=row.insertCell(2);
  var cell4=row.insertCell(3);
  var cell5=row.insertCell(4);
  var cell6=row.insertCell(5);

  cell1.innerHTML= v1;
  cell2.innerHTML= v2;
  cell3.innerHTML= r1;
  cell4.innerHTML= r2;
  cell5.innerHTML= rf;
  // cell5.classList.add("column-font");
  cell6.innerHTML= v0;
}

function showResult() {
  document.getElementById('result-display-div').style.display = 'block'    
}


window.addEventListener("load", varinit);
