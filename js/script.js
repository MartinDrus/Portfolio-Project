

//Die Länderflaggen, denen die TriggerKlasse hinzugefügt werden muss
let flags = document.querySelectorAll('.flags');

// Fläche die geklickt werden muss, damit etwas passiert
let clickAreas = document.querySelectorAll('.lang-select');
let clickGlobe = document.querySelectorAll('.dropdown-trigger-globe');

let dropdown = document.querySelector('.menu-field');
let dropdown2 = document.querySelector('.second-level-dropdown');
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

 /* Der ClickListener für die Sprachauswahl DropDown des Headers */
clickGlobe.forEach(globe => {
    globe.addEventListener('click', (event) => {
        dropdown2.classList.toggle("show-drop");
        dropdown.classList.toggle("show-drop");
    })
})

icons.forEach (icon => {  
   icon.addEventListener('click', (event) => {
     icon.classList.toggle("open");
     dropdown.classList.toggle("show");

   });
 });



let settime;
document.getElementById('imgchange').addEventListener("mouseover", imgchanges);
document.getElementById('imgchange').addEventListener("mouseout", outtime);

function imgchanges(){
document.getElementById('my-pics').src = "../../assets/img/MartinDrus2.webp";
var myArray = ['../../assets/img/MartinDrus.webp', '../../assets/img/MartinDrus2.webp'];
var count = 2;
settime = setInterval(function() {
  if(count >= myArray.length){
  count = 0;
  }
  var rand = myArray[count];
  document.getElementById('my-pics').src = rand;
  count++;
}, 1200);
}
function outtime(){
clearInterval(settime);
document.getElementById('my-pics').src = "../../assets/img/MartinDrus.webp";
}