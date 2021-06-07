const sendForm = () => {

  const username = document.querySelector('#username');
  const pass = document.querySelector('#password');
  const repass = document.querySelector('#repassword');
  const email = document.querySelector('#email')
  const sendBtn = document.querySelector('.send');
  const clearBtn = document.querySelector('.clear');
  const popup = document.querySelector('.popup')

  const showError = (input,msg) => {

    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.error-text');

    formBox.classList.add('error');
    errorMsg.style.visibility = 'visible'
    errorMsg.textContent = msg;

  }
  const clearError = (input,msg) => {

    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.error-text');
    formBox.classList.remove('error');
    errorMsg.style.visibility = 'hidden'
  }
 


  const checkForm = input => {
     input.forEach(el => {
         if(el.value === '') {
            showError(el, el.placeholder) //el czyli obecnie to kazdy element tablicy a placeholder to jego placeholder z html
         } else {
            clearError(el, el.placeholder)
         }
     })  
  };

  const checkTerms = (input,min) => {
          if(input.value.length <min) {
             showError(input, `Minimum ${input.previousElementSibling.innerText.slice(0,-1)} length is ${min} char`)          
          }   
  }
  const checkPassword =(pass,repass) => {
    if(pass.value !== repass.value) {
        showError(repass, 'Passwords are not the same')
    }
  }
  const checkMail = email => {
       const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
       if(re.test(email.value)) {
           clearError(email)
       } else {
           showError(email, 'Incorrect e-mail address')
       }
  }
  const countErrors = () => {
      const allInputs = document.querySelectorAll('.form-box');
      let errors = 0;
      allInputs.forEach(input => {
          if(input.classList.contains('error')) {
              errors++
          }
      })
      if(errors === 0) {
          popup.classList.add('show-popup')
      }
  }
  
  sendBtn.addEventListener('click', (e)=>{
      e.preventDefault();
      checkForm([username,pass,repass,email]); //ta tablica staje sie naszym inputem ^ z argumentu
      checkTerms(username,5);
      checkTerms(pass,8);
      checkPassword(pass,repass);
      checkMail(email);
      countErrors();
  })
  
  clearBtn.addEventListener('click',(e)=>{
     e.preventDefault();
     [username,pass,repass,email].forEach(el => {
     el.value = '';
     clearError(el)
     })
  })

}
sendForm();
