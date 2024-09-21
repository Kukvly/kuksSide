import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/Link';
import { Menu, Input, Row, Col } from 'antd';

import styled from "styled-components";

const SearchInput = styled(Input.Search)`
vertical-align: middle;
`;

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

const AppLayout = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>home</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>kuks profile</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>sign up</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
                </Col>

                <Col xs={24} md={12}>
                    {children}
                </Col>

                <Col xs={24} md={6}>
                    <a href="https://pomi-4-me.tistory.com" target="_blank" rel={"noreferrer noopener"}>Made by Kukvly</a>
                </Col>
            </Row>

        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;