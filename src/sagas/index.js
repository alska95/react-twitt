import {all , fork } from 'redux-saga/effects'
import postSaga from './post'
import userSaga from "./user";
import axios from 'axios'
import {takeEvery} from "@redux-saga/core/effects";

/*
function logInAPI(data){/!*action.data가 들어온다.*!/
    return axios.port('/api/login' ,data)
}
function logOutAPI(){
    return axios.port('/api/logout')
}

function addPostAPI(data){
    return axios.post('/api/post' , data)
}*/

axios.defaults.baseURL = 'http://localhost:3065';
axios.defaults.withCredentials = true;



export default function* rootSaga(){
    yield all([
        fork(postSaga),
        fork(userSaga),
    ]);
}

/*generator 은 yield단위로 멈추고 , value로 yield 뒤에 쓴 글자를 리턴 가능.
* 중간에 멈출 수 있다!*/