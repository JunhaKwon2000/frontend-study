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