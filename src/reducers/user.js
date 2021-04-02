export const initialState = {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
};
export const loginAction = (data) =>{
    return (dispatch , getState) =>{
        const state = getState();
        dispatch(loginRequestAction());
        axios.post('/api/login')
            .then((res)=>{
                dispatch(loginSuccessAction(res.data));
            })
            .catch((res)=>{
                dispatch(loginFailureAction(res.data));
            })
    }
}

export const logoutAction = (data) =>{
    return (dispatch , getState) =>{
        const state = getState();
        dispatch(loginRequestAction());
        axios.post('/api/login')
            .then((res)=>{
                dispatch(loginSuccessAction(res.data));
            })
            .catch((res)=>{
                dispatch(loginFailureAction(res.data));
            })
    }
}
export const loginSuccessAction= (data) =>{
    return{
        type:'LOG_IN_SUCCESS',
        data,
    }
};
export const loginFailureAction= (data) =>{
    return{
        type:'LOG_IN_FAILURE',
        data,
    }
};
export const logoutSuccessAction = (data) =>{
    return{
        type:'LOG_OUT_SUCCESS',
        data,
    }
}


export const logoutFaliureAction = (data) =>{
    return{
        type:'LOG_OUT_FAILURE',
        data,
    }
}


export const logoutRequestAction = (data) =>{
    return{
        type:'LOG_OUT_REQUEST',
        data,
    }
}

export const loginRequestAction= (data) =>{
    return{
        type:'LOG_IN_REQUEST',
        data,
    }
};


const reducer = (state = initialState , action) =>{
    switch (action.type) {
        case 'LOG_IN':{
            return{
                ...state,
                isLoggedIn:true,
                user:action.data,
            };
        }
        case 'LOG_OUT':{
            return{
                ...state,
                isLoggedIn: false,
                user:action.data,
            }
        }

        default:
            return state;
    }
}

export default reducer;
