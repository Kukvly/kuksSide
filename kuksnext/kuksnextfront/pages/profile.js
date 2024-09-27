import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from "next/head";
import FollowList from '../components/FollowList';
import NicknameEditForm from "../components/NicknameEditForm";

const profile = () => {

    const followerList = [{nickname: 'kuks'}, {nickname: 'yk'}, {nickname: 'pomi'}];
    const followingList = [{nickname: 'kuks'}, {nickname: 'yk'}, {nickname: 'pomi'}];

    return (
        <>
            <Head>
                <title>My Profile | SNSKuks</title>
            </Head>

        <AppLayout>
            <NicknameEditForm />
            <FollowList header="Search Users" data={followingList}/>
            <FollowList header="Search Goods" data={followerList}/>
        </AppLayout>
        </>
    )
};

export default profile;