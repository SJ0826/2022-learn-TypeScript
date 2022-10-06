function fetchDate() {
  return {
    data: {
      name: 'capt',
      age: 100
    },
    config: {},
    statusText: '',
    headers: {}
  }
}

var result = fetchData();

var { data, config, statusText } = fetchData(); // 구조 분해 할당

var { data: captain } = fetchData();