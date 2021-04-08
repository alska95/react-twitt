import {delay, put} from "redux-saga/effects";
import {all, fork, takeLatest} from "@redux-saga/core/effects";
import {
    ADD_COMMENT_SUCCESS, ADD_COMMENT_REQUEST, ADD_COMMENT_FAILURE,
    ADD_POST_FAILURE, ADD_POST_SUCCESS, ADD_POST_REQUEST, ADD_POST_TO_ME,
    REMOVE_POST_OF_ME,REMOVE_POST_FAILURE,REMOVE_POST_REQUEST,REMOVE_POST_SUCCESS,
} from "../reducers/post";
import shortId from 'shortid'


function* addPost(action){
    try{

        yield delay(1000)
        /*        const result = yield call(addPostAPI , action.data);*/
        const id = shortId.generate();
        yield put({
            type: ADD_POST_SUCCESS,
            data: {
                id: id,
                content: action.data,
            }, /*엑션에서 리퀘스트 받아와서 석세스를 넘겨줌 , 데이터에는 사용자가 넣은 데이터가 들어있다.*/
        })
        yield put({
            type:ADD_POST_TO_ME,
            data:id,
        })
    }catch(err){
        yield put({
            type: ADD_POST_FAILURE,
            data: err.response.data,
        })
    }
}
function* removePost(action){
    try{

        yield delay(1000)
        /*        const result = yield call(addPostAPI , action.data);*/
        yield put({
            type: REMOVE_POST_SUCCESS,
            data: action.data, /*엑션에서 리퀘스트 받아와서 석세스를 넘겨줌 , 데이터에는 사용자가 넣은 데이터가 들어있다.*/
        })
        yield put({
            type:REMOVE_POST_OF_ME,
            data:action.data,
        })
    }catch(err){
        yield put({
            type: REMOVE_POST_FAILURE,
            data: err.response.data,
        })
    }
}

function* addComment(action){
    try{
        yield delay(1000);

        yield put({
            type:ADD_COMMENT_SUCCESS,
            data: {
                content: action.data,
            },
        });

    }catch (err){
        yield delay(1000);
        yield put({
            type:ADD_COMMENT_FAILURE,
            data: action.data
        })
    }
}


function* watchAddPost(){
    yield takeLatest(ADD_POST_REQUEST , addPost); /*요청을 2초에 한번만 받아들임*/
}
function* watchRemovePost(){
    yield takeLatest(REMOVE_POST_REQUEST , removePost); /*요청을 2초에 한번만 받아들임*/
}

function* watchAddComment(){
    yield takeLatest(ADD_COMMENT_REQUEST , addComment); /*요청을 2초에 한번만 받아들임*/
}

export default function* postSaga(){
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
        fork(watchRemovePost),
    ])
}