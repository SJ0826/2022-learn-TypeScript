// 인덱싱: 배열의 데이터를 정의
interface StringArray {
  [index: number]: string // 인덱스를 숫자로 받고 배열의 값을 string으로 정의
}

var arr: StringArray = ['a', 'b', 'c'];
//arr[0] = 10; // Error