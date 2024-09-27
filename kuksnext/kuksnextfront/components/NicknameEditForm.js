import React, {useMemo} from 'react';
import {Form, Input} from 'antd';

const NicknameEditForm = () => {
    const style = useMemo(() => ({ marginBottom: '28px', border: '1px solid #d9d9d9', padding: '38px'}), []);

    return (
        <Form style={style}>
            <Input.Search addonBefore="nickname" enterButton="edit" />
        </Form>
    );
};

export default NicknameEditForm;