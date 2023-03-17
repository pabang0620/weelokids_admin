# 앨리스헬스케어 윌로키즈 어드민 페이지 제작을 담당했다.

CSR과 SSR의 장점을 가진 Next.js를 회사에서는 웹 풀스택 개발이 간편한 이유로 Next와 TypeScript를 사용했다.
Style은 Styled-JSX 를 사용했다.

#### /Login
로그인 페이지 이다 Firebase를 사용한 구글 소셜 로그인으로 로그인 됐을때 console.log로 데이터를 넘겨받았다.

#### /manage
회원 관리 페이지로 간단한 퍼블리싱만 구현되어있다

#### /
대쉬보드 페이지로 Chart.js 라이브러리를 사용했으며 
데이터는 tRPC와 react-query를 사용했다. 기업 보안상의 이유로 데이터는 모의 데이터를 사용했으나 기업 프로젝트 당시에는 실제 데이터를 사용했다
select의 option 값이 변함에 따라 react-query의 input 값이 변경되면서 각기 다른 데이터를 호출 할 수 있다.
