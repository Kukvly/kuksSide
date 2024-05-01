import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { GiDiploma } from 'react-icons/gi';
import { FaCertificate } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa';
import '../style/profile.css';

const KuksProfile = () => {

    return (
        <div>
                <div className="container">
                        <div className="section">
                                <h3><FontAwesomeIcon icon={faProjectDiagram}/> Project Experience</h3>
                                <li>NH캐피탈 - 업무 지원 (교육)</li>

                                <li>롯데캐피탈 L-ONE 차세대 프로젝트</li>

                                <li>현대캐피탈 추가 개발 프로젝트</li>

                                <li>KB Life One System 차세대 프로젝트 (track2 - Migration)</li>


                                <br/>
                                <h3><GiDiploma/> Education</h3>
                                <li>홍익대학교사범대학부속고등학교</li>
                                <ul>
                                        <li>
                                                2012.03.02 ~ 2015.02.09
                                        </li>
                                        <li>
                                                학과: 이과
                                        </li>
                                </ul>
                                <li>학점은행제</li>

                                <li>광운대학교</li>
                                <br/>
                                <h3><FaLaptopCode/> Technical Skills</h3>
                                <li>Language: Java, Javascript, Python</li>
                                <li>Framework: Springboot, Nodejs, React</li>
                                <li>DB: Oracle, MySQL, H2db</li>
                                <li>VCS: Git, Github, Gitlab, Confluence</li>
                                <li>CI/CD: Jenkins</li>
                                <br/>
                                <h3><FaCertificate/> Certifications</h3>
                                <li>정보처리기사</li>
                                <li>SQLD</li>
                                <li>정보처리산업기사</li>
                                <li>네트워크관리사2급</li>

                                <br/>
                        </div>
                        <div className="gap"></div>
                        <div className="section">
                                두 번째 섹션
                        </div>
                </div>


        </div>
    );
};

export default KuksProfile;
