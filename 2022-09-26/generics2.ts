// 단순히 타입을 바꿔 사용하기 위해서 중복코드가 있는 함수를 계속 생성하는 것은
// 유지보수에 좋지 않다.
// 타입을 정의하지 않고 인자를 받을 수 있는 이유는 함수의 파마리터의 타입을 정의하지 않았기 때문.
// function logText(text: string) {
//   console.log(text);
//   // text.split()
//   return text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// 유니온타입의 문제점: 인풋에 대한 해결은 되지만 반환값에 대한 해결이 안된다.
function logText(text: string | number) {
  console.log(text);
  // text.split()
  return text;
}

const a = logText('a');
//a.split(10); 에러. 타입을 정확히 선언해야만 내장함수를 사용할 수 있음.
logText(10);
// logNumber(10);
// logText(true);
