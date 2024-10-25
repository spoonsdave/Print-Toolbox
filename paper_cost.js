const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    
    // INPUT

    const width = parseInt(document.querySelector('#width').value);
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const perTonIn = parseFloat(document.querySelector('#perTonne').value);
    const perThouIn = parseFloat(document.querySelector('#perThou').value);
    const results = document.querySelector('#results');

    // THE FORMULA

    const kgperThou = (((width * height) * weight) / 1000000);
    const perThouOut = ((kgperThou * perTonIn) / 1000);
    const perTonOut = ((perThouIn * 1000) / kgperThou);

    // ROUND TO 2 DECIMAL PLACES

    const thouRound = (Math.round(perThouOut * 100) / 100).toFixed(2);
    const tonRound = (Math.round(perTonOut * 100) / 100).toFixed(2);

    // REMOVING THE NaN - REPLACE WITH INPUT

    let thouResult
    if (thouRound > 0) {
        thouResult = thouRound;
    } else {
        thouResult = perThouIn
    }

    let tonResult
    if (tonRound > 0) {
        tonResult = tonRound;
    } else {
        tonResult = perTonIn
    }

    //DISPLAY THE RESULTS

    document.querySelector('.results').innerHTML = "Price per 1000: £" + thouResult + "<br>" + "Price per tonne: £" + tonResult;

});

