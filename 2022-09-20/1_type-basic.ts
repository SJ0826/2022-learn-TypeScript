// JS 문자열
//var str = 'hello';

// TS 문자열
let str: string = 'hello';

// TS 숫자
let num: number = 10;

// JS 배열 
//let arr = [1, 2, 3];

// TS 배열
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> =['Cat', 'Thor', 'Hulk', ];
let items: number[] = [1, 2, 3]; // 객체 리터럴

// TS 튜플: 배열 인덱스의 타입을 정의한다.
let address: [string, number] = ['gangnam', 100];

// TS 객체
let obj: Object = {};
//let person: object = {
//  name: 'capt',
//  age: 100
//};
let person: { name: string, age: number} = {
  name: 'thor',
  age: 1000
}

// TS 진위값
let show: boolean = true;