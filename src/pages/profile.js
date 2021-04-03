import React from 'react';
import Head from 'next/head'
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm"
import FollowerList from "../components/FollowerList"
import {useSelector} from "react-redux";


const Profile = () => {
    
    const me = useSelector((state)=>(state.user.user));

    return (
        <>
            <Head>
                <title>내 프로필 | practice</title>
            </Head>
            <AppLayout>
                <NicknameEditForm/>
                <FollowerList header={"팔로잉 목록"} data = {me.Followings}/>
                <FollowerList header={"팔로워 목록"} data = {me.Followers}/>
            </AppLayout>
        </>
    );
};

export default Profile;
