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
  "etaloret",
  "txieicng",
  "jurneeyod",
  "hboinreg",
  "nlsotiou",
  "eplctosme",
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
const nextBtn = document.querySelector(".next");
let scores = 0;
// checker.addEventListener("click", function () {

// const index = Math.floor(Math.random() * words.length);
// let word = words[index]

// // console.log(word);
// });

nextBtn.addEventListener("click", function () {
  index = Math.floor(Math.random() * words.length);
  word = words[index];
  document.querySelector(".random-word").textContent = `"${word}"`;
  reschecker.classList.add("hidden");
  nextBtn.classList.add("hidden");
  reschecker.textContent = "";
  yourGuess.value = "";
});

checker.addEventListener("click", function () {
  if (word === "teildgh") {
    if (yourGuess.value.toLowerCase().trim() === "delight") {
      console.log("good");
      reschecker.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
      reschecker.textContent = "Correct";
      reschecker.style.color = "rgba(121, 190, 18, 0.767)";
      document.querySelector(".scorePl").textContent = scores++;
    } else if (yourGuess.value.toLowerCase().trim() !== "delight") {
      console.log("wrong");
      reschecker.classList.remove("hidden");
      reschecker.textContent = "Wrong, try again";
      reschecker.style.color = "red";
    }
  }
  if (word === "sohtipal") {
    if (yourGuess.value.toLowerCase().trim() === "hospital") {
      console.log("good");
      reschecker.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
      reschecker.textContent = "Correct";
      reschecker.style.color = "rgba(121, 190, 18, 0.767)";
      document.querySelector(".scorePl").textContent = scores++;
    } else if (yourGuess.value.toLowerCase().trim() !== "hospital") {
      console.log("wrong");
      reschecker.classList.remove("hidden");
      reschecker.textContent = "Wrong, try again";
      reschecker.style.color = "red";
    }
  }
  if (word === "eortcian") {
    if (yourGuess.value.toLowerCase().trim() === "creation") {
      console.log("good");
      reschecker.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
      reschecker.textContent = "Correct";
      reschecker.style.color = "rgba(121, 190, 18, 0.767)";
      document.querySelector(".scorePl").textContent = scores++;
    } else if (yourGuess.value.toLowerCase().trim() !== "creation") {
      console.log("wrong");
      reschecker.classList.remove("hidden");
      reschecker.textContent = "Wrong, try again";
      reschecker.style.color = "red";
    }
  } // bruhhh I'm dead 😭
  if (word === "etaloret") {
    if (yourGuess.value.toLowerCase().trim() === "tolerate") {
      console.log("good");
      reschecker.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
      reschecker.textContent = "Correct";
      reschecker.style.color = "rgba(121, 190, 18, 0.767)";
      document.querySelector(".scorePl").textContent = scores++;
    } else if (yourGuess.value.toLowerCase().trim() !== "tolerate") {
      console.log("wrong");
      reschecker.classList.remove("hidden");
      reschecker.textContent = "Wrong, try again";
      reschecker.style.color = "red";
    }
  }
  if (word === "txieicng") {
    if (yourGuess.value.toLowerCase().trim() === "exciting") {
      console.log("good");
      reschecker.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
      reschecker.textContent = "Correct";
      reschecker.style.color = "rgba(121, 190, 18, 0.767)";
      document.querySelector(".scorePl").textContent = scores++;
    } else if (yourGuess.value.toLowerCase().trim() !== "exciting") {
      console.log("wrong");
      reschecker.classList.remove("hidden");
      reschecker.textContent = "Wrong, try again";
      reschecker.style.color = "red";
    }
  }
  if (word === "jurneeyod") {
    if (yourGuess.value.toLowerCase().trim() === "journeyed") {
      console.log("good");
      reschecker.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
      reschecker.textContent = "Correct";
      reschecker.style.color = "rgba(121, 190, 18, 0.767)";
      document.querySelector(".scorePl").textContent = scores++;
    } else if (yourGuess.value.toLowerCase().trim() !== "journeyed") {
      console.log("wrong");
      reschecker.classList.remove("hidden");
      reschecker.textContent = "Wrong, try again";
      reschecker.style.color = "red";
    }
  }
  if (word === "hboinreg") {
    if (yourGuess.value.toLowerCase().trim() === "neighbor") {
      console.log("good");
      reschecker.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
      reschecker.textContent = "Correct";
      reschecker.style.color = "rgba(121, 190, 18, 0.767)";
      document.querySelector(".scorePl").textContent = scores++;
    } else if (yourGuess.value.toLowerCase().trim() !== "neighbor") {
      console.log("wrong");
      reschecker.classList.remove("hidden");
      reschecker.textContent = "Wrong, try again";
      reschecker.style.color = "red";
    }
  }
  if (word === "nlsotiou") {
    if (yourGuess.value.toLowerCase().trim() === "solution") {
      console.log("good");
      reschecker.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
      reschecker.textContent = "Correct";
      reschecker.style.color = "rgba(121, 190, 18, 0.767)";
      document.querySelector(".scorePl").textContent = scores++;
    } else if (yourGuess.value.toLowerCase().trim() !== "solution") {
      console.log("wrong");
      reschecker.classList.remove("hidden");
      reschecker.textContent = "Wrong, try again";
      reschecker.style.color = "red";
    }
  }
  if (word === "eplctosme") {
    if (yourGuess.value.toLowerCase().trim() === "completes") {
      console.log("good");
      reschecker.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
      reschecker.textContent = "Correct";
      reschecker.style.color = "rgba(121, 190, 18, 0.767)";
      document.querySelector(".scorePl").textContent = scores++;
    } else if (yourGuess.value.toLowerCase().trim() !== "completes") {
      console.log("wrong");
      reschecker.classList.remove("hidden");
      reschecker.textContent = "Wrong, try again";
      reschecker.style.color = "red";
    }
  }
  if (word === "evltease") {
    if (yourGuess.value.toLowerCase().trim() === "elevates") {
      console.log("good");
      reschecker.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
      reschecker.textContent = "Correct";
      reschecker.style.color = "rgba(121, 190, 18, 0.767)";
      document.querySelector(".scorePl").textContent = scores++;
    } else if (yourGuess.value.toLowerCase().trim() !== "elevates") {
      console.log("wrong");
      reschecker.classList.remove("hidden");
      reschecker.textContent = "Wrong, try again";
      reschecker.style.color = "red";
    }
  }
  if (word === "evitlafs") {
    if (yourGuess.value.toLowerCase().trim() === "festival") {
      console.log("good");
      reschecker.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
      reschecker.textContent = "Correct";
      reschecker.style.color = "rgba(121, 190, 18, 0.767)";
      document.querySelector(".scorePl").textContent = scores++;
    } else if (yourGuess.value.toLowerCase().trim() !== "festival") {
      console.log("wrong");
      reschecker.classList.remove("hidden");
      reschecker.textContent = "Wrong, try again";
      reschecker.style.color = "red";
    }
  }
  if (word === "tictnonupua") {
    if (yourGuess.value.toLowerCase().trim() === "punctuation") {
      console.log("good");
      reschecker.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
      reschecker.textContent = "Correct";
      reschecker.style.color = "rgba(121, 190, 18, 0.767)";
      document.querySelector(".scorePl").textContent = scores++;
    } else if (yourGuess.value.toLowerCase().trim() !== "punctuation") {
      console.log("wrong");
      reschecker.classList.remove("hidden");
      reschecker.textContent = "Wrong, try again";
      reschecker.style.color = "red";
    }
  }
  if (word === "aselbabl") {
    if (yourGuess.value.toLowerCase().trim() === "baseball") {
      console.log("good");
      reschecker.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
      reschecker.textContent = "Correct";
      reschecker.style.color = "rgba(121, 190, 18, 0.767)";
      document.querySelector(".scorePl").textContent = scores++;
    } else if (yourGuess.value.toLowerCase().trim() !== "baseball") {
      console.log("wrong");
      reschecker.classList.remove("hidden");
      reschecker.textContent = "Wrong, try again";
      reschecker.style.color = "red";
    }
  }
  if (word === "oncterec") {
    if (yourGuess.value.toLowerCase().trim() === "concrete") {
      console.log("good");
      reschecker.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
      reschecker.textContent = "Correct";
      reschecker.style.color = "rgba(121, 190, 18, 0.767)";
      document.querySelector(".scorePl").textContent = scores++;
    } else if (yourGuess.value.toLowerCase().trim() !== "concrete") {
      console.log("wrong");
      reschecker.classList.remove("hidden");
      reschecker.textContent = "Wrong, try again";
      reschecker.style.color = "red";
    }
  }
  if (word === "ycerelc") {
    if (yourGuess.value.toLowerCase().trim() === "recycle") {
      console.log("good");
      reschecker.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
      reschecker.textContent = "Correct";
      reschecker.style.color = "rgba(121, 190, 18, 0.767)";
      document.querySelector(".scorePl").textContent = scores++;
    } else if (yourGuess.value.toLowerCase().trim() !== "recycle") {
      console.log("wrong");
      reschecker.classList.remove("hidden");
      reschecker.textContent = "Wrong, try again";
      reschecker.style.color = "red";
    }
  }
  if (word === "ytgteasr") {
    if (yourGuess.value.toLowerCase().trim() === "strategy") {
      console.log("good");
      reschecker.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
      reschecker.textContent = "Correct";
      reschecker.style.color = "rgba(121, 190, 18, 0.767)";
      document.querySelector(".scorePl").textContent = scores++;
    } else if (yourGuess.value.toLowerCase().trim() !== "strategy") {
      console.log("wrong");
      reschecker.classList.remove("hidden");
      reschecker.textContent = "Wrong, try again";
      reschecker.style.color = "red";
    }
  }
  if (word === "ybtreil") {
    if (yourGuess.value.toLowerCase().trim() === "liberty") {
      console.log("good");
      reschecker.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
      reschecker.textContent = "Correct";
      reschecker.style.color = "rgba(121, 190, 18, 0.767)";
      document.querySelector(".scorePl").textContent = scores++;
    } else if (yourGuess.value.toLowerCase().trim() !== "liberty") {
      console.log("wrong");
      reschecker.classList.remove("hidden");
      reschecker.textContent = "Wrong, try again";
      reschecker.style.color = "red";
    }
  }
  if (word === "tednureav") {
    if (yourGuess.value.toLowerCase().trim() === "adventure") {
      console.log("good");
      reschecker.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
      reschecker.textContent = "Correct";
      reschecker.style.color = "rgba(121, 190, 18, 0.767)";
      document.querySelector(".scorePl").textContent = scores++;
    } else if (yourGuess.value.toLowerCase().trim() !== "adventure") {
      console.log("wrong");
      reschecker.classList.remove("hidden");
      reschecker.textContent = "Wrong, try again";
      reschecker.style.color = "red";
    }
  }
  if (word === "eantpnos") {
    if (yourGuess.value.toLowerCase().trim() === "spontane") {
      console.log("good");
      reschecker.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
      reschecker.textContent = "Correct";
      reschecker.style.color = "rgba(121, 190, 18, 0.767)";
      document.querySelector(".scorePl").textContent = scores++;
    } else if (yourGuess.value.toLowerCase().trim() !== "spontane") {
      console.log("wrong");
      reschecker.classList.remove("hidden");
      reschecker.textContent = "Wrong, try again";
      reschecker.style.color = "red";
    }
  }
  if (word === "tievsopi") {
    if (yourGuess.value.toLowerCase().trim() === "positive") {
      console.log("good");
      reschecker.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
      reschecker.textContent = "Correct";
      reschecker.style.color = "rgba(121, 190, 18, 0.767)";
      document.querySelector(".scorePl").textContent = scores++;
    } else if (yourGuess.value.toLowerCase().trim() !== "positive") {
      console.log("wrong");
      reschecker.classList.remove("hidden");
      reschecker.textContent = "Wrong, try again";
      reschecker.style.color = "red";
    }
  }
});
// The end
document.querySelector(".scorePl").textContent = scores++;

// const nextBtn = document.querySelector(".next");

// nextBtn.addEventListener("click", function () {
//   index = Math.floor(Math.random() * words.length);
//   word = words[index];
//   document.querySelector(".random-word").textContent = `"${word}"`;
//   reschecker.classList.add("hidden");
//   nextBtn.classList.add('hidden')
//   reschecker.textContent = "";
//   yourGuess.value = "";
// });
