
# GoldenDiscAwards Site Clone
 
![화면_캡처_2023-09-30_164635](https://github.com/mihye0924/GoldenDiscAwards/assets/71968785/f6a40d00-81fb-4161-bc29-9b7238811797)

------------

# Site Link
https://mihye0924.github.io/GoldenDiscAwards/ 

# Plan
> 작업용도: 홈페이지
> 
> 작업기간: 2023.09.01 ~ 2023.09.15
> 
> 작업 수: 1명


------------

#### Next.js 프로젝트 구조
기존 ‘src’ 폴더를 없애고, pages 폴더 안에 index.tsx, _app.tsx, _document.tsx 추가함
Next.js에서 페이지 관련 자바스크립트 파일들은 전부 pages 폴더에 보관하면 되며, pages 폴더에 보관한 파일들은 파일명 그대로 route가 된다. (ex. /posts/index.tsx: “/posts”)

1) React는 라이브러리이고, Next.js는 리액트의 프레임워크이다.
2) SEO를 위한 SSR를 가능하게 해주는 프레임워크
3) SSR이란?
- 리액트는 대표적인 CSR(client side rendering)입니다. 이러한 리액트의 CSR적인 부분에서 SSR 적으로 바꿔 주기 위해서 next.js와 같은 라이브러리를 사용합니다.

#### ⭐️ ServerSide Cycle
Next Server가 GET 요청을 받는다.
요청에 맞는 Page를 찾는다.
_app.tsx의 getInitialProps가 있다면 실행한다.
Page Component의 getInitialProps가 있다면 실행한다. pageProps들을 받아온다.
document.tsx의 getInitialProps가 있다면 실행한다. pageProps들을 받아온다.
모든 props들을 구성하고, _app.js > page Component 순서로 rendering.
모든 Content를 구성하고 _document.js를 실행하여 html 형태로 출력한다.

#### CSR vs. SSR
Next.js를 사용해야 하는 이유 (수많은 장점!)
1) 사전 렌더링 및 서버사이드 렌더링
서버 사이드 렌더링 기능을 제공하여 클라이언트 사이드 렌더링 환경보다 빠른 렌더링을 불러올 수 있.
2) Hot Code Reloading을 지원
Next 개발 환경에서는 코드 변경 사항이 저장되면 응용 프로그램을 자동으로 다시 로드한다.
3) 자동 코드 분할
자동 코드 분할 기능 덕분에 코드의 모든 가져오기각 번들로 묶여 각 페이지와 함께 제공된다.
결과적으로, 불필요한 코드가 페이지에 로드 되지 않는다.
4) 추가 설정이 필요 없음
Next.js는 기본적으로 웹팩과 바벨을 사용하고 있다. 따라서 이미 서버 사이드 렌더링 및 개발에 필요한 설정이 되어 있으므로 빠르게 개발을 시작할 수 있다.
사용하고 싶은 플러그인이 있다면 손쉽게 추가하여 사용할 수 있도록 지원을 하고 있다.
5) 타입스크립트가 내장됨
Next를 타입스크립트와 함께 사용할 때 타입 지원을 통해 편리함과 안정성을 얻을 수 있다.
Next는 타입스크립트 설정을 따로 할 필요 없이 사용할 수 있으며 타입스크립트를 지원하고 있다.
6) 파일기반 내비게이션 기능
리액트에서는 라우트를 위해서 react-dom-router 라이브러리를 사용하여 라우팅 설정을 해주어야 한다. 그로 인해 페이지의 경로에 대하여 직접 설정을 해줘야 한다.
하지만 Next.js 파일 시스템 기반 라우팅을 사용한다.
폴더의 경로에 따라 페이지의 경로가 설정되어 구축이 빠르고 관리가 편리하다는 장점이 있다.
(참고로, next.js는 next/link의 <Link /> 컴포넌트를 사용해서 클라이언트 사이드 네이게이션을 사용해야함)

------------ 

## Git Next Deploy

#### 1. gh-pages 설치
```
yarn add -D gh-pages
npm i --save-dev gh-pages
JavaScript
```

#### 2.package.json scripts에 세줄 추가 (및 수정)
```
"build": "next build && next export",
"predeploy": "npm run build",
"deploy": "touch out/.nojekyll && gh-pages -d out --dotfiles"
```

#### 3. next.config.js 수정
```
const nextConfig = {
  basePath: "/{레포지토리 이름}",
}
// 메인 레포지토리 (아이디.github.io) 라면 /로 적는다 
```

#### 4. yarn deploy를 입력한다.

#### 5. Repository 설정에서 gh-pages 브랜치를 골라준다.  
![image](https://github.com/mihye0924/GoldenDiscAwards/assets/71968785/8b6f528d-ad59-406d-b746-3f2a242ace7d)

------------
 
## Stacks

#### Environment    
<img src="https://github.com/mihye0924/react_context_app/assets/71968785/6e825b86-c259-48c2-a272-4286e74d9798" width="30">
<img src="https://github.com/mihye0924/react_context_app/assets/71968785/557f00bf-2f5f-4bc9-9d63-10565250d6f9" width="30">
<img src="https://github.com/mihye0924/react_context_app/assets/71968785/64f67e8b-759f-4063-a3bc-29dc3918e44b" width="30"> 

#### Config
<img src="https://github.com/mihye0924/react_context_app/assets/71968785/64725c2b-af8d-4891-9ef1-f1068d1fd019" width="30">

#### Development
<img src="https://github.com/mihye0924/GoldenDiscAwards/assets/71968785/f990ea8b-6073-45fc-8ff7-d98cd53c687c" width="30">
<img src="https://github.com/mihye0924/react_context_app/assets/71968785/4e1c1159-2dc7-421f-b247-f2d23a86c52f" width="30">
<img src="https://github.com/mihye0924/GoldenDiscAwards/assets/71968785/c715b201-cc4b-4ff7-9d45-1b3429c98a25" width="30">

