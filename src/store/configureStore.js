import {createWrapper} from 'next-redux-wrapper';
import {applyMiddleware, compose} from 'redux';
import {createStore} from 'redux'
import reducer from '../reducers/index'
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas'
/*리덕스 기능 enhance*/
const loggerMiddleware = ({dispatch , getState}) =>(next) =>(action)=>{
    console.log(action);
    /*if( typeof (action) === 'function'){
        return action(dispatch , getState);
    }*/
    return next(action);
}
const configureStore=()=>{
    const sagaMiddleware = createSagaMiddleware();
    const middlewares =[loggerMiddleware , sagaMiddleware];
    const enhancer = process.env.NODE_ENV ==='production'
        ?compose(applyMiddleware(...middlewares))
        :composeWithDevTools(applyMiddleware(...middlewares));

    const store = createStore(reducer , enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store
};

const wrapper = createWrapper(configureStore,
    {debug: process.env.NODE_ENV === 'development',
    });

export default wrapper;