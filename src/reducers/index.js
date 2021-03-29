import user from "./user"
import post from "./post"
import {combineReducers} from "redux";
import {HYDRATE} from "next-redux-wrapper";

const initialState ={
};

//비동기 액션 크리에이터(saga)

//이전 상태와 action을 통해 다음 상태를 만들어내는 함수
//combinereducer
//리듀서가 함수인데 이거 다 합쳐준다.
const rootReducer = combineReducers({
    index:(state = initialState, action)=>{ //서버사이드 랜더링 위해
        switch (action.type){
            case HYDRATE:
                console.log('HYDRATE',action);
                return {...state , ...action.payload};
            default:{
                return state;
            }
        }
    },
    user,
    post,
});
export default rootReducer;
