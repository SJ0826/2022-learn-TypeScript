// sum 함수의 구조가 add 함수의 구조보다 더 크다.
var add = function(a: number) {
  // ...
}

var sum = function(a: number, b: number) { 
  // ...
}
sum = add;
// add = sum;

// 제네릭
interface Empty<T> {
 // ...
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}

var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;

