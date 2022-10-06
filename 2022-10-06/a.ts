interface Hero {
  name: string;
  skill: string;
}

// const capt: Hero = {
//   name: 'capt',
//   skill: 'shield',
// };

// const capt: Hero = {};
const capt = {} as Hero;

// capt.name = 'capt';
// 인터페이스의 속성 값을 사용하지 않아도 에러가 나지 않는 위험성
// 확신이 있을 경우에만 사용하는 것을 권장
