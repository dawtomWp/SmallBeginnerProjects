class Operation {
    constructor(add,deleteAll,styleWhite,styleBlack,addPanel,transactions) {
       this.add = document.querySelector(add);
       this.deleteAll = document.querySelector(deleteAll);
       this.styleWhite = document.querySelector(styleWhite);
       this.styleBlack = document.querySelector(styleBlack);
       this.addPanel = document.querySelector(addPanel)
       this.transactions = document.querySelectorAll(transactions);
    }
    showPanel() {
        this.add.addEventListener('click',()=>{
            this.addPanel.style.display = 'flex'
        })
    }
    setColor () {
        const root = document.documentElement
        this.styleBlack.addEventListener('click',()=>{
           root.style.setProperty('--first-color','#14161F')
           root.style.setProperty('--second-color','#F9F9F9')
           root.style.setProperty('--border-color','#F9F9F9')
        })
        this.styleWhite.addEventListener('click',()=>{
            root.style.setProperty('--first-color','#F9F9F9')
            root.style.setProperty('--second-color','#14161F')
            root.style.setProperty('--border-color','#14161F')
         })
    }
    run() {
        this.showPanel();
        this.setColor();
    }
}


