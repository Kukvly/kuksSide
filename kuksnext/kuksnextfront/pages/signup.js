import React, {useCallback, useState} from 'react';
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import {Form, Input} from 'antd';

const Signup = () => {
    const [id, setId] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);

    const onChangeNickname = useCallback((e) => {
        setNickname(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const onChangePasswordCheck = useCallback((e) => {
        set
    }, []);

    const onSubmit = useCallback(() => {

    }, []);

    return (
        <AppLayout>
            <Head>
                <title>Sign Up | SNSKuks</title>
            </Head>

            <Form onFinis={onSubmit}>
                <div>
                    <label htmlFor="user-id">ID</label>
                    <br/>
                    <Input name="user-id" value={id} required onChange={onChangeId}/>
                </div>

                <div>
                    <label htmlFor="user-nick">Nickname</label>
                    <br/>
                    <Input name="user-nick" value={nickname} required onChange={onChangeNickname}/>
                </div>

                <div>
                    <label htmlFor="user-password">Password</label>
                    <br/>
                    <Input name="user-password" type="password" value={password} required onChange={onChangePassword}/>
                </div>

                <div>
                    <label htmlFor="user-password">Password</label>
                    <br/>
                    <Input
                        name="user-password-check"
                        type="password"
                        value={passwordCheck}
                        required
                        onChange={onChangePasswordCheck}/>
                </div>
            </Form>
        </AppLayout>
    )
};

export default Signup;