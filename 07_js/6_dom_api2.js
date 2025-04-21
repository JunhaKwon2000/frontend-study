const boxEls = document.querySelectorAll('.box'); // 찾은 모든 요소 반환
console.log(boxEls); // 찾은 요소들의 리스트 반환, DOM API 를 바로 적용 못함(element 에만 적용 가능)

// forEach() 메소드 사용: 배열에서 각 요소에 대한 반복 처리를 수행함
// argument 로 반복을 돌면서 꺼내온 요소를 처리하는 함수 작성
// 처리 함수 작성 시 매개변수(현재 가져온 요소, 요소의 인덱스) 순서가 중요!!

// boxEls.forEach(function(boxEl, index) {
//   console.log(index, boxEl);
//   boxEl.classList.add(`order-${index+1}`);
// })

boxEls.forEach((boxEl, index) => {
  console.log(index, boxEl);
  boxEl.classList.add(`order-${index+1}`);
})

// 요소의 내용 확인 및 수정
const boxEl = document.querySelector('.box');
const boxEl2 = document.querySelector('.order-2');
console.log(boxEl.textContent); // 요소의 내용 출력
boxEl.textContent = 'LOL';
console.log(boxEl.textContent);
boxEl2.innerText = 'TEXT';

// 참고: innerHTML - HTML 태그까지 조작하거나 삽입하고 싶을 때
boxEl.innerHTML = '<b>CHANGE!!</b>'