import 'antd/dist/antd.css'; //ant디자인
import PropTypes from 'prop-types'; //proptype체크
import React from 'react'; //사실 없어도댐
import Head from 'next/head'; //헤드건드릴수있음.
import wrapper from "../store/configureStore";
import withReduxSaga from "next-redux-saga";


const App = ({Component}) =>{ //index.js의 리턴값을 컴포넌트로 받는다.
    return(
        <>
            <Head>
                <meta charSet={"utf-8"}/>
                <title>NextReact</title>
            </Head>
            <Component />
        </>
    )
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(withReduxSaga(App));