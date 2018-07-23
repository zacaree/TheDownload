

export default function wipNotes() {
  const notesBtn = document.querySelector('.notesBtn');
  const notes = document.querySelectorAll('.wip');
  let notesOn = false;

  
  function toggleNotes() {
    if (notesOn) {
      notes.forEach(note => {
        note.style.display = 'block';
      })
    } else {
      notes.forEach(note => {
        note.style.display = 'none';
      })
    }
    btnText();
  }


  function btnText () {
    notesOn ? notesBtn.textContent = 'Notes On' : notesBtn.textContent = 'Notes Off';
    notesOn = !notesOn;
  }


  notesBtn.addEventListener('click', toggleNotes, false);
  toggleNotes();
}
