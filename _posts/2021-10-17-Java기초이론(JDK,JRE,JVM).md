---
title: "[Java] 기초 이론 (JDK, JRE, JVM)"
excerpt: "Write once, Run anywhere"
toc: true
toc_sticky: true
toc_label: "주요 목차"
header:
  teaser: /assets/images/header_java.png

categories:
  - Java

tags:
  - Programming
  - 프로그래밍
  - 자바
  - Java
  - JDK
  - JRE
  - JVM
  - 메모리
  - 컴파일
  - Compile
  - 실행
  - 엔코아 플레이데이터
last_modified_at: 2021-10-17T21:47:31+09:00
---

## 1. 자바 Spec 

- J2SE(Standard Edition)
  - 로컬 환경
  - SE란? : 로컬 스펙의 자바 어플리케이션을 만드는 것
- J2EE(Enterprize Edition)
  - 분산 환경
  - EE란? : 로컬 스펙 이상의 사양을 요구하는 어플리케이션 제작
  - ex) 채팅 프로그램 (서버 - 클라이언트(사용자) 간 소통)

## 2. JDK, JRE, JVM

- Java로 어플리케이션을 만들려면?
  - ⑴ JDK를 설치해야한다!<br>Java Development Kit Tool

<br>

- JDK를 설치하면 OS에 어떤 변화가?
  - JRE(Java Runtime Environment) :: 라이브러리
  - JVM(Java Virtual Machine) :: 소프트웨어 위에 올라가는 메모리
  - JDK를 설치하게 되면 자바 어플리케이션이 실행, 구동되는 장소가 만들어진다 :: 그게 JVM
  - 즉, JRE와 JVM이 OS에 맞게 갖춰진다

<br>

이렇게 갖춰진 상태에서...

**ⓐ class 코드 작성** (Eclipse - 자동완성 가능, 단점 :: 알아서 입력해버리니까 배울 수가 없음)<br>

```java
class Greeting {
    public static void (String[] args) { // 실행이 되려면 이와 같은 메인 메소드를 가져야만 실행된다. (실행의 의미 :: 메모리가 동작한다)
        System.out(콘솔).println("Java");
    }
}
```

**ⓑ** Ctrl + s :: **저장**<br>저장이 된다는 것은 Java Syntax 문법이 완벽하다는 얘기임

### ⚙️ 컴파일 단계

위와 같이 작성 후 저장을 하면 Greeting.java 파일이 만들어질 것이다 (.java 파일은 사람을 위한 프로그램 코드, 기계 입장에서는 원시 소스 코드)

그 후...

- java.exe가 돌아가는 것!
- 기계가 알아볼 수 있게 하는 과정을 말한다
  - ⑴ 자바 Syntax check
  - ⑵ Greeting.class 생성<br><br>이 상태에서 자바는 컴파일이 되더라도 실행하진 않는다.<br>바이너리 코드가 아닌 바이트 코드(불완전한 기계어)이기 때문

내가 저장을 하는 순간 문법적 오류가 없으면 자동으로 이클립스가 컴파일 실행 ☞ 컴파일이 된다!

### ⚙️ 실행 단계

Greeting.class를 메모리(JVM)에 Loader → Byte code generator(검증) → Interpreter(해석) → 실행

---

### 🖼️ [그림 설명] JVM (Java Virtual Machine)

#### 🖼️ 컴파일  및 실행 단계

![20210222_163654](https://user-images.githubusercontent.com/78403443/121760905-0cfee200-cb68-11eb-821d-5c4fcab84250.png)

(자주색 화살표 부분이 JVM, 다른말로 플랫폼이라고 함)<br>각 OS에 맞게 JVM이 설치됨 (파란색 빗금)

자바는 컴파일 단계와 실행 단계 모두를 거치게 만듬<br>이유는? 플랫폼 독립성(Platform Independence) 때문, 운영체제를 가리지 않고 어디에서든 실행될 수 있도록!

JVM이 인식될 수 있는 코드가 딱 하나 있다. 그게 Byte code<br>(JVM에선 Byte code만 돌아간다)<br>따라서 JVM에서는 어떤 OS에서든지 다 돌아간다(실행된다)<br>**Write once, Run anywhere**

OS(하드웨어)와 JVM 간은 종속적이기 때문에 실행이 독립적일 수가 있는 것!

### 🖼️ [그림 설명] JRE (Java Runtime Environment)

![20210222_172841](https://user-images.githubusercontent.com/78403443/121760925-26079300-cb68-11eb-91cd-7d052131f671.png)

위에서 JDK를 설치하면 JVM과 함께 JRE도 갖춰진다고 했다.

JRE는 크게 rt.jar를 이해하면 된다.<br>그 이유는... API(다른 사람이 만들어서 실행파일로 제공한 클래스)가 rt.jar에 들어있기 때문

(기본 설치 했을 경우) 경로 :: C:\Program Files\Java\jdk1.8.0_xxx\jre\lib 에 위치

그렇기 때문에!<br>첫번째로, rt.jar를 이해<br>두번째로, src폴더 안에 있는 원시 소스 코드 이해<br>세번째로, ★ [Java 8 api document(자바 8버전 api 문서 웹페이지) 열람](https://docs.oracle.com/javase/8/docs/api/) **(북마크 추가!!!)**

이 순서로 이해하고 살펴보는 것이 매우 중요하다!

---

<div class="notice">
    <h4>
	🔊 2021.02.22 (월) 엔코아 플레이데이터 수업 내용을 정리한 노트 게시물입니다.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;따라서, 이미지 파일은 불펌하지 말아주시기 바랍니다.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;개인적으로 수업 들으면서 간단히 정리한 노트 내용이므로 내용은 참고만을 부탁드리며<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;잘못된 내용이나 부족한 내용, 보완해야 할 점 등 피드백은 언제나 편하게 댓글로 남겨주시면 감사드리겠습니다 😊<br><br>📝 게시물 최근 수정 : {{ page.last_modified_at }}
    </h4>
</div>

