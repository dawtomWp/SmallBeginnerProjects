const checkValue = () => {
    const selects = [...document.querySelectorAll('.math')];
    const costInfo = document.querySelector('.cost-info');
  
    const calculation = () => {
        const button = document.querySelector('.count');

        button.addEventListener('click',()=>{
           const newPrice = Number(selects[0].value);
           const newPerson = Number(selects[1].value);
           const newTip =Number(selects[2].value);

           costInfo.style.display='block';
           costInfo.classList.add('cost')

           if(selects[0,1].value > 0 && selects[2].value >0) {
             const result = (newPrice + (newPrice * newTip)) / newPerson;    
             costInfo.textContent = `Everyone should pay ${result.toFixed(2)} $`
           } else {        
              costInfo.textContent = `Enter the correct numbers!`
        }     
    })
    }
    calculation();
}
checkValue()


