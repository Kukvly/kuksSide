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
            <div>
                kuks profiles
            </div>
        </AppLayout>
        </>
    )
};

export default profile;