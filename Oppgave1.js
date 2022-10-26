const cfButton = document.querySelector("#CF").addEventListener("click", function() {

    const verdi = document.querySelector("#temperature").value;
   ;  console.log("Temperaturen er " + (verdi * 1.8));
   
   
   
   })

   const fcButton = document.querySelector("#FC").addEventListener("click", function() {



    const verdi = document.querySelector("#temperature").value
   ;  console.log("Temperaturen er " + (verdi-32)*(5/9));
   
   
   
   })