const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const generateBtn = document.getElementById("generate-passwords-btn");
const password1Btn = document.getElementById("password-1-btn");
const password2Btn = document.getElementById("password-2-btn");
const inputEl = document.getElementById("input-el");

function getRandomIndex() {
  let randomIndex = Math.floor(Math.random() * characters.length);
  return randomIndex;
}

function generatePasswords(length) {
  let firstPassword = "";
  for (let i = 0; i < length; i++) {
    firstPassword += characters[getRandomIndex()];
    password1Btn.textContent = firstPassword;
  }

  let secondPassword = "";
  for (let i = 0; i < length; i++) {
    secondPassword += characters[getRandomIndex()];
    password2Btn.textContent = secondPassword;
  }
}

generateBtn.addEventListener("click", function () {
  generatePasswords(parseInt(inputEl.value));
});

password1Btn.addEventListener("click", () => {
  const valueToCopy = password1Btn.value;

  navigator.clipboard
    .writeText(valueToCopy)
    .then(() => {
      console.log("Copied to clipboard:", valueToCopy);
    })
    .catch((err) => {
      console.error("Failed to copy:", err);
    });
});

password2Btn.addEventListener("click", () => {
  const valueToCopy = password2Btn.value;

  navigator.clipboard
    .writeText(valueToCopy)
    .then(() => {
      console.log("Copied to clipboard:", valueToCopy);
    })
    .catch((err) => {
      console.error("Failed to copy:", err);
    });
});
