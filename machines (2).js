function xl() {
  var x = document.getElementById("xl");
  if (x.innerHTML === " ") {
    x.innerHTML = "<p>Min Sheet Size: 340 x 480mm<p>Max Sheet Size: 750 x 1060mm<p>Max Print Area: 740 x 1050mm<p>Min thickness: 70mic<p>Max thickness: 800mic<p>---";
  } else {
    x.innerHTML = " ";
  }
}


function fst() {
  var x = document.getElementById("fst");
  if (x.innerHTML === " ") {
    x.innerHTML = "<p>Min Size: 120 x 99mm<p>Max Size: 474 x 310mm<p>Min 55mm between stitches<p>---";
  } else {
    x.innerHTML = " ";
  }
}



function perfect() {
  var x = document.getElementById("pbDIV");
  if (x.innerHTML === " ") {
    x.innerHTML = "<p>Min Size: 120 x 100mm<p>Max Size: 360 x 280mm<p>---";
  } else {
    x.innerHTML = " ";
  }
}


function thread() {
  var x = document.getElementById("threadDIV");
  if (x.innerHTML === " ") {
    x.innerHTML = "<p>Min Size: 155 x 85mm<p>Max Size: 415 x 315mm<p>---";
  } else {
    x.innerHTML = " ";
  }
}


function cylinder() {
  var x = document.getElementById("cylinder");
  if (x.innerHTML === " ") {
    x.innerHTML = "<p>Min Sheet Size: 171 x 114mm<p>Max Sheet Size: 800 x 570mm<p>Max Chase Size 773 x 560mm<p>---";
  } else {
    x.innerHTML = " ";
  }
}


function morgana() {
  var x = document.getElementById("morgana");
  if (x.innerHTML === " ") {
    x.innerHTML = "<p>Min Sheet Size: 210 x 140mm<p>Max Sheet Size: 900 x 385mm<p>0.11mic - 0.04mic (approx 170gsm - 350gsm)<p>---";
  } else {
    x.innerHTML = " ";
  }
}

