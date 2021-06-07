class Creator extends Add {
    constructor (income,expenses,money) {
        super()
        this.income = document.querySelector(income);
        this.expenses = document.querySelector(expenses);
        this.money = document.querySelector(money);
        this.myMoney=3500
     

    }
    creator() {
        const options = [...document.querySelectorAll('option')]
        const createDiv = document.createElement('div')
        createDiv.classList.add('transaction')

        const addTitle = addTransaction.name.value;
        const addAmount = addTransaction.amount.value;
      
        const icons = ['fas fa-money-bill-wave','fas fa-cart-arrow-down','fas fa-hamburger','fas fa-film']

        const addTo = () =>{
           console.log(addTransaction.category.value -1)
            const chooseIcon= icons[addTransaction.category.value -1]

            createDiv.innerHTML = `
            <p class="transaction-name"><i class="${chooseIcon}"></i>${addTitle}</p>
            <p class="transaction-amount">${addAmount}zł <button class="delete"><i class="fas fa-times"></i></button></p>
            `
        }
        if(addTransaction.category.value ==='1') {
            this.income.appendChild(createDiv)
            this.myMoney += parseInt(addTransaction.amount.value,10)
            addTo()
        } else if(addTransaction.category.value !=='0') {
            this.expenses.appendChild(createDiv)
            this.myMoney -= parseInt(addTransaction.amount.value,10)
            addTo()
        }
        this.money.textContent = `${this.myMoney}zł`


        const xbuttons = [...document.getElementsByClassName('delete')]
        
        xbuttons.forEach((xbutton)=>{
            xbutton.parentElement.addEventListener('click',(e)=>{

               const delbutton = e.target.parentElement;
               const divToDelete = delbutton.parentElement
               const final =divToDelete.parentElement
               const lowerAmount = parseFloat(final.childNodes[3].textContent)
    
               if(final.parentElement.classList.contains('income-area')) {
                this.income.removeChild(final)
                this.myMoney -=lowerAmount
             }  else {
                this.expenses.removeChild(final)
                this.myMoney +=lowerAmount
             }
             this.money.textContent = `${this.myMoney}zł`
             

            })
        })
        
        addTransaction.clearPanel();   

    }
    clearAll() {
        operationsPanel.deleteAll.addEventListener('click',()=>{
           this.income.innerHTML = '';
           this.expenses.innerHTML = '';
           this.myMoney = 0;
           this.money.textContent=`${this.myMoney}zł`
        })
    }
    deleteTask() {

    }
    run() {
        this.creator();
        this.clearAll();
        this.deleteTask();
    }
}




