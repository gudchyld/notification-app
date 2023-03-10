
// let main = document.getElementById('main')
let markRead = document.querySelector('.mark-read')
let unreadMsg = document.querySelectorAll(".bg-dark")
let count = unreadMsg.length;
let notifyNum = document.querySelector('.notify-num')
notifyNum.textContent = `${count}`;



document.addEventListener('click', (e) => {
  if (e.target.classList.contains('bg-dark')) {
     e.target.classList.remove('bg-dark');
     console.log(e.target.children)
     
     renderCount();
  }
});



markRead.addEventListener('click',() => {
  unreadMsg.forEach(item => item.classList.remove('bg-dark'));
  renderCount();
})



function renderCount(){
  let unreadMsg = document.querySelectorAll(".bg-dark")
  let count = unreadMsg.length;
  notifyNum.textContent = `${count}`;
  
}


// console.log(count)

