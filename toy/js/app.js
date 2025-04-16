let maxInput = parseInt(prompt('게임 설정을 위한 숫자를 입력해 주세요!!!(1 ~ 100)'));
while(!maxInput) {
  maxInput = parseInt(prompt('다른거 말고 숫자를 입력하시라구요!!!(1 ~ 100)'));
}

let userInput = parseInt(prompt('매직 넘버는 몇일까~요??'));
while(!userInput) {
  userInput = parseInt(prompt('숫자 몰라요 숫자..?'));
}

const magicNumber = Math.floor((Math.random() * 100) + 1);
let cnt = 1;

function game(userInput) {
  while () {
    if (parseInt(userInput) < magicNumber) {
      cnt++;
      userInput = prompt('땡!!! 좀 더 높은 숫자를 말해보세요!');
    }
    else if (parseInt(userInput) > magicNumber) {
      cnt++;
      userInput = prompt('땡!!! 좀 더 낮은 숫자를 말해보세요!');
    }
    else if (userInput === 'quit') {
      console.log('게임 오버 ㅠㅠ');
    }
    else {
      console.log(`정답!!! 매직 넘버는 ${magicNumber} 였어요!!!`);
      break;
    }
  }
}
game();