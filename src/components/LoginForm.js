import React, {useCallback, useState} from 'react';
import {Form , Input , Button} from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

import {loginAction} from '../reducers/user'
import {useDispatch} from "react-redux";

const ButtonWrapper = styled.div`
        margin-top:10px;
    `;

const FormWrapper = styled(Form)`
    padding: 10px;
`

const LoginForm = () => {
    const dispatch = useDispatch();

    const [id,setId] = useState("");
    const [password,setPassword] = useState("");
/*    const [passwordCheck,setPasswordCheck] = useState("");*/

    /*컴포넌트로 전달하는 함수 최적화를 위해 유즈콜백*/
    const onChangeId = useCallback((e)=>{
        setId(e.target.value)
        console.log(id);
    } , []);

    const onChangePassword = useCallback((e)=>{
        setPassword(e.target.value)
    } , []);

    const onSubmitForm = useCallback(()=>{
        console.log(id,password)
        dispatch(loginAction({
            id,
            password,
        }));
    } , [id,password]);


    return (
        <>
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor={"user-id"}>아이디</label>
                <br/>
                <Input name={"user-id"} value = {id} onChange={onChangeId} required/>
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
                <Button type={"primary"} htmlType={"submit"} loading = {false}>로그인</Button>
                <Link href={"/signup"}><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
        </>
    );
};

export default LoginForm;
