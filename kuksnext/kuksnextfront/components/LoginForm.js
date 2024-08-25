import React, {useCallback, useState} from 'react';
import {Form, Input, Button} from 'antd';
import Link from 'next/link';
import styled from "styled-components";

const ButtonWrapper = styled.div`
margin-top: 10px
`;

const loginForm = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const style = useMemo(() => ({marginTop: 10}), []);
    return (
        <Form>
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


        </Form>
    );
}

export default loginForm;