import React, {useCallback, useEffect, useState} from 'react';
import AppLayout from "../components/AppLayout";
import Head from "next/head"
import  {Form,Input , Checkbox , Button} from 'antd'
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import {SIGN_UP_REQUEST} from "../reducers/user";
import Router from "next/router";

const ErrorMessage = styled.div`

`;



const SignUp = () => {
    const dispatch = useDispatch();
    const signUpLoading = useSelector((state)=>state.user.signUpLoading)
    const me = useSelector((state)=>state.user.user);


    const [email , setEmail] = useState("");
    const [password , setPassword] = useState('');
    const [nickname , setNickname] = useState('');

    const [passwordCheck,setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const [termError , setTermError] = useState(false);
    const [term , setTerm] = useState("");

    const signUpError = useSelector((state)=> state.user.signUpError);

    useEffect(()=>{
        if(me && me.id){
            Router.replace('/');
        }
    })



    const onChangePasswordCheck = useCallback((e)=>{
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    },[password])

    const onChangeTerm = useCallback((e)=>{
        setTerm(e.target.checked);
        setTermError(false);
    },[])
    const onChangeId = useCallback((e)=>{
        setEmail(e.target.value);
    },[])
    const onChangeNickname = useCallback((e)=>{
        setNickname(e.target.value);
    },[])
    const onChangePassword = useCallback((e)=>{
        setPassword(e.target.value);
    },[])


    const onSubmit = useCallback(()=>{
            if(password!=passwordCheck){
                return setPasswordError(true);
            }
            if(!term){
                return setTermError(true);
            }
            return dispatch({
                    type : SIGN_UP_REQUEST,
                    data : {
                        email, nickname , password,
                    }
                }
            )
        },[password , passwordCheck , term , email]);

    return (
        <AppLayout>
            <Head>
                <title>????????????</title>
            </Head>
            <Form onFinish={onSubmit} style={{padding:10}}>
                <div>
                    <label htmlFor={"user-id"}>?????????</label>
                    <br/>
                    <Input name={"user-id"} value={email} type={"email"} required onChange={onChangeId}/>
                    {signUpError && <div style={{color : 'red'}}>{signUpError}</div>}
                </div>

                <div>
                    <label htmlFor={"user-nickname"}>?????????</label>
                    <br/>
                    <Input name={"user-nickname"} value={nickname} required onChange={onChangeNickname}/>
                </div>
                <div>
                    <label htmlFor={"user-password"}>????????????</label>
                    <br/>
                    <Input.Password name={"user-password"} value={password} required onChange={onChangePassword}/>
                </div>
                <div>
                    <label htmlFor={"user-password-check"}>??????????????????</label>
                    <br/>
                    <Input.Password name={"user-password-check"}
                           value={passwordCheck}
                           required
                           onChange={onChangePasswordCheck}
                    />
                    {passwordError && <ErrorMessage style={{color:'red'}}>???????????? ?????????.</ErrorMessage>}
                </div>
                <div>
                <Checkbox name={"user-term"} checked={term} onChange={onChangeTerm}>
                    ????????? ???????????????.
                </Checkbox>
                {termError && <ErrorMessage style={{color:'red'}}>???????????? ?????????.</ErrorMessage>}
                </div>
                <div style={{marginTop:10}}>
                    <Button type={"primary"} htmlType={"submit"} loading={signUpLoading}>????????????</Button>
                </div>
            </Form>
        </AppLayout>
    );
};

export default SignUp;
