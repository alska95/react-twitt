import React from 'react';
import Head from 'next/head'
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm"
import FollowerList from "../components/FollowerList"


const Profile = () => {
    const followerList = [{nickname:'황'} , {nickname: '하' }, {nickname: '하' }];
    const followingList = [{nickname:'경'} , {nickname: '황' }, {nickname: '하' }];
    return (
        <>
            <Head>
                <title>내 프로필 | practice</title>
            </Head>
            <AppLayout>
                <NicknameEditForm/>
                <FollowerList header={"팔로잉 목록"} data = {followingList}/>
                <FollowerList header={"팔로워 목록"} data = {followerList}/>
            </AppLayout>
        </>
    );
};

export default Profile;
