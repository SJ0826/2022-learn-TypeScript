// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10);
// logText('하이');
// logText(true);

function logText<T>(text: T): T {
  console.log(text);
  return text;
}
logText('하이'); // 호출하는 시점에 타입을 넘겨준다.
