![header](https://capsule-render.vercel.app/api?type=wave&color=%23f2f2f2&height=200&section=header&text=Kuks%20Profile%20Maker&fontSize=90&fontColor=ffffff)

<h4>
  Hello. I'm Kim Yun Kuk, a 3rd-year developer.
</br>
  </br>
  This is a side project I've attempted while sharing knowledge with various developers.
</br>
  </br>
  The structure of this Readme file is as follows:
</h4>

  <li>Tech Stack</li>
  <li>Address & Port</li>
  <li>Menu Tab Configuration</li>
  <li>DB</li>
  <li>How to Run the Project</li>
  <li>Language</li>
  <li>Tools</li>
  <li>Simulation</li>
<h2>Tech Stack</h2>


<h3># Back-End:</h3>
<li> Spring Boot</li>
<li> Nodejs</li>
<li> MySQL</li>
<li> Github</li>
<li> Gradle</li>
<li> Java</li>
<li> Javascript</li>

<h3># Front-End:</h3>
<li> React</li>
<li> HTML</li>

<h2>Address & Port</h2>

```
kuksbackboot: http://localhost:8081
kuksfrontreact: http://localhost:3000
kukssns: http://localhost:8090
```

<h2>Menu Tab Configuration</h2>
<ul>
  <li>Home: View posts</li>
  <li>Post: Create post</li>
  <li>Kuks Github: Kim Yun Kuk's GitHub repository</li>
  <li>Kuks Tistory: Kim Yun Kuk's Tistory blog</li>
  <li>Kuks SNS: SNS service application implemented with Node.js</li>
  (Move to SNS service providing functions such as posting, deleting, uploading photos, tag search, follow, and following)
  <li>Kuks: Check profiles such as resumes and career descriptions via Kakao authentication</li>
</ul>


<h2>DB</h2>
<h3># Table [kuks_board]</h3>

| Columns    | Datatype    | Default   | Comments                 |
|------------|-------------|-----------|--------------------------|
| idx        | bigint      | -         | Automatically incremented index |
| contents   | varchar(255)| NULL      | Contents of the post      |
| createdAt  | datetime(6) | NULL      | Date and time of creation |
| createdBy  | varchar(255)| NULL      | Creator of the post       |
| title      | varchar(255)| NULL      | Title of the post         |


<h3># kuks_board DDL</h3>

```
CREATE TABLE `kuks_board` (
  `idx` bigint NOT NULL AUTO_INCREMENT,
  `contents` varchar(255) DEFAULT NULL,
  `createdAt` datetime(6) DEFAULT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idx`))
```


<h2>How to Run the Project</h2>

```
Run Spring Boot Application 
$ cd kuksbackboot
$ ./gradlew bootRun

Run React Application
$ cd kuksfrontreact
$ npm start

Run Nodejs Application
$ cd kukssns
$ node app
```


<h2>Language</h2>

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=Kukvly&layout=compact&theme=tokyonight&hide=swift&repo=kukssns&repo=kuksside)](https://github.com/Kukvly/github-readme-stats)

<h2>Tools</h2>

- IDE: ![IntelliJ IDEA](https://img.shields.io/badge/IntelliJ%20IDEA-000000?style=flat-square&logo=intellij-idea)
  ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=flat-square&logo=visual-studio-code)
- Version Control: ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
  ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github)
- Build Tools: ![Gradle](https://img.shields.io/badge/Gradle-02303A?style=flat-square&logo=gradle&logoColor=white)
- Database:   ![MySQL Workbench](https://img.shields.io/badge/MySQL%20Workbench-4479A1?style=flat-square&logo=mysql&logoColor=white)


<h2>Simulation</h2>

<h3><li>Home</li></h3>
<img width="1172" alt="스크린샷 2024-07-18 오전 12 10 58"
src="https://github.com/user-attachments/assets/fda072cb-6582-4080-9c2e-3cb4dfba1f44">


<h3><li>Post</li></h3>
<img width="1172" alt="스크린샷 2024-07-18 오전 12 51 59"
src="https://github.com/user-attachments/assets/8bbcc94b-6299-4aaa-b9a4-46455c0d4da6">


<h3><li>Edit/Delete/List</li></h3>
<img width="1172" alt="스크린샷 2024-07-18 오전 12 52 12"
src="https://github.com/user-attachments/assets/3c9f1834-db71-4c5b-b26c-f16a1ebeb4d9">


<h3><li>Kuks Github</li></h3>
<img width="1172" alt="스크린샷 2024-07-18 오전 12 20 52"
src="https://github.com/user-attachments/assets/717d9e02-08f3-4d4b-bed2-803a067eee2d">


<h3><li>Kuks Tistory</li></h3>
<img width="1172" alt="스크린샷 2024-07-18 오전 12 25 02"
src="https://github.com/user-attachments/assets/9154d421-7661-4445-982e-b541a5e348ff">

<h3><li>Kuks SNS</li></h3>
<h5><li>Kuks SNS List & Upload</li></h5>
<img width="1172" alt="스크린샷 2024-07-18 오전 12 34 35"
src="https://github.com/user-attachments/assets/cc7b97bd-ee59-4e43-bc25-ccb3a5d33f25">

<h5><li>Kuks SNS Kakao SSO</li></h5>
<img width="1172" alt="스크린샷 2024-07-18 오전 12 49 09"
src="https://github.com/user-attachments/assets/06972ec3-b98f-410a-a5d2-fb82550e772a">

<img width="1172" alt="스크린샷 2024-07-18 오전 12 35 03"
src="https://github.com/user-attachments/assets/7c09a12b-6f5d-4b2a-b0f1-516b41f551d3">

<h5><li>Kuks SNS Follow</li></h5>
<img width="1172" alt="스크린샷 2024-07-18 오전 12 35 23"
src="https://github.com/user-attachments/assets/def98fcd-ef95-41bb-8e12-0401687a0a53">

<h3><li>Kuks</li></h3>
<h5>- Kuks Kakao SSO</h5>
<img width="1172" alt="스크린샷 2024-07-18 오전 12 27 18"
src="https://github.com/user-attachments/assets/c992aa50-d074-4b76-a479-1af52072ad7a">

<img width="1172" alt="스크린샷 2024-07-18 오전 12 27 50"
src="https://github.com/user-attachments/assets/aff25276-cdaa-4e38-aedd-48be72860b41">

<h5>- About Kuks</h5>
<img width="1172" alt="스크린샷 2024-07-18 오전 12 33 33"
src="https://github.com/user-attachments/assets/c2c2fb17-6f21-4fb0-a6a0-203e69bb3ac2">

<img width="1172" alt="스크린샷 2024-07-18 오전 12 34 06"
src="https://github.com/user-attachments/assets/f571c23c-7d20-41aa-bb55-c6115088afa7">


![Footer](https://capsule-render.vercel.app/api?type=waving&color=%23f2f2f2&height=200&section=footer)
