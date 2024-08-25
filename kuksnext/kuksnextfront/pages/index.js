// next 에서는 import React from 'react' 를 해줄 필요가 없음
/**
 *
 * @returns {JSX.Element}
 * @constructor
 *
 * 넥스트가 알아서 만들어주기 때문
 */
import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from "next/head";

const Home = () => {
    return (
        <AppLayout>
        <div>
            test kuks
        </div>
        </AppLayout>
    );
}

export default Home;