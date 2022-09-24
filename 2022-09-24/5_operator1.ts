var seho: string | number | boolean;
function logMessage(value: string | number) { //유니온 타입: 특정 변수나 파리미터에 하나의 타입 이상을 쓸 수 있게 만든다.
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if(typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);