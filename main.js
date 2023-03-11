
let markRead = document.querySelector('.mark-read')
let unreadMsg = document.querySelectorAll(".bg-dark")
let redDot = document.querySelectorAll('.small')


let count = unreadMsg.length;
let notifyNum = document.querySelector('.notify-num')
notifyNum.textContent = `${count}`;

document.addEventListener('click', (e) => {
  //when any element close to the element with class name 'bg-dark' is clicked, return to the element with class name 'bg-dark' and remove 'bg-dark' from its classlist

     if(e.target.parentElement.dataset.check){
     e.target.closest('.bg-dark').classList.remove('bg-dark');
     document.getElementById(e.target.parentElement.dataset.check).style.display = 'none'
    }
     
     renderCount();
  })

markRead.addEventListener('click',() => {
  unreadMsg.forEach(item => item.classList.remove('bg-dark'));
  renderCount();
})

function renderCount(){
  let unreadMsg = document.querySelectorAll(".bg-dark")
  let count = unreadMsg.length;
  notifyNum.textContent = `${count}`;
  
}



