let $todoInput; // miejsce, gdzie użytkownik wpisuje treść
let $minuteInput;
let $hoursInput;
let $errorTodo;
let $alertInfo; // info o braku zadań / konieczności dodania tekstu
let $addBtn; // przycisk ADD - dodaje nowe elementy do listy
let $ulList; // nasza lista zadań, tagi <ul></ul>
let $newTask; // nowo dodany LI, nowe zadanie
let $allTasks; // lista wszystkich dodanych LI
let $idNumber = 2; // ID dodawane do każdego nowego zadania
let $popup; //pobrany popup
let $popupInfo; // alert w popupie, jak się doda pusty tekst
let $editedTodo; // edytowany Todo
let $popupInput; //tekst wpisywany w inputa w popup'ie
let $addPopupBtn; // przycisk "zatwierdź" w popup'ie
let $closeTodoBtn; //przycisk od zamykania popup'a
let $infoBtn;
let $infoModal;

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}
const createLi = () => {
    $idNumber++
    $errorTodo.style.visibility = 'hidden';
    $alertInfo.style.visibility ='hidden'
    $newTask = document.createElement('li')
    $newTask.innerText = $todoInput.value
    $newTask.setAttribute('id', $idNumber)
    $ulList.appendChild($newTask)
    createContent();
}
const createContent = () => {

    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools');
    $newTask.appendChild(toolsPanel);

    const deadline=document.createElement('p');
    deadline.classList.add('taskTime')
    deadline.innerText = 'Deadline:'

    const hoursInfo = document.createElement('p')
    hoursInfo.classList.add('yourHours');
    hoursInfo.innerText = `${$hoursInput.value}:`;


    const minutesInfo = document.createElement('p')
    minutesInfo.classList.add('yourMinutes');
    minutesInfo.innerText = `${$minuteInput.value}`;


   

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.innerHTML = 'EDIT';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

    toolsPanel.appendChild(deadline);
    toolsPanel.appendChild(hoursInfo);
    toolsPanel.appendChild(minutesInfo);
    toolsPanel.appendChild(completeBtn);
    toolsPanel.appendChild(editBtn);
    toolsPanel.appendChild(deleteBtn);

}
const errorInfo = () => {
   $errorTodo.style.visibility = 'visible';
}

const prepareDOMElements = () => {
    $todoInput = document.querySelector('.todo-input');

    $minuteInput = document.querySelector('.minute-input');
    $hoursInput = document.querySelector('.hours-input');
    $errorTodo = document.querySelector('.error-todo')
    $alertInfo = document.querySelector('.alert-info');
    $addBtn = document.querySelector('.add-btn');
    $ulList = document.querySelector('.todo-list ul');
    $allTasks = document.getElementsByTagName('li');
    $popup = document.querySelector('.popup');
    $popupInfo = document.querySelector('.popup-info');
    $popupInput = document.querySelector('.popup-input');
    $addPopupBtn = document.querySelector('.accept');
    $closeTodoBtn = document.querySelector('.cancel');
    $infoBtn = document.querySelector('.fab.fa-whmcs');
    $infoModal = document.querySelector('.infoModal')

  


}
const checkClick = e => {

if(e.target.classList.value !== '') {
    if(e.target.closest('button').classList.contains('complete')) {
        const icon = e.target.closest('i');
        icon.style.fontSize='0'
       
         e.target.closest('button').disabled = true;
     
        const curDate = new Date()
        const hourDiv = e.target.closest('div')
 
        const taskHour = new Date();
        const getHour = parseInt(hourDiv.childNodes[1].innerText,10);
        const getMinutes = parseInt(hourDiv.childNodes[2].innerText,10);
        taskHour.setHours(getHour,getMinutes,0)

             if(taskHour > curDate) {
            hourDiv.closest('li').classList.add('successTask');
            e.target.innerHTML=''
            e.target.closest('button').innerText='DONE IN TIME'
        
             } else {
            hourDiv.closest('li').classList.add('loseTask');
            e.target.removeEventListener('click',checkClick);
            e.target.closest('button').innerText='DELAY'
            }
        } else if (e.target.closest('button').classList.contains('edit')) {
        editTask(e)
        } else {
        removeTask(e)
    }
  }
  
}
const editTask = e => {
    $popup.style.display = 'block';

    const editLi = e.target.closest('li').id;

    $editedTodo = document.getElementById(editLi)
    $popupInput.value = $editedTodo.firstChild.textContent;
    console.log($editedTodo)

}
const changeTodo = () => {
if($popupInput.value !=='') {
    $editedTodo.firstChild.textContent = $popupInput.value; 
    $popup.style.display='none';
    $popupInfo.innerText = '';
} else {
     $popupInfo.innerText = 'You cannot add empty phrase'
}
}
const closePopup = () => {
    $popup.style.display = 'none';
    $popupInfo.innerText='';
}
const removeTask = e => {
    e.target.closest('li').remove();
    if ($allTasks.length === 0) {
        $alertInfo.style.visibility ='visible'
    }
}
const showInstruction = () => {
  if(!($infoModal.style.display === 'flex')) {
      $infoModal.style.display = 'flex'
  } else {
      $infoModal.style.display = 'none'
  }
  $infoModal.classList.toggle('modal-animation');
}




const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
    $todoInput.addEventListener('keyup', enterCheck);
    $minuteInput.addEventListener('keyup', enterCheck);
    $ulList.addEventListener('click',checkClick)
    $addPopupBtn.addEventListener('click',changeTodo);
    $closeTodoBtn.addEventListener('click',closePopup)
    $infoBtn.addEventListener('click',showInstruction);
}
const enterCheck = () => {
    event.keyCode === 13 ? addNewTask() : false;
}

const addNewTask = () => {
    $todoInput.value !== '' && $minuteInput.value !== '' && $hoursInput.value !== '' && $minuteInput.value < 60 && $hoursInput.value < 24 ? createLi() : errorInfo();


}

document.addEventListener('DOMContentLoaded', main);

