import React, {useCallback, useState} from 'react';
import AppLayout from "../components/AppLayout";
import Head from "next/head"
import  {Form,Input , Checkbox , Button} from 'antd'
import styled from 'styled-components'

const ErrorMesaage = styled.div`

`;



const SignUp = () => {
    const [id , setId] = useState("");
    const [password , setPassword] = useState('');
    const [nickname , setNickname] = useState('');

    const [passwordCheck,setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const [termError , setTermError] = useState(false);
    const [term , setTerm] = useState("");

    const onChangePasswordCheck = useCallback((e)=>{
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    },[password])

    const onChangeTerm = useCallback((e)=>{
        setTerm(e.target.checked);
        setTermError(false);
    },[])
    const onChangeId = useCallback((e)=>{
        setId(e.target.value);
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
            console.log(id , nickname , password);
        },[password , passwordCheck , term]
    );
    return (
        <AppLayout>
            <Head>
                <title>회원가입</title>
            </Head>
            <Form onFinish={onSubmit} style={{padding:10}}>
                <div>
                    <label htmlFor={"user-id"}>아이디</label>
                    <br/>
                    <Input name={"user-id"} value={id} required onChange={onChangeId}/>
                </div>

                <div>
                    <label htmlFor={"user-nickname"}>닉네임</label>
                    <br/>
                    <Input name={"user-nickname"} value={nickname} required onChange={onChangeNickname}/>
                </div>
                <div>
                    <label htmlFor={"user-password"}>비밀번호</label>
                    <br/>
                    <Input.Password name={"user-password"} value={password} required onChange={onChangePassword}/>
                </div>
                <div>
                    <label htmlFor={"user-password-check"}>비밀번호체크</label>
                    <br/>
                    <Input.Password name={"user-password-check"}
                           value={passwordCheck}
                           required
                           onChange={onChangePasswordCheck}
                    />
                    {passwordError && <ErrorMesaage style={{color:'red'}}>비밀번호 불일치.</ErrorMesaage>}
                </div>
                <div>
                <Checkbox name={"user-term"} checked={term} onChange={onChangeTerm}>
                    약관에 동의합니다.
                </Checkbox>
                {termError && <ErrorMesaage style={{color:'red'}}>동의해야 합니다.</ErrorMesaage>}
                </div>
                <div style={{marginTop:10}}>
                    <Button type={"primary"} htmlType={"submit"}>가입하기</Button>
                </div>
            </Form>
        </AppLayout>
    );
};

export default SignUp;
