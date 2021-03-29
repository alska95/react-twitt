import React from 'react';
import PropTypes from 'prop-types' //npm install prop-types
import Link from 'next/link'
import {Menu , Input , Row , Col} from 'antd'
import 'antd/dist/antd.css'
import LoginForm from './LoginForm'
import UserProfile from './UserProfile'
import styled from 'styled-components'
import {useSelector} from 'react-redux'

const SearchInput = styled(Input.Search)`
    vertical-align:middle;
`;

const AppLayout = ({children}) => {

    const isLoggedIn = useSelector((state)=> state.user.isLoggedIn);

    return (
        <div>
            <Menu mode={"horizontal"}>
                <Menu.Item>
                    <Link href={"/"}><a>홈으로</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href={"/profile"}><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton/>
                </Menu.Item>
                <Menu.Item>
                    <Link href={"/signup"}><a>회원가입</a></Link>
                </Menu.Item>

            </Menu>
            {/*gutter : column사이에 마진을준다.*/}
            {/*c최대합은 24이다. xs는 스마트폰 md는 데스크탑
                    antd 의 grid참고*/}
            <Row gutter={8}>
                <Col xs={24} md = {6}>
                    {isLoggedIn ?
                        <UserProfile/> :
                        <LoginForm />}
                </Col>
                <Col xs={24} md = {12}>
                    {children}
                </Col>
                <Col xs={24} md = {6}>
                    <a href={"https://rhsalska55.tistory.com" } target={"_blank"} rel={"noreferrer nooptener"}>
                        Made by Hwang
                    </a>
                </Col>
            </Row>

        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;
