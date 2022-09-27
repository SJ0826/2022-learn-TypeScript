function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>('abc');
str.split('');
const login = logText<boolean>(true);
// logText('a');
// logText(10);

// 인터페이스에 제네릭을 선언하는 법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = { value: 10, seleted: false };

interface Dropdown<T> {
  value: T;
  seleted: boolean;
}
const obj: Dropdown<number> = { value: 'abc', selected: false };