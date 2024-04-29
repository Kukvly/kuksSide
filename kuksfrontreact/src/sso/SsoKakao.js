import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import buttonKakao from '../public/kakao.png';
import pomiPhoto from '../public/pomi.png';
import '../style/sso.css';

const SsoKakao = () => {
    // alert("You need Login to use Kuks tab for kakao");

    const navigate = useNavigate();

    const Rest_api_key = '862b7d5bd33ee42b9be9a56e3f87f7cb'; // REST API KEY
    const redirect_uri = 'http://localhost:3000/auth'; // Redirect URI

    const handleLogin = () => {
        window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (code) {
            // 로그인 성공 시 처리할 작업
            console.log('로그인 성공!');
            navigate('/profile');
        } else if (urlParams.get('error')) {
            // 로그인 실패 시 처리할 작업
            alert('로그인에 실패했습니다.');
            navigate('/');
        }
    }, []);

    return (
        <div className="kakao-form-container">
            <div className="kakao-button-container font-weight">
                <h2 className="heading bold-text">Login Please</h2>
                <br/>
                If you are curious about Kuks,
                <br/>
                you need to login for kakao
                <br/>
                <img src={pomiPhoto} alt="포미"/>
                <br/>
                <br/>
                <button onClick={handleLogin} className="kakao-button">
                    <img src={buttonKakao} alt="Kakao button"/>
                </button>
            </div>
            <br/>
        </div>

    )
        ;
};

export default SsoKakao;