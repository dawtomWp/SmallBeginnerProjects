class Panel {
    constructor(addNote, deleteAll, noteField, noteDeletePanel){
       this.addNote = document.querySelector(addNote);
       this.deleteAll = document.querySelector(deleteAll);
       this.noteField = document.querySelector(noteField);
       this.noteDeletePanel = document.querySelector(noteDeletePanel);
 
    }
    addButton() {
        this.addNote.addEventListener('click',()=>{
            this.noteField.style.display='flex'
        })
      //  console.log(this.addNote, this.deleteAll, this.noteField, this.noteArea)
    }
    removeNotes() {
        this.deleteAll.addEventListener('click',()=>{
            this.noteDeletePanel.style.display='flex';
        })
    }
    runPanel() {
        this.addButton();
        this.removeNotes();
    }
}
