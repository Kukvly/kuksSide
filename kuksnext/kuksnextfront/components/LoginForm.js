import React, {useCallback, useState, useMemo} from 'react';
import {Form, Input, Button} from 'antd';
import Link from 'next/link';
import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonWrapper = styled.div`
margin-top: 10px
`;

const FormWrapper = styled(Form)`
    padding:10px;
`


const LoginForm = ({setIsLoggedIn}) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    // useMemo로 인한 에러가 발생함
    const style = useMemo(() => ({marginTop: 10}), []);

    const onSubmitForm = useCallback((e) => {
        console.log(id, password);
        setIsLoggedIn(true)
        $('#loginForm').text('hello');
    }, [id, password]);

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">ID</label>
                <br/>
                <Input name="user-id" value={id} onChange={onChangeId} required/>
            </div>
                <label htmlFor="user-password">Password</label>
                <br/>
                <Input
                    name="user-password"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    required
                />
            <ButtonWrapper style={{marginTop: 10}}>
                <Button type="primary" htmlType="submit" loading={false}>Login</Button>
                <Link href="/signup"><a><Button>Sign Up</Button></a></Link>
            </ButtonWrapper>

            <div>

            </div>

            <div>

            </div>


        </FormWrapper>
    );
}

LoginForm.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
};


export default LoginForm;