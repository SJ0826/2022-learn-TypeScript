interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}
// 유니온 타입은 인터페이스 두개를 연결했을 때 공통된 속성만 제공한다.
// function askSomeone(someone: Developer | Person) {
   
// }

// askSomeone({ name: '디벨로퍼', skill: '웹 개발'});
// askSomeone({ name: '캡틴', age: 100 });

function askSomeone(someone: Developer & Person) {
  someone.name
  someone.skill
  someone.age
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발', age: 34}); // 모든 속성을 다 넘거야함.
// 인터셉션은 연결된 인터페이스의 모든 속성을 제공한다. 
// 인터페이스를 모두 합친 하나의 타입
// 실무에서는 유니온타입을 더 자주 사용한다.
//var seho: string | number | boolean;
//var capt: string & number & boolean;