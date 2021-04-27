import {ADD_POST_TO_ME, REMOVE_POST_OF_ME} from "./post";
import produce from "immer";

export const initialState = {
    isLoggedIn: false,
    isLoggingIn:false,
    isLoggingOut: false, /*로그아웃 시도중*/

    user: {
        Posts : [{id:1}],
    },
    isSigningUp:false,
    isSignedIn:false,

    changeNicknameLoading:false,
    changeNicknameDone: false,
    changeNicknameError:null,

    signUpData: {},
    loginData: {},
};
export const loginAction = (data) =>{
    return (dispatch) =>{
        dispatch(loginRequestAction());
        try{
            dispatch(loginSuccessAction(data));
        }catch(err){
            dispatch(loginFailureAction(data));
        }
    }
}
export const logoutAction = (data) =>{
    return (dispatch) =>{
        dispatch(logoutRequestAction());
        try{
            dispatch(logoutSuccessAction(data));
        }catch(err){
            dispatch(logoutFailureAction(data));
        }
    }
}

export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';

export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_REQUEST';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';



export const loginSuccessAction= (data) =>{

    return{
        type:LOG_IN_SUCCESS,
        data,
    }
};
export const loginFailureAction= (data) =>{
    return{
        type:LOG_IN_FAILURE,
        data,
    }
};
export const logoutSuccessAction = (data) =>{
    return{
        type:LOG_OUT_SUCCESS,
        data,
    }
}


export const logoutFailureAction = (data) =>{
    return{
        type:LOG_OUT_FAILURE,
        data,
    }
}


export const logoutRequestAction = (data) =>{
    return{
        type:LOG_OUT_REQUEST,
        data,
    }
}

export const loginRequestAction= (data) =>({
    type:LOG_IN_REQUEST,
    data,
})


const dummyUser = (data) => ({
    ...data,
    nickname : '황경하',
    id: 1,
    Posts : [{id : 1}],
    Followings: [{nickname : '가나다'},{nickname : '가ㄴ나다'},{nickname : '나다'}],
    Followers:[{nickname : '가나다'},{nickname : '가ㄴ나다'},{nickname : '나다'}],
});

const reducer = (state = initialState , action) =>{
    return produce(state , (draft)=>{
        switch (action.type) {
            case UNFOLLOW_REQUEST:{
                draft.unfollowLoading = true;
                draft.unfollowDone = false;
                break;
            }
            case UNFOLLOW_SUCCESS:{
                draft.unfollowDone = true;
                draft.unfollowLoading = false;
                draft.user.Followings = draft.user.Followings.filter((v)=> v.id !== action.data);
                //해당 사람빼고 나머지 팔로우 해준다.
                break;
            }
            case UNFOLLOW_FAILURE:{
                draft.unfollowDone = false;
                draft.unfollowLoading = false;
                break;
            }
            case FOLLOW_REQUEST:{
                draft.followLoading = true;
                draft.followDone = false;
                break;
            }
            case FOLLOW_SUCCESS:{
                draft.followDone = true;
                draft.followLoading = false;
                draft.user.Followings.push({id:action.data});
                break;
            }
            case FOLLOW_FAILURE:{
                draft.followDone = false;
                draft.followLoading = false;
                break;
            }
            case LOG_IN_REQUEST:{
                draft.isLoggingIn = true;
                draft.isLoggedIn = false;
                draft.user = dummyUser(action.data);
                break;
            }
            case LOG_IN_SUCCESS:{

                draft.isLoggedIn= true;
                draft.isLoggingIn = false;
                draft.user = dummyUser(action.data);
                break;
            }
            case LOG_IN_FAILURE:{
                draft.isLoggedIn= false;
                draft.isLoggingIn = false;
                break;
            }
            case LOG_OUT_SUCCESS:{
                draft.isLoggedIn= false;
                draft.isLoggingOut = false;
                break;

            }
            case LOG_OUT_FAILURE:{
                draft.isLoggedIn= false;
                draft.isLoggingOut = false;
                break;

            }
            case LOG_OUT_REQUEST:{
                draft.isLoggedIn = false;
                draft.isLoggingOut = true;
                draft.user = action.data;
                break;

            }
            case SIGN_UP_REQUEST:
                draft.signUpLoading = true;
                draft.signUpError = null;
                draft.signUpDone = false;
                break;
            case SIGN_UP_SUCCESS:
                draft.signUpLoading = false;
                draft.signUpDone = true;
                break;
            case SIGN_UP_FAILURE:
                draft.signUpLoading = false;
                draft.signUpError = action.error;
                break;
            case CHANGE_NICKNAME_REQUEST:
                draft.changeNicknameLoading = true;
                draft.changeNicknameError = null;
                draft.changeNicknameDone = false;
                break;
            case CHANGE_NICKNAME_SUCCESS:
                draft.changeNicknameLoading = false;
                draft.changeNicknameDone = true;
                break;
            case CHANGE_NICKNAME_FAILURE:
                draft.changeNicknameLoading = false;
                draft.changeNicknameError = action.error;
                break;
            case ADD_POST_TO_ME:
                draft.user.Posts.unshift({id : action.data});
                break;
/*                return{
                    ...state,
                    user: {
                        ...state.user,
                        Posts: [{id:action.data}, ...state.user.Posts],
                    }
                }*/
            case REMOVE_POST_OF_ME:
                draft.user.Posts = draft.user.Posts.filter((v)=> v.id !== action.data);
                break;
/*                return{
                    ...state,
                    user: {
                        ...state.user,
                        Posts: state.user.Posts.filter((v)=>v.id === action.data),
                    }
                }*/

            default:
                break;
        }
    })

}

export default reducer;
