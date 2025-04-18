// querySelector('css 선택자')
// HTML 에서 해당 요소를 검색하여 찾은 *첫 번째 요소 하나만* 반환
// 요소를 찾지 못하면 null 을 return 함!
const boxEl = document.querySelector('.box'); // 이것도 객체임!
console.log(boxEl);

// 찾아온 요소에 이벤트 리스너를 등록하기
// 이벤트: 마우스(click), 스크롤(scroll), 키보드(keydown, keypress, keyup 등등)
// 이벤트 종류: 학교가서 HTML Event Attributes 검색
// addEventListener() 메소드: 해당 요소에 지정한 이벤트(Event)가 발생하는지 듣고(Listen) 있다가
// 실제 이벤트가 발생하면 연결된 함수()(=Handler) 실행
boxEl.addEventListener('click', function () {
  console.log("Clicked!");

  // DOM API 중 가장 많이 쓰는 것 중 하나 = classList 속성: HTML 요소의 class 속성에 대한 제어 명령 포함!
  // 1. 클래스 추가해보기
  boxEl.classList.add('active'); // 요소에 active 라는 클래스 추가해줘!
  
  // 2. 확인해보기
  let hasActive = boxEl.classList.contains('active'); // 요소에 active 라는 클래스가 있는지 boolean 값을 줘바
  console.log(hasActive);
  
  // 3. 클래스 제거하기
  boxEl.classList.remove('active'); // 요소에 active 라는 클래스가 있으면 제거해줘!
  hasActive = boxEl.classList.contains('active');
  console.log(hasActive);
});
// classList 활용 예: active 라는 클래스에 미리 스타일을 지정해서(유틸리티) 클릭한 특정 요소에 스타일을 적용할 때


// 참고 링크
// 이벤트 종류: https://www.w3schools.com/jsref/dom_obj_event.asp (<-- 한 번 정도 슥 읽어볼 것!)
// HTML DOM 속성/메소드: https://www.w3schools.com/jsref/dom_obj_document.asp