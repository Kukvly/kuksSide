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
                                <img src={kuksPhoto} alt="kuks profile photo" width="30%" height="10%"
                                     style={{display: "block", margin: "auto"}}/>
                                <br/>
                                1. 지원자 김윤국의 핵심역량
                                <br/>
                                <br/>
                                저는 끊임없는 학습과 기술적 성장, 원활한 협업, 그리고 문제 해결 능력을 갖춘 개발자로서,
                                새로운 환경에서도 빠르게 적응하며 최적의 해결책을 도출하는 역량을 보유하고 있습니다.

                                첫째, 끊임없는 학습을 통한 기술력 향상입니다. IT 업계는 빠르게 변화하는 만큼, 지속적인 학습이 필수적입니다.
                                저는 Java와 java script를 중심으로 Spring Boot, Node.js 같은 다양한 프레임워크를 익히며,
                                알고리즘 문제를 꾸준히 풀어 개발 역량을 강화해 왔습니다. 이러한 노력 덕분에 현재 진행 중인 프로젝트에서도
                                엑셀 다운로드/업로드 기능의 오류를 신속하게 해결하며, 1주일 일정이 주어진 작업을 이틀 만에 마무리할 수 있었습니다.
                                <br/>
                                <br/>
                                둘째, 체계적인 협업과 소통 역량입니다. 저는 Confluence를 활용한 문서화를 통해 프로젝트 진행 상황을 정리하고 공유하는 습관을 길렀으며,
                                Git을 통해 코드의 버전 관리와 변경 사항을 명확하게 관리할 수 있도록 협업 프로세스를 구축해왔습니다.
                                특히, 최근 프로젝트에서는 신입 개발자를 교육하기 위한 개발 가이드를 제작하고, 공통 모듈을 개발하여
                                팀 전체의 생산성을 높이는 역할을 수행하고 있습니다.
                                <br/>
                                <br/>
                                셋째, 복잡한 문제를 해결하는 분석력과 실행력입니다. 저는 롯데캐피탈, 현대캐피탈,
                                KB Life One System 프로젝트 등을 수행하며 다양한 의사결정 시스템 개발과 데이터 처리 로직 개선을 맡아왔으며,
                                현재는 나라신용정보 컨버전 프로젝트에서 ActiveX를 제거하고 RealGrid로 화면을 재개발하는 작업을 담당하며,
                                기존 시스템을 개선하는 역할을 수행하고 있습니다. 이러한 경험을 통해 비효율적인 시스템을 분석하고 최적화하는
                                역량을 갖추게 되었습니다.
                                <br/>
                                <br/>
                                귀사에서도 이러한 강점을 바탕으로 주어진 업무를 빠르게 습득하고,
                                최적의 솔루션을 도출하는 개발자로서 기여할 것입니다.
                                <br/>
                                <br/>
                                2. 성격의 장단점 및 보완 노력
                                <br/>
                                <br/>
                                저의 가장 큰 강점은 논리적인 사고와 책임감입니다. 복잡한 문제를 해결할 때 감각적으로 접근하기보다,
                                원인을 파악하고 해결 방안을 분석하여 체계적으로 접근하는 스타일입니다. 예를 들어,
                                KB Life One System 프로젝트에서는 의사결정 시스템을 하나의 통합 서비스로 개발하는 과정에서
                                기존 로직을 분석하고 최적화하며, 복잡한 룰 인터페이스를 보다 효율적으로 설계하였습니다.
                                이처럼 논리적으로 사고하고 체계적인 접근 방식을 적용하는 것이 저의 강점입니다.
                                <br/>
                                <br/>
                                또한, 저는 맡은 업무에 대해 끝까지 해결하려는 책임감을 가지고 있습니다. 단순히 주어진 일을 수행하는 것이 아니라,
                                작업을 완료한 후에도 더욱 효율적인 방법이 없는지 고민하며 개선하려는 태도를 가지고 있습니다.
                                최근 프로젝트에서 공통 모듈을 개선하는 과정에서, 단순히 기능을 추가하는 것이 아니라 보다 효율적인 코드 구조를
                                고민하며, 동료 개발자들이 쉽게 사용할 수 있도록 가이드 문서를 작성하였습니다.
                                하지만, 저는 가끔 완벽을 추구하는 성향 때문에 시간이 더 소요되는 경우가 있습니다.
                                개발 과정에서 최적화에 집중하다 보면, 추가적인 기능 개선에 시간을 투자하게 되는 경우가 있습니다.
                                이를 보완하기 위해, 최근에는 업무 우선순위를 명확히 설정하고, 프로젝트 일정에 맞추어 적절한 수준에서
                                타협하는 방법을 익히고 있습니다. 귀사에서는 논리적인 사고와 책임감을 바탕으로,
                                보다 효과적인 개발을 수행하고 협업을 원활히 이끌어 나가겠습니다.
                                <br/>
                                <br/>
                                3. 성공 경험
                                <br/>
                                <br/>
                                제가 가장 열정을 쏟아부었던 경험은 나라신용정보 컨버전 프로젝트에서 기존 ActiveX 기반 시스템을 개선하고,
                                신입 개발자를 위한 가이드 및 공통 모듈을 개발한 경험입니다. 해당 프로젝트에서는 기존 ActiveX 기반 화면을 제거하고,
                                RealGrid를 이용한 화면으로 재개발하는 작업을 맡았습니다. 처음에는 기존 코드가 난해하고,
                                문서화가 잘 되어 있지 않아 분석하는 데 어려움을 겪었습니다. 하지만, 기존 코드의 흐름을 하나하나 분석하고,
                                다른 개발자들과 협업하며 최적의 해결책을 모색하였습니다. 결과적으로, 기존 시스템보다 더 효율적인 구조로 개선하여
                                안정적인 서비스로 전환하는 데 성공하였습니다. 또한, 해당 프로젝트에서는 팀 전체의 개발 효율성을 높이기 위해
                                공통 모듈을 개발하는 역할을 수행하였습니다. 이를 통해, 반복적으로 사용되는 기능을 보다 쉽게 활용할 수 있도록
                                구조화하였으며, 신입 개발자들이 빠르게 적응할 수 있도록 개발 가이드를 제작하고 직접 교육하였습니다.
                                이 과정에서 개발자의 역할이 단순한 기능 구현을 넘어, 협업을 통해 더 나은 시스템을 만드는 것이라는 점을 깨달았으며,
                                기술적인 성장뿐만 아니라 팀워크의 중요성을 다시 한번 인식하는 계기가 되었습니다.
                                <br/>
                                <br/>


                        </div>
                </div>


    );
};

export default KuksProfile;
