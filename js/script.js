

//Die Länderflaggen, denen die TriggerKlasse hinzugefügt werden muss
let flags = document.querySelectorAll('.flags');

// Fläche die geklickt werden muss, damit etwas passiert
let clickArea = document.querySelector('#lang-select');
let clickArea2 = document.querySelector('#lang-select2');


console.log(clickArea);

// clickHandler fuer die Sprachauswahl
flags.forEach(function(item, index) {
    clickArea.addEventListener('click', function(evt) {   
    flags[index].classList.toggle('show-flags');
    });
});

// clickHandler fuer die Sprachauswahl
flags.forEach(function(item, index) {
    clickArea2.addEventListener('click', function(evt) {   
    flags[index].classList.toggle('show-flags');
    });
});
