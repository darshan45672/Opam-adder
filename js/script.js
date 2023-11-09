var voltage = i1 = i2 = i3 = 0;

var rowCount = 0;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


function roundRect(x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.arcTo(x + width, y, x + width, y + radius, radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
  ctx.lineTo(x + radius, y + height);
  ctx.arcTo(x, y + height, x, y + height - radius, radius);
  ctx.lineTo(x, y + radius);
  ctx.arcTo(x, y, x + radius, y, radius);
  ctx.closePath();
}

ctx.strokeStyle = "black";
ctx.lineWidth = 2;

// GND terminal naming
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("GND", 410, 415)

// gnd terminal
ctx.fillStyle = "black";
roundRect(395, 425, 10, 10, 6);
ctx.fill();

// gnd terminal
ctx.fillStyle = "black";
roundRect(395, 58, 10, 10, 6);
ctx.fill();



// Vertical lines
ctx.strokeStyle = 'yellow';
ctx.beginPath();
ctx.moveTo(400, 68);
ctx.lineTo(400, 171);
ctx.stroke();

// Draw the arrow moving inward
ctx.beginPath();
ctx.moveTo(400, 95); 
ctx.lineTo(395, 90); 
ctx.lineTo(405, 90); 
ctx.lineTo(400, 95); 
ctx.stroke();


ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.moveTo(400, 172);
ctx.lineTo(400, 271);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 62);
ctx.lineTo(100, 235);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 345);
ctx.lineTo(400, 430);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(700, 62);
ctx.lineTo(700, 271);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(700, 345);
ctx.lineTo(700, 430);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 265);
ctx.lineTo(100, 430);
ctx.stroke();



//lines details
ctx.strokeStyle = '#4efd54';
ctx.beginPath();
ctx.moveTo(739, 402);
ctx.lineTo(785, 402);
ctx.stroke();

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(739, 432);
ctx.lineTo(785, 432);
ctx.stroke();

ctx.strokeStyle = 'yellow';
ctx.beginPath();
ctx.moveTo(739, 462);
ctx.lineTo(785, 462);
ctx.stroke();

//naming

ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("I1", 790, 400)

ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("I2", 790, 430)

ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("I3", 790, 460)

//border
ctx.strokeStyle = 'black';
ctx.lineWidth =1;
ctx.beginPath();
ctx.moveTo(725, 372);
ctx.lineTo(725, 500);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(724, 372);
ctx.lineTo(850, 372);
ctx.stroke();


// Horizontal lines
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.moveTo(100, 430);
ctx.lineTo(700, 430);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 62);
ctx.lineTo(150, 62);
ctx.stroke();

ctx.strokeStyle = '#4efd54';
ctx.beginPath();
ctx.moveTo(299, 62);
ctx.lineTo(395, 62);
ctx.stroke();

// Draw the arrow slightly backward
ctx.beginPath();
ctx.moveTo(382, 62); 
ctx.lineTo(377, 57);
ctx.lineTo(377, 67); 
ctx.lineTo(382, 62); 
ctx.stroke();

ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.moveTo(220, 62);
ctx.lineTo(309, 62);
ctx.stroke();

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(405, 62);
ctx.lineTo(530, 62);
ctx.stroke();


 // Draw the  arrow
ctx.beginPath();
ctx.moveTo(515, 62); 
ctx.lineTo(510, 58); 
ctx.lineTo(510, 66); 
ctx.lineTo(515, 62); 
ctx.stroke();

ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(570, 62);
ctx.lineTo(701, 62);
ctx.stroke();

//power supply
ctx.beginPath();
ctx.moveTo(75, 235);
ctx.lineTo(125, 235);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(85, 245);
ctx.lineTo(115, 245);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(75, 255);
ctx.lineTo(125, 255);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(85, 265);
ctx.lineTo(115, 265);
ctx.stroke();

// power supply  naming
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("+ve", 55, 210)

// negeative terminal naming
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("-ve", 60, 290)

// battery naming
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("Battery", 140, 250)

// ctx.beginPath();
// ctx.moveTo(690, 340);
// ctx.lineTo(700, 346);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(690, 340);
// ctx.lineTo(710, 328);
// ctx.stroke();
      
// ctx.beginPath();
// ctx.moveTo(710, 328);
// ctx.lineTo(690, 316);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(690, 316);
// ctx.lineTo(710, 302);
// ctx.stroke();
      
// ctx.beginPath();
// ctx.moveTo(710, 302);
// ctx.lineTo(690, 290);
// ctx.stroke();
      
// ctx.beginPath();
// ctx.moveTo(690, 290);
// ctx.lineTo(710, 278);
// ctx.stroke();
      
// ctx.beginPath();
// ctx.moveTo(710, 278);
// ctx.lineTo(698, 271);
// ctx.stroke();

// resistor 1

ctx.beginPath();
ctx.moveTo(150, 62);
ctx.lineTo(160,48);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(160, 48);
ctx.lineTo(170,72);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(170, 72);
ctx.lineTo(180,48);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(180, 48);
ctx.lineTo(190,72);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(190, 72);
ctx.lineTo(200,48);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 48);
ctx.lineTo(210,72);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(210, 72);
ctx.lineTo(220,61);
ctx.stroke();

// resistor 1 end

// resistor 2

ctx.beginPath();
ctx.moveTo(690, 340);
ctx.lineTo(700, 346);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(690, 340);
ctx.lineTo(710, 328);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(710, 328);
ctx.lineTo(690, 316);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(690, 316);
ctx.lineTo(710, 302);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(710, 302);
ctx.lineTo(690, 290);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(690, 290);
ctx.lineTo(710, 278);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(710, 278);
ctx.lineTo(698, 271);
ctx.stroke();

// resistor 2 end

//resistor 3
ctx.beginPath();
ctx.moveTo(390, 340);
ctx.lineTo(400, 346);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(390, 340);
ctx.lineTo(410, 328);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(410, 328);
ctx.lineTo(390, 316);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(390, 316);
ctx.lineTo(410, 302);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(410, 302);
ctx.lineTo(390, 290);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(390, 290);
ctx.lineTo(410, 278);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(410, 278);
ctx.lineTo(398, 271);
ctx.stroke();
//resistor3 end

// resister 1 ammeter
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(330, 63, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

// resistor 1 Ammetre symbol naming
ctx.fillStyle = "black"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("A1", 317, 63)

// resister 2 ammeter
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(550, 65, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

// Ammetre symbol naming
ctx.fillStyle = "black"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("A2", 538, 65)

// resister 3 ammeter
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(400, 185, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

// resistor 3 Ammetre symbol naming
ctx.fillStyle = "black"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("A3", 387, 186)

// resistor 1 naming
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("R1", 175, 30)

ctx.fillStyle = "red"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("x", 392, 48)
ctx.fillStyle = "black"


// resistor 2 naming
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("R2", 730, 280)

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

function resistance3Display(res){
  let text = `${res} Ω`;
  ctx.fillStyle = "white";
  ctx.fillRect(415,300,100,25);
  ctx.fillStyle = "black";
  ctx.font = "small-caps 20px Arial";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 418, 310);
  ctx.fillStyle = "black";
}

function ammeter3display(cur) {
  let text = `${cur} mA`;
  ctx.fillStyle = "white";
  ctx.fillRect(425,200,100,25);
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 430, 210);
  ctx.fillStyle = "black";
}

function ammeter2display(cur){
  let text = `${cur} mA`;
  ctx.fillStyle = "white";
  ctx.fillRect(510,90,100,25);
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 515, 105);
  ctx.fillStyle = "black";
}

function ammeter1display(cur) {
  let text = `${cur} mA`;
  ctx.fillStyle = "white";
  ctx.fillRect(280,115,100,25);
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 285, 128);
  ctx.fillStyle = "black";
}

function batteryDisplay(volt){
  let text = `${volt} V`;
  ctx.fillStyle = "white";
  ctx.fillRect(150,270,100,25);
  ctx.fillStyle = "black";
  ctx.font = "small-caps 20px Arial";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 153, 280)
  ctx.fillStyle = "black";
}

ctx.fillStyle = "black";

// resistor 3 naming
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("R3", 425, 280)

//ammeter naming

ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("ammeter 1", 280, 100)

ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("ammeter 2", 500, 30)

ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("ammeter 3", 425, 180)


// ctx.beginPath();io
// ctx.moveTo(705, 345);
// ctx.lineTo(630, 345);
// ctx.stroke();
      
// ctx.beginPath();
// ctx.moveTo(630, 345);
// ctx.lineTo(630, 215);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(700, 215);
// ctx.lineTo(630, 215);
// ctx.stroke();


//ground
ctx.beginPath();  
ctx.moveTo(420, 450);
ctx.lineTo(380, 450);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(410, 455);
ctx.lineTo(390, 455);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(395, 460);
ctx.lineTo(405, 460);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 430);
ctx.lineTo(400, 450);
ctx.stroke();

//Initialise system parameters here
function varinit() {
  varchange();
  //Variable slider and number input types
  $("#voltageSlider").slider("value", 0.05); // slider initialisation : jQuery widget
  $("#voltageSpinner").spinner("value", 0.05); // number initialisation : jQuery widget
  //resistor 1
  $("#resistor1Slider").slider("value", 0.01);
  $("#resistor1Spinner").spinner("value", 0.01);
  //resistor 2
  $("#resistor2Slider").slider("value", 0.01);
  $("#resistor2Spinner").spinner("value", 0.01);
  //resistor 3
  $("#resistor3Slider").slider("value", 0.01);
  $("#resistor3Spinner").spinner("value", 0.01);
  // $("#CsArea").spinner("value", 0.01);
  // $("#Ivalue").spinner("value", 0.01);

  $('#voltageSlider').slider("disable"); 
  $('#resistor1Slider').slider("disable"); 
  $('#resistor2Slider').slider("disable"); 
  $('#resistor3Slider').slider("disable"); 

  $("#add-to-table-btn").prop("disabled", true);
  $("#add-I1I2-btn").prop("disabled", true);
  $("#result-btn").prop("disabled", true);
  
}

function varchange() {
  $("#voltageSlider").slider({ max: 300, min: 0, step: 10 });
  $("#voltageSpinner").spinner({ max: 300, min: 0, step: 10 });

  $("#voltageSlider").on("slide", function (e, ui) {
    $("#voltageSpinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#voltageSpinner").on("spin", function (e, ui) {
    $("#voltageSlider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#voltageSpinner").on("change", function () {
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
  $("#resistor3Slider").slider({ max: 200, min: 0, step: 1 });
  $("#resistor3Spinner").spinner({ max: 200, min: 0, step: 1 });

  $("#resistor3Slider").on("slide", function (e, ui) {
    $("#resistorSpinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistor3Spinner").on("spin", function (e, ui) {
    $("#resistor3Slider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistor3Spinner").on("change", function () {
    varchange();
  });
  $("#resistor3Spinner").on("touch-start", function () {
    varchange();
  });
  //
  $("#CsArea").spinner({ max: 1, min: 0.01, step: 0.0001 });
  $("#Ivalue").spinner({ max: 1, min: 0.01, step: 0.0001 });
}
function varupdate() {
  $("#voltageSpinner").spinner("value", $("#voltageSlider").slider("value")); //updating slider location with change in spinner(debug)
  $("#resistor1Spinner").spinner("value", $("#resistor1Slider").slider("value"));
  $("#resistor2Spinner").spinner("value", $("#resistor2Slider").slider("value"));
  $("#resistor3Spinner").spinner("value", $("#resistor3Slider").slider("value"));
  volt = $("#voltageSpinner").spinner("value"); //Updating variables
  res1 = $("#resistor1Spinner").spinner("value");
  res2 = $("#resistor2Spinner").spinner("value");
  res3 = $("#resistor3Spinner").spinner("value");

  resistance2Display(res2);
  resistance1Display(res1);
  resistance3Display(res3);
  ammeter1display(0.0)
  ammeter2display(0.0)
  ammeter3display(0.0)
  batteryDisplay(volt);
  voltageassign(volt);

  const numerator = volt * (res3 + res2);
  const denominator = (res1 * res3) + (res1 * res2) + (res2 * res3);

  const I1 = denominator === 0 ? Infinity : numerator / denominator;
  const I2 = denominator === 0 ? Infinity : (volt * res3) / denominator;
  const I3 = denominator === 0 ? Infinity : (volt * res2) / denominator;



  if (volt === 0 && res1 === 0 && res2 === 0 && res3 === 0) {
    i1assign(0.0);
    i2assign(0.0);
    i3assign(0.0);
  } else if (isNaN(I1) || !isFinite(I1)) {
    i1assign(0.0);
  } else if (isNaN(I2) || !isFinite(I2)) {
    i2assign(0.0);
  } else if (isNaN(I3) || !isFinite(I3)) {
    i3assign(0.0);
  } else {
    i1assign(I1);
    i2assign(I2);
    i3assign(I3);
  }
    // i1assign((volt*(res3+res2))/((res1*res3)+(res1*res2)+(res2*res3)));
    // i2assign((volt*res3)/((res1*res3)+(res1*res2)+(res2*res3)));
    // i3assign((volt*res2)/((res1*res2)+(res1*res2)+(res2*res3)));

};

function voltageassign(volt){
  voltage = volt;
  batteryDisplay(voltage);
}
function i1assign(cur1){
  i1 = cur1.toFixed(2);
  ammeter1display(cur1.toFixed(2));
  console.log("i1 =" + i1);
}
function i2assign(cur2){
  i2 = cur2.toFixed(2);
  ammeter2display(cur2.toFixed(2));
  console.log("i2 =" + i2);
}
function i3assign(cur3){
  i3 = cur3.toFixed(2);
  ammeter3display(cur3.toFixed(2));
  console.log("i3 =" + i3);
}
function startSimulation(){
  $('#voltageSlider').slider("enable"); 
  $('#resistor1Slider').slider("enable"); 
  $('#resistor2Slider').slider("enable"); 
  $('#resistor3Slider').slider("enable"); 
  $("#simulate-btn").prop("disabled", true);
  $("#add-to-table-btn").prop("disabled", false);
  $("#add-I1I2-btn").prop("disabled", false);
  $("#result-btn").prop("disabled", false);
};

function addtable(){
  rowCount +=1;

  var table=document.getElementById("mytable");
  var row=table.insertRow(-1);
  var cell1=row.insertCell(0);
  var cell2=row.insertCell(1);
  var cell3=row.insertCell(2);
  var cell4=row.insertCell(3);
  var cell5=row.insertCell(4);
  // var cell6=row.insertCell(5);

  cell1.innerHTML=voltage;
  cell2.innerHTML= i1;
  cell3.innerHTML= i2;
  cell4.innerHTML= i3;
  cell5.innerHTML= i1;
  cell5.classList.add("column-font");
  // cell5.innerHTML="cell5";
  // cell6.innerHTML="cell6";

  // if (rowCount >=5) {
  //   alert("maximum table observation taken down")
  //   $("#add-to-table-btn").prop("disabled", true);
  // }
  
}

//show hidden values

function showvalue(){
  var hiddenCells = document.querySelectorAll(".column-font");
  hiddenCells.forEach(function(cell) {
    cell.style.display = 'table-cell';
  });
}

function showResult() {
  document.getElementById('result-display-div').style.display = 'block'  
  document.getElementById('calculation-display-div').style.display = 'block'  
  document.getElementById('i1').innerHTML = 0;
  document.getElementById('i2').innerHTML = 0;
  document.getElementById('i3').innerHTML = 0;

  
}


window.addEventListener("load", varinit);
