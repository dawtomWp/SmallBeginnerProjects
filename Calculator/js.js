(function() {
let $numbers;
let $allOperators;
let $equal;
let $clear;
let $viewer;
let $num = '';
let $oldNum = '';
let $resultNum;
let $operator;
let $operatorText;

const startCalc = () => {
    $numbers = document.querySelectorAll('.num');
    $allOperators = document.querySelectorAll('.ops');
    $equal = document.querySelector('.equals');
    $clear = document.querySelector('.clear');
    $viewer = document.querySelector('.viewer');
    $oldNum = document.querySelector('.oldValue')
    $operatorText = document.querySelector('.operatorValue')

const clickNum = (e) => {
  
    $num = e.target.dataset.num;
    $viewer.innerText += $num; 
    $resultNum = $viewer.innerText
}
const clickOperator = (e) => {
   $operator = e.target.dataset.ops
   if($operator !==0) {
       $oldNum.innerText = $resultNum;
       $operatorText.innerText = $operator
       $viewer.innerText = '';
       console.log($oldNum, $resultNum)
   } else {
    $resultNum = $viewer.innerText
   }
}
const result = () => {
    const operator = $operatorText.innerText;
    const firstNum = parseFloat($oldNum.innerText,10);
    const secondNum = parseFloat($viewer.innerText,10)
    
    switch (operator) {
        case "+":
          $resultNum = firstNum + secondNum;
          break;
  
        case "-":
          $resultNum = firstNum - secondNum;
          break;
  
        case "*":
          $resultNum = firstNum * secondNum;
          break;
  
        case "/":
          $resultNum = firstNum / secondNum;
          break;
  
        default:
          $resultNum = 'Error'
      }
      $viewer.innerText = $resultNum;
      $operatorText.innerText='';
      $oldNum.innerText = ''; 
}
const clear = () => {
    $operatorText.innerText= '';
    $oldNum.innerText = '';
    $viewer.innerText = '';
}

$clear.addEventListener('click',clear)
$equal.addEventListener('click',result)
$numbers.forEach(number=>{
    number.addEventListener('click',clickNum)
})
$allOperators.forEach(operator => {
    operator.addEventListener('click',clickOperator)
})
}
startCalc()
})()

