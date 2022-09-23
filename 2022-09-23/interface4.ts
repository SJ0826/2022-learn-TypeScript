// interface: 항상 동일한 규칙을 쓰도록 약속하는 것.

interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
  age: 33,
  name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}
const capt = {
  age: 27,
  name: '캡틴'
}
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number; // 인자와 반환 타입 정의
}

var sum: SumFunction;
sum = function(a: number, b: number): number {
  return a + b;
}