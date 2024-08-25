import React from 'react';
import AppLayout from "../components/AppLayout";
import Head from "next/head";

const signup = () => {
    return (
        <>
            <Head>
                <title>Sign Up | SNSKuks</title>
            </Head>
        <AppLayout>
            <div>
                회원가입 페이지
            </div>
        </AppLayout>
        </>
    )
};

export default signup;