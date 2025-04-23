const projectDiv = document.querySelector('.visual > .inner div:nth-child(2)');
const projectDivButton = document.querySelector('.visual > .inner div:nth-child(2) a');
projectDivButton.addEventListener('mouseover', () => {
  projectDiv.classList.add('animate__animated');
  projectDiv.classList.add('animate__heartBeat');
})
projectDivButton.addEventListener('mouseout', () => {
  projectDiv.classList.remove('animate__animated');
  projectDiv.classList.remove('animate__heartBeat');
})

// PROJECT 1
const readmeBtn1 = document.querySelector('.btn-README.README-1');
const readmePopUp1 = document.querySelector('.modal.modal-1');
const readmeClose1 = document.querySelector('.modal.modal-1 .btn-close');
readmeBtn1.addEventListener('click', () => {
  readmePopUp1.style.display = 'flex';
})
readmeClose1.addEventListener('click', () => {
  readmePopUp1.style.display = 'none';
})

// PROJECT 2
const readmeBtn2 = document.querySelector('.btn-README.README-2');
const readmePopUp2 = document.querySelector('.modal.modal-2');
const readmeClose2 = document.querySelector('.modal.modal-2 .btn-close');
readmeBtn2.addEventListener('click', () => {
  readmePopUp2.style.display = 'flex';
})
readmeClose2.addEventListener('click', () => {
  readmePopUp2.style.display = 'none';
})

const clipBoardBtn = document.querySelectorAll('.clipboard-link');
const clipBoardPopUp = document.querySelector('.clipboard');
const clipBoardClose = document.querySelector('.clipboard .clipboard-body a');

clipBoardBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    clipBoardPopUp.style.display = 'flex';
    })
})
clipBoardClose.addEventListener('click', () => {
  clipBoardPopUp.style.display = 'none';
})


// COMMON WINDOW ESCAPE KEY
document.onkeydown = (event) => {
  if (event.key === 'Escape') {
    readmePopUp1.style.display = 'none';
    readmePopUp2.style.display = 'none';
    clipBoardPopUp.style.display = 'none';
  }
}