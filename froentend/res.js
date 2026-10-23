async function showAlphabet(letter) {
  const data = ALPHABET_DATA[letter];
  const response= await fetch(`/get_alphabet/${letter}`)
   if (!response.ok) {
        console.log("Letter not found");
        return;
    }

  const data_db= await response.json()
  if (!data_db) return;

  currentLetter = letter;
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