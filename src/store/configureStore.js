import {createWrapper} from 'next-redux-wrapper';
import {applyMiddleware, compose} from 'redux';
import {createStore} from 'redux'
import reducer from '../reducers/index'
import {composeWithDevTools} from 'redux-devtools-extension';
/*리덕스 기능 enhance*/

const configureStore=()=>{
    const middlewares =[];
    const enhancer = process.env.NODE_ENV ==='production'
        ?compose(applyMiddleware(...middlewares))
        :composeWithDevTools(applyMiddleware(...middlewares));

    const store = createStore(reducer , enhancer);
    store.dispatch({
        type:'CHANGE_NICKNAME',
        data:'hwangkyeongha',
    })
    return store
};

const wrapper = createWrapper(configureStore,
    {debug: process.env.NODE_ENV === 'development',
    });

export default wrapper;