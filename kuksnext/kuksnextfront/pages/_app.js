import React from 'react';
import PropTypes from "prop-types";
import Head from 'next/head';

import wrapper from '../store/configureStore';

const snskuks = ({Component}) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <title>SNSKuks</title>
            </Head>
        <Component/>
        </>
    );
};

snskuks.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(snskuks);