

//Die Länderflaggen, denen die TriggerKlasse hinzugefügt werden muss
let flags = document.querySelectorAll('.flags');

// Fläche die geklickt werden muss, damit etwas passiert
let clickAreas = document.querySelectorAll('.lang-select');
let clickAreas2 = document.querySelector('.drop');


let dropdown = document.querySelector('.menu-field');


let icons = document.querySelectorAll('.icon');


/* Schleife läuft durch die Klickfelder  */
 clickAreas.forEach(function(item) {
    /* Beim Klick auf eine "Clickarea"/einem item in der forEach-Schleife 
    werden über die zweite Schleife alle Flags getoggelt */
    item.addEventListener('click', function(evt) {
        flags.forEach(function(item){
            item.classList.toggle('show-flags');
        })
    })
 })


icons.forEach (icon => {  
   icon.addEventListener('click', (event) => {
     icon.classList.toggle("open");
     dropdown.classList.toggle("show");

   });
 });