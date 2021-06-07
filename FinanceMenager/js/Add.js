class Add extends Operation {
    constructor (saveBtn,cancelBtn,name,amount,category) {
    super();
    this.saveBtn = document.querySelector(saveBtn);
    this.cancelBtn = document.querySelector(cancelBtn)
    this.name = document.querySelector(name)
    this.amount = document.querySelector(amount)
    this.category = document.querySelector(category)
    }
    save () {
        this.saveBtn.addEventListener('click',()=>{
            if(this.name.value !=='' && this.amount.value !=='' && this.category.value !=='0') {
                console.log('myk')
        
                createOperation.creator();
            } else {
                alert('Fill in all fields')
            }
        })      
    }
    cancel() {
        this.cancelBtn.addEventListener('click',()=>{
            operationsPanel.addPanel.style.display='none'
        })
    }
    clearPanel() {
        this.name.value = '';
        this.amount.value = '';
        this.category.value ='none';
        operationsPanel.addPanel.style.display = 'none'
    }
    run() {
        this.save()
        this.cancel();
    }
}


