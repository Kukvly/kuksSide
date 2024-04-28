Kuks Profile Maker
<프로젝트에 대한 간단한소개>

기술 스택
Back-End: Spring Boot, Nodejs
Front-End: React, Nodejs

주소 및 포트
kuksbackboot: http://localhost:8081
kuksfrontreact: http://localhost:3000
kukssns: http://localhost:8090

메뉴 탭 구성
Home: 게시글 목록 조회 기능
Post: 게시글 작성 기능
Kuks Github: 김윤국의 깃허브 레퍼지토리
Kuks Tistory: 김윤국의 티스토리 블로그
Kuks SNS: NodeJs로 구현한 SNS 서비스 어플리케이션
(게시글 작성, 삭제, 사진 업로드, 태그 조회, 팔로우, 팔로잉 등의 기능을 제공하는 SNS 서비스로 이동)
Kuks: 카카오 인증을 통해 이력서, 경력 기술서 등의 프로필을 확인

DB 구성
Table

DDL
CREATE TABLE `kuks_board` (
  `idx` bigint NOT NULL AUTO_INCREMENT,
  `contents` varchar(255) DEFAULT NULL,
  `createdAt` datetime(6) DEFAULT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idx`))



프로젝트 실행 방법



