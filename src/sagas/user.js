import {all, call, fork} from "@redux-saga/core/effects";
import {delay, put, takeLatest} from "redux-saga/effects";
import {
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_IN_REQUEST
    ,
    LOG_OUT_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    UNFOLLOW_REQUEST,
    FOLLOW_REQUEST,
    FOLLOW_SUCCESS,
    FOLLOW_FAILURE,
    UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE
} from "../reducers/user";
import axios from "axios";


function signUpAPI(data){
    return axios.post('/user' , data);
}
function* SignUp(action) {
    try {
        // const result = yield call(signUpAPI);
        const result = yield call(signUpAPI , action.data)
        console.log('result : ' , result);
        yield put({
            type: SIGN_UP_SUCCESS,

        });
    } catch (err) {
        console.error('err : ' , err);
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        });
    }
}
function logInAPI(data){
    return axios.post('/user/login',data)
}
function* LogIn(action){/*로그인 리퀘스트할때 매개변수로 전달된다.*/
    try{
        const result = yield call(logInAPI , action.data)
        /*const result = yield call(logInAPI , action.data) /!*===loginApi(action.data)*!/*/
        yield put({
            type: LOG_IN_SUCCESS,
            data : result.data,
        });
    }catch(err){
        console.error(err);
        yield put({
            type: LOG_IN_FAILURE,
            data: err.response.data,
        })
    }
}

function logOutAPI(data){
    return axios.post('/user/logout' , data);
}
function* LogOut(action){
    try{
        const result = yield call(logOutAPI);
        console.log(result);
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



function LoadUserAPI(){
    return axios.post('/user');
}
function* LoadUser(action){
    try{
        const result = yield call(LoadUserAPI , action.data);
        console.log(result);
        /*        const result = yield call(LoadUserAPI)*/
        yield put({/*엑션을 만들어줌. dispatch*/
            type: LOAD_USER_SUCCESS,
            data : result.data
        })
    }catch(err){
        yield put({
            type: LOAD_USER_FAILURE,
            data: err.response.data,
        })
    }
}

function* Follow(action){
    try{
        yield delay(1000)
        yield put({
            type:FOLLOW_SUCCESS,
            data : action.data
        })
    }catch (err){
        yield put({
            type:FOLLOW_FAILURE,
            data : action.data
        })
    }
}

function* UnFollow(action){
    try{
        yield delay(1000)
        yield put({
            type:UNFOLLOW_SUCCESS,
            data : action.data
        })
    }catch (err){
        yield put({
            type:UNFOLLOW_FAILURE,
            data : action.data
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
    yield takeLatest(SIGN_UP_REQUEST, SignUp);
}
function* watchFollow(){
    yield takeLatest(FOLLOW_REQUEST, Follow);
}
function* watchUnFollow(){
    yield takeLatest(UNFOLLOW_REQUEST, UnFollow);
}
function* watchLoadUser(){
    yield takeLatest(LOAD_USER_REQUEST, LoadUser);
}

export default function* userSaga(){
    yield all([
        fork(watchFollow),
        fork(watchLoadUser),
        fork(watchUnFollow),
        fork(watchLogin),
        fork(watchLogout),
        fork(watchSignup),
    ]);
}