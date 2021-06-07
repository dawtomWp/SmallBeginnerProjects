class Creator {
    constructor(save,cancel,textarea,title,category,noteArea,notePanel,creatorError,cardId) {
        this.save = document.querySelector(save);
        this.cancel = document.querySelector(cancel);
        this.textarea = document.querySelector(textarea);
        this.title = document.querySelector(title)
        this.category = document.querySelector(category);
        this.noteArea = document.querySelector(noteArea);
        this.notePanel = document.querySelector(notePanel)
        this.creatorError = document.querySelector(creatorError)
        this.cardId = cardId;
      

    }
    cancelNote() {
       this.cancel.addEventListener('click',()=>{
          this.notePanel.style.display='none';
          this.title.value='';
          this.textarea.value = '';
          this.category.value='0';

       })
    }
    addNote() {

        const iconsArr = ['fab fa-shopify','fas fa-laptop-house','fas fa-igloo'];
        const colorArr = ['shopping','work','family']

        const newNote = document.createElement('div');
        newNote.classList.add('note');
        newNote.classList.add(colorArr[this.category.value -1])
        newNote.setAttribute('id', this.cardId);
        this.noteArea.appendChild(newNote);
        this.cardId++;

        const addTitle = this.title.value;
        const addContent = this.textarea.value;
        const addIcon = iconsArr[this.category.value -1]

        newNote.innerHTML = `
        <div class="note-header">
            <h3 class="note-title"><span class='${addIcon}'> ${addTitle}</h3>
            <button class="delete-note">
                <i class="fas fa-times icon"></i>
            </button>
        </div>

        <div class="note-body">${addContent}</div>`
 
        const xbuttons = [...document.getElementsByClassName('delete-note')]

        xbuttons.forEach((xbutton)=>{
            xbutton.parentElement.addEventListener('click',(e)=>{
        
               const delbutton = e.target.parentElement;
               const divToDelete = delbutton.parentElement
               this.noteArea.removeChild(divToDelete.parentElement)
            })
        })
    }

    createNote () {
    this.save.addEventListener('click',()=>{
        if(this.category.value !=='0' && this.textarea.value !=='' && this.title.value !=='') {

            this.addNote();
          
            this.notePanel.style.display='none';
            this.category.value='0';
            this.textarea.value = '';
            this.title.value='';
            this.creatorError.style.visibility='hidden'
        } else {
            this.creatorError.style.visibility='visible'
        } 
    })
    }
    runCreator() {
       this.createNote();
       this.cancelNote();
    }
   
}