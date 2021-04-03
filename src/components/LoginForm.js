import React, {useCallback, useState} from 'react';
import {Form , Input , Button} from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

import {loginAction , loginRequestAction} from '../reducers/user'
import {useDispatch, useSelector} from "react-redux";

const ButtonWrapper = styled.div`
        margin-top:10px;
    `;

const FormWrapper = styled(Form)`
    padding: 10px;
`

const LoginForm = () => {
    const dispatch = useDispatch();
    const isLoggingIn = useSelector((state) => state.user.isLoggingIn);

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
/*    const [passwordCheck,setPasswordCheck] = useState("");*/

    /*컴포넌트로 전달하는 함수 최적화를 위해 유즈콜백*/
    const onChangeEmail = useCallback((e)=>{
        setEmail(e.target.value)
        console.log(email);
    } , []);

    const onChangePassword = useCallback((e)=>{
        setPassword(e.target.value)
    } , []);

    const onSubmitForm = useCallback(()=>{
        console.log(email,password)
        dispatch(loginRequestAction({
            email,
            password,
        }));
    } , [email,password]);


    return (
        <>
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor={"user-id"}>이메일</label>
                <br/>
                <Input name={"email"} value = {email} onChange={onChangeEmail} required/>
            </div>
            <div>
                <label htmlFor={"user-password"}>비밀번호</label>
                <br/>
                <Input name={"user-password"}
                       type ="password"
                       value = {password}
                       onChange={onChangePassword}
                       required/>
            </div>
            <ButtonWrapper>
                <Button type={"primary"} htmlType={"submit"} loading = {isLoggingIn}>로그인</Button>
                <Link href={"/signup"}><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
        </>
    );
};

export default LoginForm;
