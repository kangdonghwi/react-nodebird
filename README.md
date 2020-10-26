# 리액트로 만드는 SNS

## 기능
- 회원가입 & 로그인
- 글&댓글 CRUD
- 좋아요
- 팔로우&언팔로우

# front

## Tools
- antd
- react & redux & react-hooks & redux-saga

## 특징
- 비동기 동작을 쉽게 구현하기위해 redux-saga를 선택

## 어려웠던 점
- redux-saga를 사용하려면 제너레이터 문법을 배워야 함

## 추가할 점 
- 사용자가 많아지면 최적화를 위해 react-virtualized 추가

# back

## Tools
- express
- passport
- sequelize

## 특징
- 쿠키로 로그인 유지
- ORM을 이해하기위해 sequelize를 사용해봄


## 배운 점
- likecat에서는 localstorage로 정보를 유지했지만 백엔드를 만들었기 때문에 쿠키를 사용해서 정보를 유지함
- CORS 문제 해결
