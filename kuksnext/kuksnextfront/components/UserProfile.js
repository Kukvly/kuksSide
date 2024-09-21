import React, {useCallback} from 'react';
import {Card, Avatar, Button} from 'antd';

const userProfile = (setIsLoggedIn) => {
    const onLogOut = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    return(
    <Card
        actions={[
            <div key="twit">Kukvly<br/>0</div>,
            <div key="followings">Followings<br/>0</div>,
            <div key="followers">Followers<br/>0</div>,
        ]}
    >
        <Card.Meta
            avatar={<Avatar>YK</Avatar>}
            title="Kuks"
        />
        <Button onClick={onLogOut}>Logout</Button>
    </Card>

    );
}

export default userProfile;