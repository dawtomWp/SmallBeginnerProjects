//ball shake
const shakeBall = ball => {
    TweenMax.to(ball, 0.1, {x:"+=20", yoyo:true, repeat:5});
    TweenMax.to(ball, 0.1, {x:"-=20", yoyo:true, repeat:5});
}
//roll answer
const rollReply = () => {
    const answer = document.querySelector('.answer')
    const textsArray = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes, definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];

    const yourReply = Math.floor(Math.random()*textsArray.length)
    answer.textContent = `Reply: ${textsArray[yourReply]}`

}
const clearAnswer = () =>{
    const answer = document.querySelector('.answer');
    answer.textContent='';
}
const clearError = error => {
    error.textContent='';
}
const checkInput = (input,error,errorText, errorTextSecond) => {
   if(input.value !== '' && input.value.charAt(input.value.length-1) == '?') {
       setTimeout(rollReply,2000)
       clearError(error);
   }  else if (input.value !== '' && input.value.charAt(input.value.length-1) !== '?'){
        error.textContent = errorTextSecond;
        clearAnswer();
   } else {   
        error.textContent = errorText;
        clearAnswer();
   }
}
// start programm by click
const startAsking = () =>{
    const ball = document.querySelector('.ball-img')
    const input = document.querySelector('input')
    const error = document.querySelector('.error')
    ball.addEventListener('click',()=>{
        shakeBall(ball)
        checkInput(input,error,'Ask any question...', 'The question must end with "?"')
    })
}
startAsking();


