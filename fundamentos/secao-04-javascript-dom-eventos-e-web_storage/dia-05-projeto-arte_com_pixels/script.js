const button = document.getElementById("button-random-color");
const cor1 = document.querySelectorAll(".color")[1];
const cor2 = document.querySelectorAll(".color")[2];
const cor3 = document.querySelectorAll(".color")[3];

        button.addEventListener("click", function() {
            cor1.style.backgroundColor = getRandomColor();
            cor2.style.backgroundColor = getRandomColor();
            cor3.style.backgroundColor = getRandomColor();
        });

        function getRandomColor() {
            const letters = "0123456789ABCDEF";
            let cor = "#";
            for (let index = 0; index < 6; index += 1) {
              cor += letters[Math.floor(Math.random() * 16)];
            }
            return cor;
          }