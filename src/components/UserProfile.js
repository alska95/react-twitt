import React, {useCallback} from 'react';
import {Avatar, Card ,Button} from "antd";
import {useDispatch} from "react-redux";
import {logoutAction} from '../reducers/user';



const UserProfile = () => {


    const dispatch = useDispatch();

    const onLogOut = useCallback(()=>{
        dispatch(logoutAction({}));
    } , [])
    return (
        <Card
        actions={[
            <div key={"twit"}>가나<br/>0</div>,
            <div key={"followings"}>다라<br/>0</div>,
            <div key={"followers"}>마바<br/>0</div>
        ]}>
            <Card.Meta
                avatar={<Avatar>HW</Avatar>}
            title={"Hwang"}/>
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;
