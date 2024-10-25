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




const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const cover_pp = parseInt(document.querySelector('#cover_pp').value);
    const cover_mic = parseInt(document.querySelector('#cover_mic').value);
    const text_pp = parseInt(document.querySelector('#text_pp').value);
    const text_mic = parseInt(document.querySelector('#text_mic').value);
    const results = document.querySelector('#results');



    const cover = (cover_pp * cover_mic);
    const glue_text = (text_pp * text_mic);
    const thread_text = ((text_pp * text_mic) * 1.1);
    const glue_spine_mic = (cover + glue_text);
    const thread_spine_mic = (cover + thread_text);
    const glue_spine_mm = (glue_spine_mic / 2000)
    const thread_spine_mm = (thread_spine_mic / 2000)
    const case_thread_spine_mic = (11600 + thread_text);
    const case_thread_spine_mm = (case_thread_spine_mic / 2000)


    //display the results

    document.querySelector('.results').innerHTML = "Softback Glued Spine = " + Math.round(glue_spine_mm * 10) / 10 + "mm" + "<br>"
        + "Softback Thread Spine = " + Math.round(thread_spine_mm * 10) / 10 + "mm";



});


