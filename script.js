// Delight
// Hospital
// Creation
// Tolerate
// Exciting
// Journeyed
// Neighbor
// Solutions
// Complets
// Elevates
// Festival
// Punctuation
// Baseball
// Concrete
// Recycle
// Strategy
// Liberty
// Adventure
// Spontane
// Tolerate

let words = [
  "teildgh",
  "sohtipal",
  "eortcian",
  "etalorrt",
  "txieicng",
  "jurneeyod",
  "hboinreg",
  "nlsotiou",
  "eplctosm",
  "evltease",
  "evitlafs",
  "tictnonupua",
  "aselbabl",
  "oncterec",
  "ycerelc",
  "ytgteasr",
  "ybtreil",
  "tednureav",
  "eantpnos",
  "tievsopi",
];

let index = Math.floor(Math.random() * words.length);
let word = words[index];

// console.log(word);

document.querySelector(".random-word").textContent = `"${word}"`;

const checker = document.querySelector(".butn");
const yourGuess = document.getElementById("guess");
const reschecker = document.querySelector(".result");
let scores = 0;
// checker.addEventListener("click", function () {

// const index = Math.floor(Math.random() * words.length);
// let word = words[index]

// // console.log(word);

// document.querySelector('.random-word').textContent= `"${word}"`;
// });

checker.addEventListener("click", function () {
  if (word === "teildgh") {
    if (yourGuess.value === "delight") {
      console.log("good");
      reschecker.classList.remove("hidden");
      document.querySelector(".scorePl").textContent = scores++;
    }
  }
  if (word === "sohtipal") {
    if (yourGuess.value === "hospital") {
      console.log("good");
      reschecker.classList.remove("hidden");
      document.querySelector(".scorePl").textContent = scores++;
    }
  }
  if (word === "eortcian") {
    if (yourGuess.value === "creation") {
      console.log("good");
      reschecker.classList.remove("hidden");
      document.querySelector(".scorePl").textContent = scores++;
    }
  } // bruhhh I'm dead 😭
  if (word === "etaloret") {
    if (yourGuess.value === "tolerate") {
      console.log("good");
      reschecker.classList.remove("hidden");
      document.querySelector(".scorePl").textContent = scores++;
    }
  }
  if (word === "txieicng") {
    if (yourGuess.value === "exciting") {
      console.log("good");
      reschecker.classList.remove("hidden");
      document.querySelector(".scorePl").textContent = scores++;
    }
  }
  if (word === "jrneeuyod") {
    if (yourGuess.value === "journeyed") {
      console.log("good");
      reschecker.classList.remove("hidden");
      document.querySelector(".scorePl").textContent = scores++;
    }
  }
  if (word === "hboinreg") {
    if (yourGuess.value === "neighbor") {
      console.log("good");
      reschecker.classList.remove("hidden");
      document.querySelector(".scorePl").textContent = scores++;
    }
  }
  if (word === "nlsotiou") {
    if (yourGuess.value === "solution") {
      console.log("good");
      reschecker.classList.remove("hidden");
      document.querySelector(".scorePl").textContent = scores++;
    }
  }
  if (word === "eplctosm") {
    if (yourGuess.value === "complets") {
      console.log("good");
      reschecker.classList.remove("hidden");
      document.querySelector(".scorePl").textContent = scores++;
    }
  }
  if (word === "evltease") {
    if (yourGuess.value === "elevates") {
      console.log("good");
      reschecker.classList.remove("hidden");
      document.querySelector(".scorePl").textContent = scores++;
    }
  }
  if (word === "evitlafs") {
    if (yourGuess.value === "festival") {
      console.log("good");
      reschecker.classList.remove("hidden");
      document.querySelector(".scorePl").textContent = scores++;
    }
  }
  if (word === "tictnonupua") {
    if (yourGuess.value === "punctuation") {
      console.log("good");
      reschecker.classList.remove("hidden");
      document.querySelector(".scorePl").textContent = scores++;
    }
  }
  if (word === "aselbabl") {
    if (yourGuess.value === "baseball") {
      console.log("good");
      reschecker.classList.remove("hidden");
      document.querySelector(".scorePl").textContent = scores++;
    }
  }
  if (word === "oncterec") {
    if (yourGuess.value === "concrete") {
      console.log("good");
      reschecker.classList.remove("hidden");
      document.querySelector(".scorePl").textContent = scores++;
    }
  }
  if (word === "ycerelc") {
    if (yourGuess.value === "recycle") {
      console.log("good");
      reschecker.classList.remove("hidden");
      document.querySelector(".scorePl").textContent = scores++;
    }
  }
  if (word === "ytgteasr") {
    if (yourGuess.value === "strategy") {
      console.log("good");
      reschecker.classList.remove("hidden");
      document.querySelector(".scorePl").textContent = scores++;
    }
  }
  if (word === "ybtreil") {
    if (yourGuess.value === "liberty") {
      console.log("good");
      reschecker.classList.remove("hidden");
      document.querySelector(".scorePl").textContent = scores++;
    }
  }
  if (word === "tednureav") {
    if (yourGuess.value === "adventure") {
      console.log("good");
      reschecker.classList.remove("hidden");
      document.querySelector(".scorePl").textContent = scores++;
    }
  }
  if (word === "eantpnos") {
    if (yourGuess.value === "spontane") {
      console.log("good");
      reschecker.classList.remove("hidden");
      document.querySelector(".scorePl").textContent = scores++;
    }
  }
  if (word === "tievsopi") {
    if (yourGuess.value === "positive") {
      console.log("good");
      reschecker.classList.remove("hidden");
      document.querySelector(".scorePl").textContent = scores++;
    }
  }
});

document.querySelector(".scorePl").textContent = scores++;

const nextBtn = document.querySelector(".next");

nextBtn.addEventListener("click", function () {
  index = Math.floor(Math.random() * words.length);
  word = words[index];
  document.querySelector(".random-word").textContent = `"${word}"`;
  reschecker.classList.add("hidden");
  yourGuess.value = "";
});
