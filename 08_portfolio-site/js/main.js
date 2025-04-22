// ScrollMagic 사용
const spyEls = document.querySelectorAll('section.scroll-spy');

const controller = new ScrollMagic.Controller();
spyEls.forEach(spyEl => {
  new ScrollMagic.Scene({
    // 감시할 장면 추가 및 옵션 지정
    triggerElement: spyEl, // 이놈을 감시
    triggerHook: 0.5, // 화면의 50% 지점에서 보여짐 여부를 감시(0 ~ 1)
  })
  .setClassToggle(spyEl, 'show') // 클래스를 넣어줘!
  .addTo(controller); // 컨트롤러에 장면을 할당해줘!(필수) - 라이브러리에서 지정한 문법으로 깊게 이해 X
})

// Swiper 사용
const swiper = new Swiper('.project .swiper', {
  // 슬라이드 옵션 지정
  direction: 'horizontal', // 수평 슬라이드(default)
  // direction: 'vertical' // 수직 슬라이드
  loop: true, // 반복 재생 여부, 1 -> 2 -> 3 다시 1 ...
  autoplay: { // 자동 재생 여부
    delay: 3000 // 5초마다 슬라이드가 바뀜(autoplay: true = 3000 (3초))
  },

  // 페이지네이션 옵션
  pagination: {
    el: '.project .swiper-pagination',
    clickable: true // 사용자의 페이지네이션 요소 제어 가능 여부
  },

  // 이전/다음 슬라이드 버튼 옵션
  navigation: {
    nextEl: '.project .swiper-button-next',
    prevEl: '.project .swiper-button-prev',
  },
});