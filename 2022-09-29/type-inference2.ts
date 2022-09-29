// 타입 추론 기본 3

interface Dropdown<T> {
  value: T;
  title: string;
}
interface DertailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}


var detailedItem: DertailedDropdown<string> = {
  title: 'abc',
  description: 'ab',
  value: 'a',
  tag: 'a'
}