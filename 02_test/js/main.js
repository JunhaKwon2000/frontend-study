console.log('외부 스크립트'); // 콘솔창에 log(기록)를 남기겠다

const icon = document.querySelector('.searchIcon');
const input = document.getElementById('search');

icon.addEventListener('click', () => {
    input.focus(); // input에 커서 넣기!
});