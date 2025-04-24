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
  <li>Calculator: You can use this calculator to evaluate mathematical expressions.</li>
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

![Footer](https://capsule-render.vercel.app/api?type=waving&color=%23f2f2f2&height=200&section=footer)
