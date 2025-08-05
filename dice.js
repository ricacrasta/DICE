const button = document.getElementById("btn");
const dice = document.getElementById("dice");
const msg = document.getElementById("msg");
const rollSound = new Audio("dice-sound-288763.mp3");




const ID = [
  "https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png", // 1
  "https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png", // 2
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png", // 3
  "https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png", // 4
  "https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png", // 5
  "https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png"   // 6
];

button.addEventListener("click", () => {
  msg.innerHTML = "Rolling...";
    rollSound.currentTime = 0;  
  rollSound.play();


  
  dice.style.transition = "none";
  dice.style.transform = "rotate(0deg)";

  setTimeout(() => {
    dice.style.transition = "transform 1s";
    dice.style.transform = "rotate(360deg)";
  }, 10); 

  
  setTimeout(() => {
    const rand = Math.floor(Math.random() * ID.length);
    dice.src = ID[rand];
    msg.innerHTML = `ITS ${rand + 1}`;
  }, 1000);
});
