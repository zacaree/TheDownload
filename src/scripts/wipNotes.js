

export default function wipNotes() {
  const notesBtn = document.querySelector('.notesBtn');
  const notes = document.querySelectorAll('.wip');
  let notesOn = true;

  function toggleNotes() {
    console.log(notes);
    notes.forEach(note => {
      note.style.display = (
        note.style.display === 'block' || note.style.display === ''
      ) ? 'none' : 'block';
    })
    btnText();
  }

  function btnText () {
    notesOn ? notesBtn.textContent = 'Notes Off' : notesBtn.textContent = 'Notes On';
    notesOn = !notesOn;
  }

  notesBtn.addEventListener('click', toggleNotes, false);
}
