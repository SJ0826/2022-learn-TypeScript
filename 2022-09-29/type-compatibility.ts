// 인터페이스
interface Developer {
  name: string;
  skill: string;
}

interface Person {
 name: string;
}

var developer: Developer;
var person: Person;

developer = person; // developer(왼쪽)가 더 많은 타입을 가지고 있기 때문
person = developer; // 오른쪽의 타입이 더 많아야 타입 호환이 이루어짐. 부분 집합의 개념

class  