interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'Tony', age: 33, skill: 'Iron Making' }
}
var tony = introduce();
console.log(tony.skill) //Error Developer 와 Person의 공통된 속성에만 접근할 수 있음.

if ((tony as Developer).skill) { // skill 속성에 접근하기 위한 타입 단언
  var skill = (tony as Developer).skill;
  console.log(tony.skill)
} else if ((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(tony.age)
}
 // 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}