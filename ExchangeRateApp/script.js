class Exchange {
    constructor(currencyOne,currencyTwo,amountOne,amountTwo) {
        this.currencyOne = document.querySelector(currencyOne);
        this.currencyTwo = document.querySelector(currencyTwo);
        this.amountOne = document.querySelector(amountOne);
        this.amountTwo = document.querySelector(amountTwo);
   
    }
}
class Swap extends Exchange {
   constructor(swapBtn,rateInfo) {
        super()
        this.swapBtn = document.querySelector(swapBtn);
        this.rateInfo = document.querySelector(rateInfo)     
    }
    calculate() {

     const showRate =()=>{

        const typeFrom = exchangeApp.currencyOne.value;
        const typeTo = exchangeApp.currencyTwo.value 

        fetch(`https://api.ratesapi.io/api/latest?base=${typeFrom}&symbols=${typeTo}`)
        .then(res => res.json())
        .then(data => {
            const exchange =data.rates[typeTo] * exchangeApp.amountOne.value;
            exchangeApp.amountTwo.value =exchange.toFixed(4)
            this.rateInfo.textContent =`${exchangeApp.amountOne.value} ${exchangeApp.currencyOne.value} = ${exchangeApp.amountTwo.value} ${exchangeApp.currencyTwo.value}`;
        });
     }
     this.swapBtn.addEventListener('click',()=>{
        const oldRate = exchangeApp.currencyOne.value;
        exchangeApp.currencyOne.value = exchangeApp.currencyTwo.value
        exchangeApp.currencyTwo.value = oldRate
 
    })
     window.addEventListener('load',showRate)
     exchangeApp.currencyTwo.addEventListener('change',showRate);
     exchangeApp.currencyOne.addEventListener('change',showRate);
     exchangeApp.amountOne.addEventListener('input',showRate);
     this.swapBtn.addEventListener('click',showRate)
    }   
}

const exchangeApp = new Exchange ('#currency-one','#currency-two','.amount-one','.amount-two')
const start = new Swap('.swap','.rate-info')
start.calculate()