import {all, fork} from "@redux-saga/core/effects";
import {delay, put, takeLatest} from "redux-saga/effects";
import {LOG_IN_SUCCESS , LOG_IN_FAILURE , LOG_IN_REQUEST
, LOG_OUT_FAILURE , LOG_OUT_REQUEST ,LOG_OUT_SUCCESS ,
SIGN_UP_FAILURE , SIGN_UP_REQUEST , SIGN_UP_SUCCESS} from "../reducers/user";

function* SignUp(action){
    try{
        yield delay(1000);
        yield put({
            type:SIGN_UP_SUCCESS,
            data: action.data,
        })
    }catch (err){
        yield put({
            type:SIGN_UP_FAILURE,
            data:action.data,
        })
    }
}

function* LogIn(action){/*로그인 리퀘스트할때 매개변수로 전달된다.*/
    try{
        console.log("saga Login")
        yield delay(1000)
        /*const result = yield call(logInAPI , action.data) /!*===loginApi(action.data)*!/*/
        yield put({
            type: LOG_IN_SUCCESS,
            data : action.data,
        })
    }catch(err){
        yield put({
            type: LOG_IN_FAILURE,
            data: err.response.data,
        })
    }
}

function* LogOut(action){
    try{
        yield delay(1000)
        /*        const result = yield call(logOutAPI)*/
        yield put({/*엑션을 만들어줌. dispatch*/
            type: LOG_OUT_SUCCESS,
            data : action.data
        })
    }catch(err){
        yield put({
            type: LOG_OUT_FAILURE,
            data: err.response.data,
        })
    }
}
/*put은 dispatch 역할
* fork 는 비동기 함수호출 ( 결과 안기다리고 바로 다음꺼 실행)
* call 은 동기 함수호출*/

/*이벤트 리스너들*/
/*take은 1회용이기때문에 while로 감싼다 === takeEvery*/
function* watchLogin(){
    yield takeLatest(LOG_IN_REQUEST, LogIn); /*takeLatest : 실수로 더블클릭하면 마지막꺼만 받음.*/
}
function* watchLogout(){
    yield takeLatest(LOG_OUT_REQUEST , LogOut);
}
function* watchSignup(){
    yield takeLatest(SIGN_UP_REQUEST, SignUp)
}

export default function* userSaga(){
    yield all([
        fork(watchLogin),
        fork(watchLogout),
        fork(watchSignup),
    ]);
}