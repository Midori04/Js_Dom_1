
var random1 = Math.round(Math.random()*10);
document.querySelector("#Tall1").value = random1;

//  
var random2 = Math.round(Math.random()*10);
document.querySelector("#Tall2").value = random2;

const PrintButton = document.querySelector("#Print").addEventListener("click", function() {

    const tall1 = document.querySelector("#Tall1").value;
    const tall2 = document.querySelector("#Tall2").value;
    if (tall1 > tall2) {
        console.log(tall1 + " er større enn " + tall2);
    } else if (tall1 < tall2) {
        console.log(tall1 + " er mindre enn " + tall2);
    }else if (tall1 == tall2) {
        console.log(tall1 + " er lik " + tall2);
    }

   
   })