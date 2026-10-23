// Frontend-only Balochi alphabet learning app.
// Keep your "images" and "audio" folders beside index.html, style.css and script.js.

const PAGE_NAMES = [
  "Balóchiay Áb",
  "Balóchiay Jwánáb",
  "Balóchiay Jotkáb",
  "Balóchiay Kassháb",
  "Drájén Kassháb",
  "Gwandhén Kassháb"
];

const PAGE_LETTERS = [
  ["A", "Á", "B", "CH", "D", "DH", "E", "É", "G", "H", "I", "J", "K", "L", "M", "N", "O", "Ó", "P", "R", "S", "SH", "T", "TH", "U", "W", "Y", "Z", "ZH"],
  ["B", "CH", "D", "DH", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "SH", "T", "TH", "W", "Y", "Z", "ZH"],
  ["CH", "DH", "SH", "TH", "ZH"],
  ["A", "Á", "E", "É", "I", "O", "Ó", "U"],
  ["Á", "É", "I", "Ó", "U"],
  ["A", "E", "O"]
];

const THEMES = [
  { primary: "#0ABDE3", bg: "#E3F7FC", hover: "#05A3C7", text: "#2F3542", columns: 4 },
  { primary: "#1E90FF", bg: "#F0F8FF", hover: "#70A1FF", text: "#2F3542", columns: 4 },
  { primary: "#2ED573", bg: "#F0FFF4", hover: "#7BED9F", text: "#2F3542", columns: 2 },
  { primary: "#9B59B6", bg: "#F9F0FF", hover: "#B07BCC", text: "#2F3542", columns: 2 },
  { primary: "#F39C12", bg: "#FFF9F0", hover: "#F8C471", text: "#2F3542", columns: 2 },
  { primary: "#F39C12", bg: "#FFF9F0", hover: "#F8C471", text: "#2F3542", columns: 1 }
];

const MAIN_AUDIO = [
  "audio/balochi_ab.ogg",
  "audio/balochi_jwanab.ogg",
  "audio/balochi_jotkab.ogg",
  "audio/balochi_kashab.ogg",
  "audio/Drajen_kasshab.ogg",
  "audio/Gwandhen_kasshab.ogg"
];

// The paths and words below were taken from the supplied Python application.
const ALPHABET_DATA = {
  "A":  { sound:"A.ogg", picture1:"a1.jpeg", picture2:"a2.png", example1:"Anár", example2:"Aap", category:["Balóchiay áb","Balóchiay kassháb","Gowandhén kassháb"] },
  "Á":  { sound:"AA.ogg", picture1:"AA1.jpeg", picture2:"AA2.jpeg", example1:"Ázmán", example2:"Ádénk", category:["Balóchiay áb","Balóchiay kassháb","Drájén kassháb"] },
  "B":  { sound:"B.ogg", picture1:"b1.jpeg", picture2:"b2.jpeg", example1:"Báli", example2:"Bág", category:["Balóchiay áb","Balóchiay jwánáb"] },
  "CH": { sound:"ch.ogg", picture1:"ch1.jpeg", picture2:"ch2.jpeg", example1:"Chamm", example2:"Cháder", category:["Balóchiay áb","Balóchiay jwánáb","Balóchiay jothkáb"] },
  "D":  { sound:"D.ogg", picture1:"d1.jpeg", picture2:"d2.jpeg", example1:"Dast", example2:"Dám", category:["Balóchiay áb","Balóchiay jwánáb"] },
  "DH": { sound:"dh.ogg", picture1:"dh1.jpeg", picture2:"dh2.jpeg", example1:"Dhál", example2:"Dhagár", category:["Balóchiay áb","Balóchiay jwánáb","Balóchiay jothkáb"] },
  "E":  { sound:"e.ogg", picture1:"e1.jpeg", picture2:"e2.jpg", example1:"Estár", example2:"Ensán", category:["Balóchiay áb","Balóchiay kassháb","Gwandhén kassháb"] },
  "É":  { sound:"ee.ogg", picture1:"ee1.jpeg", picture2:"ee2.jpg", example1:"Éshérk", example2:"Éwok", category:["Balóchiay áb","Balóchiay kassháb","Drájén kassháb"] },
  "G":  { sound:"g.ogg", picture1:"g1.jpeg", picture2:"g2.jpeg", example1:"Gósh", example2:"Gwandhu", category:["Balóchiay áb","Balóchiay jwánáb"] },
  "H":  { sound:"h.ogg", picture1:"h1.jpeg", picture2:"h2.jpeg", example1:"Hayk", example2:"Heshtápushtá", category:["Balóchiay áb","Balóchiay jwánáb"] },
  "I":  { sound:"i.ogg", picture1:"i1.jpeg", picture2:"i2.jpeg", example1:"Inch", example2:"Ishq", category:["Balóchiay áb","Balóchiay kassháb","Drájén kassháb"] },
  "J":  { sound:"j.ogg", picture1:"j1.jpeg", picture2:"j2.jpeg", example1:"Jig", example2:"Jámag", category:["Balóchiay áb","Balóchiay jwánáb"] },
  "K":  { sound:"k.ogg", picture1:"k1.jpeg", picture2:"k2.jpg", example1:"Kóndh", example2:"Kóh", category:["Balóchiay áb","Balóchiay jwánáb"] },
  "L":  { sound:"L.ogg", picture1:"l1.jpg", picture2:"l2.jpg", example1:"Lonth", example2:"Lóg", category:["Balóchiay áb","Balóchiay jwánáb"] },
  "M":  { sound:"m.ogg", picture1:"m1.jpeg", picture2:"m2.jpeg", example1:"Móz", example2:"Métag", category:["Balóchiay áb","Balóchiay jwánáb"] },
  "N":  { sound:"n.ogg", picture1:"n1.jpeg", picture2:"n2.jpeg", example1:"Nibág", example2:"Nód", category:["Balóchiay áb","Balóchiay jwánáb"] },
  "O":  { sound:"o.ogg", picture1:"o1.jpeg", picture2:"o2.jpg", example1:"Ostád", example2:"Owr", category:["Balóchiay áb","Balóchiay kassháb","Gwandhén kassháb"] },
  "Ó":  { sound:"oo.ogg", picture1:"oo1.jpeg", picture2:"oo2.jpeg", example1:"Ózhnág", example2:"Óshnákandh", category:["Balóchiay áb","Balóchiay kassháb","Drájén kassháb"] },
  "P":  { sound:"p.ogg", picture1:"p1.jpeg", picture2:"p2.jpeg", example1:"Poll", example2:"Pirok", category:["Balóchiay áb","Balóchiay jwánáb"] },
  "R":  { sound:"r.ogg", picture1:"r1.jpeg", picture2:"r2.jpg", example1:"Róch", example2:"Registán", category:["Balóchiay áb","Balóchiay jwánáb"] },
  "S":  { sound:"s.ogg", picture1:"s1.jpeg", picture2:"s2.jpeg", example1:"Seng", example2:"Sárbán", category:["Balóchiay áb","Balóchiay jwánáb"] },
  "SH": { sound:"sh.ogg", picture1:"sh1.jpeg", picture2:"sh2.jpg", example1:"Shir", example2:"Shawáng", category:["Balóchiay áb","Balóchiay jwánáb","Balóchiay jothkáb"] },
  "T":  { sound:"t.ogg", picture1:"t1.jpeg", picture2:"t2.jpeg", example1:"Ták", example2:"Talwár", category:["Balóchiay áb","Balóchiay jwánáb"] },
  "TH": { sound:"th.ogg", picture1:"th1.jpeg", picture2:"th2.jpeg", example1:"Thásin", example2:"Thamátar", category:["Balóchiay áb","Balóchiay jwánáb","Balóchiay jothkáb"] },
  "U":  { sound:"u.ogg", picture1:"u1.jpeg", picture2:"u2.jpeg", example1:"Ud", example2:"Ushter", category:["Balóchiay áb","Balóchiay kassháb","Drájén kassháb"] },
  "W":  { sound:"w.ogg", picture1:"w1.jpeg", picture2:"w2.jpg", example1:"Wád", example2:"Waqt", category:["Balóchiay áb","Balóchiay jwánáb"] },
  "Y":  { sound:"y.ogg", picture1:"y1.jpeg", picture2:"y2.jpeg", example1:"Yakk", example2:"Yásh", category:["Balóchiay áb","Balóchiay jwánáb"] },
  "Z":  { sound:"z.ogg", picture1:"z1.jpeg", picture2:"z2.jpeg", example1:"Zer", example2:"Zamin", category:["Balóchiay áb","Balóchiay jwánáb"] },
  "ZH": { sound:"zh.ogg", picture1:"zh1.jpeg", picture2:"zh2.jpg", example1:"Zháng", example2:"Zhámmag", category:["Balóchiay áb","Balóchiay jwánáb","Balóchiay jothkáb"] }
};

const topNav = document.getElementById("topNav");
const pageTitle = document.getElementById("pageTitle");
const letterGrid = document.getElementById("letterGrid");
const bigLetter = document.getElementById("bigLetter");
const mainExample = document.getElementById("mainExample");
const exampleNumber = document.getElementById("exampleNumber");
const picture1 = document.getElementById("picture1");
const picture2 = document.getElementById("picture2");
const fallback1 = document.getElementById("fallback1");
const fallback2 = document.getElementById("fallback2");
const word1 = document.getElementById("word1");
const word2 = document.getElementById("word2");
const categoryList = document.getElementById("categoryList");
const pageAudioBtn = document.getElementById("pageAudioBtn");
const letterAudioBtn = document.getElementById("letterAudioBtn");
const nextBtn = document.getElementById("nextBtn");

let currentPage = 0;
let currentLetter = "A";
let currentletter_audio=""
let currentAudio = null;

function setTheme(index) {
  const theme = THEMES[index];
  document.documentElement.style.setProperty("--primary", theme.primary);
  document.documentElement.style.setProperty("--background", theme.bg);
  document.documentElement.style.setProperty("--hover", theme.hover);
  document.documentElement.style.setProperty("--text", theme.text);
}

function renderNavigation() {
  topNav.innerHTML = "";
  PAGE_NAMES.forEach((name, index) => {
    const button = document.createElement("button");
    button.className = "nav-button";
    button.textContent = name;
    button.type = "button";
    button.addEventListener("click", () => switchPage(index));
    topNav.appendChild(button);
  });
}

function switchPage(index) {
  currentPage = index;
  setTheme(index);
  pageTitle.textContent = PAGE_NAMES[index];

  [...topNav.children].forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex === index);
  });

  letterGrid.style.setProperty("--columns", THEMES[index].columns);
  letterGrid.innerHTML = "";

  PAGE_LETTERS[index].forEach(letter => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "letter-button";
    button.textContent = letter;
    button.addEventListener("click", () => showAlphabet(letter));
    letterGrid.appendChild(button);
  });

  showAlphabet(PAGE_LETTERS[index][0]);
}


async function showAlphabet(letter) {
  const data = ALPHABET_DATA[letter];
  const response= await fetch(
   // `/get_alphabet/${letter}`
     `http://localhost:3000/get_alphabet/${encodeURIComponent(letter)}`
  )
   if (!response.ok) {
        console.log("Letter not found");
        return;
    }

  const data_db= await response.json()
  if (!data_db) return;

  currentLetter = letter;
  currentletter_audio=data_db.soundurl
  bigLetter.textContent = letter;
  mainExample.textContent = data_db.word1;
  exampleNumber.textContent = data_db.word1;
  word1.textContent = data_db.word1;
  word2.textContent = data_db.word2;
  fallback1.textContent = data_db.word1;
  fallback2.textContent = "📁";

  updatePicture(picture1, fallback1, `${data_db.imageurl1}`, data_db.word1);
  updatePicture(picture2, fallback2, `${data_db.imageurl2}`, "Second example picture");

  categoryList.innerHTML = "";
  data.category.forEach(category => {
    const chip = document.createElement("span");
    chip.className = "category-chip";
    chip.textContent = category;
    categoryList.appendChild(chip);
  });

  [...letterGrid.children].forEach(button => {
    button.classList.toggle("selected", button.textContent === letter);
  });

  letterAudioBtn.classList.remove("playing");
}


function updatePicture(img, fallback, src, alt) {
  img.classList.remove("visible");
  fallback.classList.remove("hidden");
  img.alt = alt;
  img.onerror = () => {
    img.classList.remove("visible");
    fallback.classList.remove("hidden");
  };
  img.onload = () => {
    img.classList.add("visible");
    fallback.classList.add("hidden");
  };
  img.src = src;
}

function playAudio(path, button) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
  document.querySelectorAll(".sound-button").forEach(btn => btn.classList.remove("playing"));

  const audio = new Audio(path);
  currentAudio = audio;
  button.classList.add("playing");
  audio.addEventListener("ended", () => {
    button.classList.remove("playing");
    if (currentAudio === audio) currentAudio = null;
  });
  audio.addEventListener("error", () => {
    button.classList.remove("playing");
    alert(`Could not play this audio file:\n${path}\n\nCheck that the file exists in your audio folder and that its filename matches.`);
    if (currentAudio === audio) currentAudio = null;
  });
  audio.play().catch(() => {
    button.classList.remove("playing");
    alert(`Audio could not be played. Check the file path:\n${path}`);
  });
}

pageAudioBtn.addEventListener("click", () => playAudio(MAIN_AUDIO[currentPage], pageAudioBtn));
letterAudioBtn.addEventListener("click", () => {

  

  const data = ALPHABET_DATA[currentLetter];
  const audio=currentletter_audio
  //if (data) playAudio(`audio/${data.sound}`, letterAudioBtn);
  if (data) playAudio(`${audio}`, letterAudioBtn);
  //console.log(audio)
});

nextBtn.addEventListener("click", () => {
  const letters = PAGE_LETTERS[currentPage];
  const currentIndex = letters.indexOf(currentLetter);
  const nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % letters.length;
  showAlphabet(letters[nextIndex]);
});

renderNavigation();
switchPage(0);
