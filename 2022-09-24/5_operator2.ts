interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  someone.name // 유니온 타입은 인터페이스 두개를 연결했을 때 공통된 속성만 제공한다.
}