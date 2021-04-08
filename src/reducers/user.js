import {ADD_POST_TO_ME, REMOVE_POST_OF_ME} from "./post";

export const initialState = {
    isLoggedIn: false,
    isLoggingIn:false,
    isLoggingOut: false, /*로그아웃 시도중*/

    user: [{
        Posts: [null , ],
        Followings:0,
        Followers:0,
        }
    ],
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
export const SIGN_UP_SUCCESS = 'SIGN_UP_REQUEST';
export const SIGN_UP_FAILURE = 'SIGN_UP_REQUEST';

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
    switch (action.type) {
        case LOG_IN_REQUEST:{
            return{
                ...state,
                isLoggingIn: true,
                user:action.data,
            };
        }
        case LOG_IN_SUCCESS:{
            console.log("redux Login");
            return{
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                user: dummyUser(action.data),
            }
        }
        case LOG_IN_FAILURE:{
            return{
                ...state,
                isLoggedIn: false,
                isLoggingIn: false,
            }
        }
        case LOG_OUT_SUCCESS:{
            return{
                ...state,
                isLoggedIn: false,
                isLoggingOut: false,
            }
        }
        case LOG_OUT_FAILURE:{
            return{
                ...state,
                isLoggedIn: false,
                isLoggingOut: false,
            }
        }
        case LOG_OUT_REQUEST:{
            return{
                ...state,
                isLoggingOut: true,
                user:action.data,
            }
        }
        case SIGN_UP_REQUEST:{
            return{
                ...state,
                isSigningUp: true,
                isSignedIn: false,
            }
        }
        case SIGN_UP_SUCCESS:{
            return{
                ...state,
                isSigningUp: false,
                isSignedIn: false,
                signUpData : action.data,
            }
        }
        case SIGN_UP_FAILURE:{
            return{
                ...state,
                isSigningUp: false,
                isSignedIn: false,
            }
        }
        case CHANGE_NICKNAME_REQUEST:{
            return{
                ...state,
                changeNicknameLoading: true,
                changeNicknameDone: false,
                changeNicknameError: false,
            }
        }
        case CHANGE_NICKNAME_FAILURE:{
            return{
                ...state,
                changeNicknameLoading: false,
                changeNicknameDone: true,
                changeNicknameError: false,

            }
        }
        case CHANGE_NICKNAME_SUCCESS:{
            return{
                ...state,
                changeNicknameLoading: false,
                changeNicknameDone: false,
                changeNicknameError: true,
            }
        }
        case ADD_POST_TO_ME:
            return{
                ...state,
                user: {
                    ...state.user,
                    Posts: [{id:action.data}, ...state.user.Posts],
                }
            }
        case REMOVE_POST_OF_ME:
            return{
                ...state,
                user: {
                    ...state.user,
                    Posts: state.user.Posts.filter((v)=>v.id === action.data),
                }
            }

        default:
            return state;
    }
}

export default reducer;
