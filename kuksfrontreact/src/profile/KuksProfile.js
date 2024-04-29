import React, {useEffect} from 'react';

const KuksProfile = () => {
    useEffect(() => {
        alert("Kuks profile");
    }, []);

    return(
        <div>
            <b>정상적으로 들어왔다. 이제 수정해야 될 페이지다.</b>
        </div>
    );
};


export default KuksProfile;