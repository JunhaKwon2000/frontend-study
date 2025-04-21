let i = 0;
const txt = '테스트테스트테스트';
const speed = 180;

function typeWriter() {
  if (i < txt.length) {
    document.querySelector('.intro').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();