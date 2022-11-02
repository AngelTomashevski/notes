//exercise 8
// 1. Create an empty array called “notes”.
//2. create a new class named Note which will have 1 constructor argument "descriptpion"
// 3. Create a function which:
// 3.1. Gets the values from the  input field in html file
// 3.2. Creates a new note object using class defined in step 2
// 3.3. Adds the newly created note object to the array.
//3.4 use this template for each note
//     <div class="paper pink">
//    <p>drink more water</p>
//    <div class="tape-section"></div>
//  </div>
// 3.5. displays every note inside <div class="flex-cont">

//3.6 resets the values of input to empty
// 4. Invoke the function when the button gets clicked (using “click” with
// addEventListener)
//5. as a challenge when you click to the note, remove the note from array and html ( tip : maybe you need to add something else to object together with description , something unique )
const inputNote = document.getElementById("noteInput");
const content = document.querySelector(".flex-cont");
const btn = document.getElementById("addNote");

const notes = [];

class Note {
  constructor(description) {
    this.description = description;
  }
  id = Math.random();
}

function printNotes(arr, input) {
  // zemanje na vrednosta od input
  // let input = input.value.trim();
  if (!input) return;
  // kreiranje na object od vnesenata vrednost vo input
  let note = new Note(input);
  // dodavanje na kreiraniot object vo prazniot array
  arr.push(note);
  console.log(notes);
  // za sekoj posebno vnesen element vo array printanje na html pliko
  let html = "";
  arr.forEach((note) => {
    html += `<div class="paper pink" id="${note.id}">
           <p>${note.description}</p>
           <div class="tape-section"></div>
           </div>`;
  });
  content.innerHTML = html;

  // brisenje na tekstot od inputot
  inputNote.value = "";
}

btn.addEventListener("click", () => {
  printNotes(notes, inputNote.value);
});

content.addEventListener("dblclick", (e) => {
  console.log(e.target.id);
  let noteId = parseFloat(e.target.id);
  let removeIndex = notes.findIndex((note) => {
    return note.id === noteId;
  });
  // brisenje na elementot od array
  notes.splice(removeIndex, 1);
  // brisenje na elementot od dom
  if (e.target.classList.contains("paper")) {
    e.target.remove();
  }

  console.log(notes);
});
