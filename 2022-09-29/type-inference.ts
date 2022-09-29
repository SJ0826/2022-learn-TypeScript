// 타입 추론 기본 1

var a = 10;

 function getB(b = 10) {
  var c = 'hi';
  return b + c; 
 }

// 타입 추론 기본 2:  제네릭의 값을 타입스크립트 내부의 변수의 타입까지 추론한다.
interface Dropdown<T> {
  value: T;
  title: string;
}
var shoppingItem: Dropdown<string> = {
  value: 'abc',
  title: 'hello'
}

