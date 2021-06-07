class Cleaner {
    constructor (noteDeletePanel, agree, cancelDel,noteArea) {
        this.noteDeletePanel = document.querySelector(noteDeletePanel);
        this.agree = document.querySelector(agree);
        this.cancelDel = document.querySelector(cancelDel)
        this.noteArea = document.querySelector(noteArea);
    }
    agreeDelete () {
        this.agree.addEventListener('click',()=>{
          this.noteArea.innerHTML = '';
          this.noteDeletePanel.style.display='none'
        })
    }
    cancelDelete () {
        this.cancelDel.addEventListener('click',()=>{
            this.noteDeletePanel.style.display='none'
        })
    }
    runDeletePanel() {
        this.agreeDelete();
        this.cancelDelete();
    }
}