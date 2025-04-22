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

const btn1 = document.querySelector('.btn-p1 a:nth-child(1)');
btn1.addEventListener('mouseover', () => {
  btn1.classList.add('animate__animated');
  btn1.classList.add('animate__heartBeat');
})
btn1.addEventListener('mouseout', () => {
  btn1.classList.remove('animate__animated');
  btn1.classList.remove('animate__heartBeat');
})

const btn2 = document.querySelector('.btn-p1 a:nth-child(2)');
btn2.addEventListener('mouseover', () => {
  btn2.classList.add('animate__animated');
  btn2.classList.add('animate__heartBeat');
})
btn2.addEventListener('mouseout', () => {
  btn2.classList.remove('animate__animated');
  btn2.classList.remove('animate__heartBeat');
})

const btn3 = document.querySelector('.btn-p2 a:nth-child(1)');
btn3.addEventListener('mouseover', () => {
  btn3.classList.add('animate__animated');
  btn3.classList.add('animate__heartBeat');
})
btn3.addEventListener('mouseout', () => {
  btn3.classList.remove('animate__animated');
  btn3.classList.remove('animate__heartBeat');
})

const btn4 = document.querySelector('.btn-p2 a:nth-child(2)');
btn4.addEventListener('mouseover', () => {
  btn4.classList.add('animate__animated');
  btn4.classList.add('animate__heartBeat');
})
btn4.addEventListener('mouseout', () => {
  btn4.classList.remove('animate__animated');
  btn4.classList.remove('animate__heartBeat');
})