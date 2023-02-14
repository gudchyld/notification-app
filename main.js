console.log('Hello World!');

let main = document.getElementById('main')
let markRead = document.querySelector('.mark-read')
let unreadMsg = document.querySelectorAll(".bg-grey")
let count = unreadMsg.length;
let notifyNum = document.querySelector('.notify-num')
notifyNum.textContent = `${count}`;


main.addEventListener('click', (e) => {
  if (e.target.classList.contains('bg-grey')) {
     e.target.classList.remove('bg-grey');
     renderCount();
  }
});

markRead.addEventListener('click',() => {
  unreadMsg.forEach(item => item.classList.remove('bg-grey'));
  renderCount();
})

function renderCount(){
  let unreadMsg = document.querySelectorAll(".bg-grey")
  let count = unreadMsg.length;
  notifyNum.textContent = `${count}`;
  
}



console.log(count)

