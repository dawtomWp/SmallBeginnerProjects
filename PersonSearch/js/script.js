//Typing welcome text and astart button function
const startSearch = () => {
  const shadow = document.querySelector('.shadow');
  const box = document.querySelector('.welcome');
  const btn = document.querySelector('.welcome-btn');
  const text = ['Hi my name is Sophia, I will help you find the love of life.',
  'Now, we will choose one of your old friends.',
  "Dont't worry, everyting will be fine.",
]
  let wordIndex = 0;
  let oldTime = 0;
  let speed = 60;
  let currentText = 0;

  shadow.style.display='none';

  const typing = (newTime) => {
    if (newTime - oldTime > speed) {
      if(wordIndex === text[currentText].length -1) {
        if(currentText === text.length-1) {
          return setTimeout(()=>{
            box.style.display='none';
            btn.style.display='block';
         
          },2000)
         
        }
        return setTimeout(()=>{
        box.textContent = '';
        currentText++;
        wordIndex = 0;
        requestAnimationFrame(typing)
      },2000)
    }
    oldTime = newTime;
    const letter = text[currentText].substr(wordIndex,1);
    box.textContent += letter;
    wordIndex++
    }
    requestAnimationFrame(typing);
  }
  typing()

  btn.addEventListener('click',()=>{
    shadow.style.display='flex';
    btn.style.display='none';
  });
}
startSearch()

//added search class (for training)
class LoveSearch {
    constructor(input,lists,ul) {
        this.input = input;
        this.lists = lists;
        this.ul = ul;
    }
    showAllCountries (e) {
    this.input.addEventListener('keyup',()=>{
     const searchText = this.input.value.toLowerCase().trim();
     this.lists.forEach(list => {
       const ask = list.textContent.toLowerCase().indexOf(searchText);
       if(ask !== -1) {
           list.style.display ='flex';
       }else {
           list.style.display = 'none';
        }
     })
    })
  }
}
const journey = new LoveSearch(document.querySelector('.search'), document.querySelectorAll('li'), document.querySelector('ul'));
journey.showAllCountries();

//function width categories filter 
const filterAction = () => {
    const types = document.querySelectorAll('select');
    const lists = document.querySelectorAll('li');
    const input = document.querySelector('.search');
    const appliedFilters = {};

    types.forEach((type) => {
      type.addEventListener('change', function(e) {
        const searchText = input.value.toLowerCase().trim();
        appliedFilters[this.id] = this.value;
        console.log(appliedFilters);     
        lists.forEach(function(list) {
          const ask = list.textContent.toLowerCase().indexOf(searchText);
          let canShow = true;
          // Iterate all applied filters to determine if the product can be displayed or not
          Object.keys(appliedFilters).forEach(function(key) {
            // If it is 'All' option, we still can display the product
            if (appliedFilters[key].toLowerCase() !== 'all' && list.getAttribute('data-' + key) !== appliedFilters[key].toLowerCase()) {
              canShow = false;
            }
          })
          if (canShow) {
            list.style.display = 'flex';
          } else {
            list.style.display = 'none';
          }
        })
      })
    })
  }
  filterAction();