// 함수의 파라미터의 타입을 정의하는 방식
function sum(a: number, b: number) { // 파라미터의 타입을 정의하는 것이 타스의 특징
  return a + b; 
}

sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식
function sum2(a: number, b: number): number {
  return a + b;
}