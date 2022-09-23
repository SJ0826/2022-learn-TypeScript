// 인터페이스 확장: 기존 인터페이스를 상속
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

var cap: Developer = {
  name: '캡틴',
  age: 100,
  language: 'ts',
}