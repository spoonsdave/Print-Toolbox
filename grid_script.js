
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
    const results = document.querySelector('#results');









    // --------------------------------------






    // RADIO BUTTON LISTENER
    function displayBinding() {
        var ele = document.getElementsByName('binding');

        for (i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                return ele[i].value;
        }
    }

    const binderType = displayBinding();




    function displayCover() {
        var eleb = document.getElementsByName('cover');

        for (i = 0; i < eleb.length; i++) {
            if (eleb[i].checked)
                return eleb[i].value;
        }
    }

    const coverType = displayCover();








    // CALCULATIONS

    const textMM = () => {
        if (binderType == "PUR") {
            return ((text_pp * text_mic) / 2000);
        } else {
            return ((text_pp * text_mic) / 2000);
        }
    }
    const textSpine = textMM();



    const coverMM = () => {
        if (coverType == "thin") {
            return 3;
        } else {
            return 4;
        }
    }
    const covSpine = coverMM();






    const spineMM = Math.ceil(textSpine + covSpine);


    const heightMM = Math.ceil(textHeight + 6);
    const widthMM = Math.ceil(textWidth + 6);

    const newSpine = () => {
        if (spineMM < 8) {
            return 8;
        } else {
            return spineMM;
        }
    }

    const finalSpine = newSpine();









    // --------------------------------------





    // DRAW THE CANVAS SECTION



    const canvas = document.getElementById('canvas');


    canvas.width = (((widthMM * 2) + finalSpine) + 40);
    canvas.height = heightMM + 40;

    const width = canvas.width;
    const height = canvas.height;


    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'White';
    ctx.fillRect(1, 1, canvas.width - 2, canvas.height - 2);

    ctx.strokeStyle = 'Black';
    ctx.lineWidth = 1;
    ctx.strokeRect(0.5, 0.5, canvas.width - 1, canvas.height - 1);

    ctx.strokeRect(19.5, 19.5, widthMM, heightMM);
    ctx.strokeRect((19.5 + widthMM + finalSpine), 19.5, widthMM, heightMM);

    ctx.font = '10.5px Arial';
    ctx.fillStyle = 'Black';

    ctx.textAlign = "left";
    ctx.fillText('20mm wraparound', 15, 13);
    ctx.fillText(heightMM + 'mm H', 25, (heightMM / 2) + 20);

    ctx.textAlign = "right";
    ctx.fillText('20mm wraparound', (widthMM * 2) + finalSpine + 26, heightMM + 32);
    ctx.fillText(heightMM + 'mm H', widthMM + widthMM + finalSpine + 15, (heightMM / 2) + 20);

    ctx.textAlign = "center";
    ctx.fillText(widthMM + 'mm W', (widthMM / 2) + 19.5, 33);
    ctx.fillText(widthMM + 'mm W', (widthMM / 2) + finalSpine + widthMM + 19.5, 33);
    ctx.fillText(finalSpine, (finalSpine / 2) + widthMM + 19.5, 33);



    // --------------------------------------






    // DISPLAY THE RESULTS SECTION



    document.querySelector('.results').innerHTML = "Spine = " + finalSpine + "mm<br>Page Height = " +
        heightMM + "mm<br>Page Width = " + widthMM + "mm<br><br>Sheet Width = " + width + "mm<br>Sheet Height = " + height + "mm<br> <br>";
//        "Binding" =  + binderType + "<br> text spine = " + textSpine + "<br>cover spine = " + covSpine;

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


