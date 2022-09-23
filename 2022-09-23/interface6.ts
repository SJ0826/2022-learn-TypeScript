interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj: StringRegexDictionary= {
  sth: /abc/,
  cssFile: /\.css$/, // css 확장자를 가진 모든 파일을 가져온다는 정규식.
  jsFile: /\.js$/, // js 확장자를 가진 모든 파일을 가져온다는 정규식.
}


Object.keys(obj).forEach(function(value) {

})
