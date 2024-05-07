import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { GiDiploma } from 'react-icons/gi';
import { FaCertificate } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import '../style/profile.css';
import kuksPhoto from '../public/kuks.jpg';
import { FaMedal } from 'react-icons/fa';
const KuksProfile = () => {

    return (
                <div className="container">
                        <div className="section">
                                <h3><FontAwesomeIcon icon={faProjectDiagram}/> Project Experience</h3>
                                <li>NH캐피탈 - 업무 지원 (교육)</li>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2022.01 ~ 2022.04]
                                <li>롯데캐피탈 L-ONE 차세대 프로젝트</li>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2022.05 ~ 2023.01]
                                <li>현대캐피탈 추가 개발 프로젝트</li>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2023.02 ~ 2022.04]
                                <li>KB Life One System 차세대 프로젝트</li>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2022.04 ~ 2024.03]
                                <br/>
                                <br/>
                                <h3><GiDiploma/> Education</h3>
                                <li>홍익대학교사범대학부속고등학교</li>
                                <ul>
                                        <li>
                                                2012.03 ~ 2015.02
                                        </li>
                                        <li>
                                                학과: 이과
                                        </li>
                                </ul>
                                <li>학점은행제</li>
                                <ul>
                                        <li>
                                                2015.03 ~ 2017.02
                                        </li>
                                        <li>
                                                학과: 컴퓨터공학과
                                                학점: 3.58/4.5
                                        </li>
                                </ul>
                                <li>광운대학교</li>
                                <ul>
                                        <li>
                                                2017.03 ~ 2022.08
                                        </li>
                                        <li>
                                                학과: 로봇학부 지능시스템전공
                                                학점: 3.12/4.5
                                        </li>
                                </ul>
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
                                <h3><FaMedal/> Awards</h3>
                                <li>제 11회 임베디드 소프트웨어 경진대회</li>
                                <ul>
                                        <li>주최: 산업통상자원부</li>
                                        <li>수상일자: 2013.12.05</li>
                                        <li>수상내역: 우수상 수상, 상금 50만원 및 로봇 1체 학교에 기증</li>
                                </ul>
                        </div>
                        {/*<div className="gap"></div>*/}
                        <div className="section">
                                <h3 style={{textAlign: "center"}}><FaBook/> 자기소개서</h3>
                                <br/>
                                <img src={kuksPhoto} alt="kuks profile photo" width="30%" height="10%" style={{display: "block", margin: "auto"}}/>
                                <br/>
                                [진취적인 삶, 끊임없는 발전]
                                <br/>
                                <br/>
                                경험을 토대로 끊임없는 발전을 추구하는 저의 모습에 대해 소개하겠습니다.

                                첫째, 개발자에게 지속적인 학습과 기술적인 성장은 매우 중요합니다. IT 분야는 끊임없이 발전하는 기술과 도구가 존재하기에, 새로운 지식을 습득하고 기존의
                                지식을 보완하는 노력이 필수라고 생각합니다. 그래서 업무 시간 외 퇴근 시간이나 주말에도 Java, Javascript 등의 언어와 Springboot,
                                nodejs와 같은 프레임워크를 학습하고, 자바 알고리즘 문제를 푸는 과정을 반복하였습니다. 현재 진행 중인 프로젝트에서 다른 개발자가 개발한 화면을 맡아
                                개발하게 되었습니다. 받은 화면에는 엑셀 다운로드, 업로드 기능 등의 몇 가지 에러가 있었습니다. 하지만 이는 평소에 공부했던 부분이었기에 원활하게 해결할 수
                                있었고, 1주일의 기간이 주어졌음에도 불구하고, 이틀 만에 끝낼 수 있었습니다. 이와 같이 새로운 업무에 빠르게 대응할 수 있는 수준의 기술력을 가지게
                                되었습니다.
                                <br/>
                                <br/>
                                둘째, 협업을 통해 소통의 중요성에 대해서 깨닫게 되었습니다. Confluence를 이용하여 업무 내용을 체계적으로 문서화하고 공유함으로써, 모든 팀원이
                                프로젝트의 목표와 방향성을 명확히 이해할 수 있었습니다. 또한, Git을 활용하여 코드의 버전을 관리하고 변경 사항을 효과적으로 추적함으로써 팀 전체의 협업을
                                원활히 유지할 수 있었습니다.
                                <br/>
                                <br/>
                                셋째, 성장을 위해 끊임없이 배우며 도전하고 있습니다. 업무에서 부족한 부분을 인식했을 때, 관련 내용을 정리하여 내 것으로 만들고 있습니다. 롯데 캐피탈
                                L-ONE 차세대 프로젝트에서는 고객의 요구사항에 따라 수정 사항을 반영해 개발하며 고객과 소통하는 법을 배웠고, 현대 캐피탈에서는 복잡한 로직을 분석하며
                                디버깅 요령을 배웠습니다. 현재 진행 중인 KB Life One System 차세대 프로젝트에서는 협업하는 방법에 대해서 배웠고, 틈틈이 알고리즘 문제를 풀며
                                개발 역량을 향상시키고 있습니다.
                                <br/>
                                <br/>
                                학습과 성장, 개선을 통해 끊임없이 발전하는 것이 너무나도 즐겁습니다. 현재의 마음가짐을 유지하면서 미래의 변화에 대응 가능한 개발자가 될 수 있도록 나아가고
                                있습니다. 귀사에서 새로운 도전을 맞이하고, 이를 성장의 기회로 삼고 싶습니다. 함께 성장하는 여정을 기대하며 앞으로도 새로운 도전을 두려워하지 않고, 성장의
                                기회로 삼아 최고의 역량을 발휘해 나가겠습니다.
                        </div>
                </div>



    );
};

export default KuksProfile;
