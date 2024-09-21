import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from "next/head";

const profile = () => {
    return (
        <>
            <Head>
                <title>My Profile | SNSKuks</title>
            </Head>

        <AppLayout>
            <NicknameEditForm />
            <FollowList header={} />
            <FollowList />
        </AppLayout>
        </>
    )
};

export default profile;