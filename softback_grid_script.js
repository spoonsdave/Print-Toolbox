
// START OF FORM

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();




    // --------------------------------------





    // INPUT SECTION



    const textHeight = parseFloat(document.querySelector('#textHeight').value);
    const textWidth = parseFloat(document.querySelector('#textWidth').value);
    const text_pp = parseInt(document.querySelector('#text_pp').value);
    const text_mic = parseInt(document.querySelector('#text_mic').value);
    const cover_mic = parseInt(document.querySelector('#cover_mic').value);
    const results = document.querySelector('#results');




    // --------------------------------------





    // CALCULATIONS

//    const textMM = ((text_pp * text_mic)/2);
//    const textSpine = textMM();

//    const coverMM = (cover_mic * 2);
//    const covSpine = coverMM();

//    const spineMM = Math.ceil(textSpine + covSpine);

//    const heightMM = Math.ceil(textHeight);
//    const widthMM = Math.ceil(textWidth);


    // --------------------------------------



    // DRAW THE CANVAS SECTION


//    const canvas = document.getElementById('canvas');


//    canvas.width = ((widthMM * 2) + spineMM);
//    canvas.height = heightMM;

//    const width = canvas.width;
//    const height = canvas.height;


//    var ctx = canvas.getContext('2d');

//    ctx.fillStyle = 'White';
//    ctx.fillRect(1, 1, width - 2, height - 2);

//    ctx.strokeStyle = 'Black';
//    ctx.lineWidth = 1;
//    ctx.strokeRect(0.5, 0.5, width - 1, height - 1);

//    ctx.strokeRect(0.5, 0.5, widthMM, heightMM);
//    ctx.strokeRect((0.5 + widthMM + spineMM), 0.5, widthMM, heightMM);

//    ctx.font = '10.5px Arial';
//    ctx.fillStyle = 'Black';

//    ctx.textAlign = "center";
//    ctx.fillText(widthMM + 'mm W', (widthMM / 2) + 0.5, 33);
//    ctx.fillText(widthMM + 'mm W', (widthMM / 2) + spineMM + widthMM + 0.5, 33);
//    ctx.fillText(spineMM, (spineMM / 2) + widthMM + 0.5, 33);



    // --------------------------------------






    // DISPLAY THE RESULTS SECTION



    document.querySelector('.results').innerHTML = "dave";

});

// END OF FORM



// --------------------------------------


// GSM TO MICRON SECTION


function silk() {
    var x = document.getElementById("silk");
    if (x.innerHTML === " ") {
        x.innerHTML = "100gsm = 90mic<p>115gsm = 100mic<p>130gsm = 115mic<p>150gsm = 135mic<p>170gsm = 155mic<p>200gsm = 185mic<p>250gsm = 235mic<p>300gsm = 285mic<p>350gsm = 340mic<p>---";
    } else {
        x.innerHTML = " ";
    }
}

function uncoated() {
    var x = document.getElementById("uncoated");
    if (x.innerHTML === " ") {
        x.innerHTML = "100gsm = 125mic<p>120gsm = 145mic<p>140gsm = 165mic<p>150gsm = 175mic<p>160gsm = 190mic<p>210gsm = 240mic<p>250gsm = 280mic<p>300gsm = 330mic<p>350gsm = 380mic<p>";
    } else {
        x.innerHTML = " ";
    }
}

function gloss() {
    var x = document.getElementById("gloss");
    if (x.innerHTML === " ") {
        x.innerHTML = "100gsm = 75mic<p>115gsm = 85mic<p>130gsm = 95mic<p>150gsm = 110mic<p>170gsm = 125mic<p>200gsm = 150mic<p>250gsm = 185mic<p>300gsm = 235mic<p>350gsm = 280mic<p>";
    } else {
        x.innerHTML = " ";
    }
}


