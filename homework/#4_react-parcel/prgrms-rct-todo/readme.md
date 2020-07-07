[1주차] React 프로젝트 세팅: Parcel로 프로젝트 구성
프로젝트 생성
mkdir prgrms-rct-todo
cd prgrms-rct-todo
yarn init -y
프리티어 설정
yarn add prettier -D
package.json 에 format을 추가한다.

"scripts": {
"format": "prettier --write \"./\*_/_.{js,html,css}\""
},
.prettierrc 파일을 생성하고 다음과 같이 추가한다.

{
"printWidth": 120,
"tabWidth": 2,
"trailingComma": "es5",
"singleQuote": true,
"jsxBracketSameLine": true,
"arrowParens": "always"
}
→ https://prettier.io/docs/en/configuration.html 설정 참고

Visual Studio Code 플러그인 설정
비주얼슈티디오 코드를 사용할경우 Prettier - Code formatter 를 설치하고 다음과 같이 플러그인을 설정한다.

→ 플러그인 설정 require config, format on save
→ .prettierrc 파일이 루트에 존재

https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode 에 사용법에 대한 자세한 내용을 확인할 수 있습니다.

eslint 설정
eslint와 설치

yarn add -D eslint eslint-config-prettier
→ eslint-config-prettier 는 prettier과 충돌되는 룰들을 모두 비활성화 시켜줍니다.

.eslintrc.json 생성

node_modules/.bin/eslint --init 커맨드로 자동 생성 후 prettier extends에 추가

→ 각 질문에서 다음으로 선택 (To check syntax and find problems, JavaScript modules (import/export), None of these (no framework), No (not use typescript), Browser, JSON)

{
"env": {
"browser": true,
"es2020": true
},
"extends": ["eslint:recommended", "prettier"],
"parserOptions": {
"ecmaVersion": 11,
"sourceType": "module"
},
"rules": {
"no-console": "warn"
}
}
Parcel 번들러 추가
yarn add -D parcel-bundler
index.html을 만들고 index.js를 추가한다.

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>프로그래머스</title>
  </head>

  <body>
    <script src="src/index.js"></script>
  </body>
</html>
package.json에 다음 스크립트를 추가한다.

"scripts": {
"format": "prettier --write \"./\*_/_.{js,html,css}\"",
"dev": "parcel index.html"
},
react 설치
yarn add react react-dom
index.js를 다음과 같이 수정

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<App />, document.getElementById("root"));
eslint 플러그인 추가
yarn add -D eslint-plugin-import eslint-plugin-react
→ https://github.com/yannickcr/eslint-plugin-react 참고

.eslintrc.json 수정
{
"env": {
"browser": true,
"es2020": true
},
"extends": ["eslint:recommended", "prettier", "plugin:react/recommended", "prettier", "prettier/react"],
"parserOptions": {
"ecmaVersion": 11,
"sourceType": "module",
"ecmaFeatures": {
"jsx": true
}
},
"plugins": ["react", "import"],
"rules": {
"no-console": "warn"
},
"settings": {
"react": {
"version": "detect"
}
}
}
App 컴포넌트 생성
App 컴포넌트를 만들고 state를 속성으로 추가합니다.

import React, { Component } from 'react';

export default class App extends Component {
state = {};
render() {
return <div>hello</div>;
}
}
클래스 속성은 ECMAScript에 새로 추가되는 스펙인데 바벨을 이용하여 사용할 수 있습니다. 기본적으로 parcel은 바벨을 사용하는데 우리가 바벨 설정을 오버라이드 해서 원하는 스펙을 추가할 수 있습니다.

(https://github.com/tc39/proposal-class-fields)

yarn add -D babel-eslint @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @babel/preset-react
.babelrc 생성
{
"presets": ["@babel/preset-react", "@babel/preset-env"],
"plugins": ["@babel/plugin-proposal-class-properties"]
}

eslint에 다음 추가
{
…
"parser": "babel-eslint",
…
}
styled-jsx를 위한 babel 설정추가
styled-jsx을 설치합니다.

yarn add styled-jsx
babel pluin 에 다음을 추가합니다.

{
"presets": ["@babel/preset-react", "@babel/preset-env"],
"plugins": ["@babel/plugin-proposal-class-properties", "styled-jsx/babel"]
}
이제 style jsx를 사용할 수 있습니다.

export default () => (

  <div>
    <p>only this paragraph will get the style :)</p>

    { /* you can include <Component />s here that include
         other <p>s that don't get unexpected styles! */ }

    <style jsx>{`
      p {
        color: red;
      }
    `}</style>

  </div>
)
