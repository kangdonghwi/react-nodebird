import { all, fork } from "redux-saga/effects";
import postSaga from "./post";
import userSaga from "./user";

export default function* rootSaga() {
  yield all([
    //all - fork,call을 동시에 실행시킨다.
    fork(postSaga), //fork,call은 제너레이터 함수를 실행한다.
    fork(userSaga),
  ]);
}
