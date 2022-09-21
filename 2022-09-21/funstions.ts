// 함수의 파라미터의 타입을 정의하는 방식
function sum(a: number, b: number) {
  // 파라미터의 타입을 정의하는 것이 타스의 특징
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

//sum(10, 20, 30, 40, 50);  TS는 추가 인자를 받지 않는다.

// 함수의 옵셔널(선택적) 파라미터
function log(a: string, b?: string, c?: string) {}

log("hello world");
log("hello ts", "abc");
