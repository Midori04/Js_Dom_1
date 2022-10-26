const checkButton = document.querySelector("#check").addEventListener("click", function() {



    const text = document.querySelector("#palindrome").value;

    var text1 = text.split("").reverse().join("");

    if (text1 == text) {

        console.log("Teksten er palindrome");

    } else {

        console.log("Teksten er ikke palindrome");

    };

    document.querySelector("#palindrome").value = text1;

})

