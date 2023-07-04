

//Die Länderflaggen, denen die TriggerKlasse hinzugefügt werden muss
let flags = document.querySelectorAll('.flags');

// Fläche die geklickt werden muss, damit etwas passiert
let clickAreas = document.querySelectorAll('.lang-select');
let clickGlobe = document.querySelectorAll('.dropdown-trigger-globe');

let dropdown = document.querySelector('.menu-field');
let dropdown2 = document.querySelector('.second-level-dropdown');
let icons = document.querySelectorAll('.icon');

//Time
let timeContainer = document.querySelector("#time-container")

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const hexagone = document.querySelector("#world-pic");

document.querySelector(".canvasToggler").addEventListener("click", () => {
  let canContainer = document.querySelector("#canvasContainer");
  canContainer.classList.toggle("displayNone");

})


// !------CV-------
const curriculumVitae = document.querySelector(".loadCV");
let inputContainer = document.createElement("div");
let paragraph = document.querySelector(".cv-label");
let submitBtn = document.createElement("button");





function addInputSection() {

  if(paragraph != null) curriculumVitae.removeChild(paragraph);
  console.log("🚀 ~ file: script.js:41 ~ addInputSection ~ paragraph", paragraph)

  if(curriculumVitae.childNodes.length <= 2) {


    let inputLabel = document.createElement("label");
    inputLabel.textContent = "Enter the password "
  
    let passwordInput = document.createElement("input");
  
    submitBtn.textContent = "Submit"
  
    inputContainer.appendChild(inputLabel);
    inputContainer.appendChild(passwordInput);
    inputContainer.appendChild(submitBtn)
  
    curriculumVitae.appendChild(inputContainer);
  } 
}
submitBtn.addEventListener("click", () => passwd(passwordInput.value));

curriculumVitae.addEventListener("click", () => {

  curriculumVitae.classList.remove("clickEffect");
  console.log("🚀 ~ file: script.js:62 ~ curriculumVitae.addEventListener ~ curriculumVitae", curriculumVitae)

  addInputSection()

});


function passwd(inputValue){
console.log("🚀 ~ file: script.js:63 ~ passwd ~ test", inputValue)


  if(inputValue.trim().toLowerCase() == "teacher"){
    console.log("correct!");

    // curriculumVitae.remove(inputContainer);
    console.log("🚀 ~ file: script.js:78 ~ passwd ~ curriculumVitae", curriculumVitae)
    curriculumVitae.appendChild(paragraph);
  }else{
    console.log("wrong!");
  }
}




// ! ----clickeffect----
  hexagone.addEventListener("click", () => {
    hexagone.classList.add("clickEffect");
  })


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


//! Picture change
// let settime;
// document.getElementById('imgchange').addEventListener("mouseover", imgchanges);
// document.getElementById('imgchange').addEventListener("mouseout", outtime);

// function imgchanges(){
// document.getElementById('my-pics').src = "../../assets/img/MartinDrus2.webp";
// var myArray = ['../../assets/img/MartinDrus.webp', '../../assets/img/MartinDrus2.webp'];
// var count = 2;
// settime = setInterval(function() {
//   if(count >= myArray.length){
//   count = 0;
//   }
//   var rand = myArray[count];
//   document.getElementById('my-pics').src = rand;
//   count++;
// }, 1200);
// }
// function outtime(){
// clearInterval(settime);
// document.getElementById('my-pics').src = "../../assets/img/MartinDrus.webp";
// }

// ! Time

// function digitalDate() {
//   let now = new Date();
//   // timeContainer.style = ("margin-left: 150px")
//   timeContainer.innerHTML = now;

// }
// setInterval(digitalDate, 1000);




function setClock() {
let rightNow = new Date();

const seconds = rightNow.getSeconds();
const secondsDegrees = ((seconds / 60) * 360) + 90;
secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

const mins = rightNow.getMinutes();
const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
minsHand.style.transform = `rotate(${minsDegrees}deg)`;

const hour = rightNow.getHours();
const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}


setInterval(setClock, 1000);

// !--------------TEST----------------


