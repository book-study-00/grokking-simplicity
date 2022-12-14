## 함수형 프로그래밍의 정의

- 부수효과를 피하는 것

  - 💡 **부수효과란?**
    : 함수가 리턴값 이외에 하는 모든 일 (ex. 이메일 보내기, 전역 상태 수정 …)

- 순수함수만 사용하는 것
  - 💡 **순수함수란? (aka. 수학함수)** :
    인자에만 의존하고 부수효과가 없는 함수. 같은 인자를 넣으면, 항상 같은 결과가 출력됨

하지만 위의 정의와 다르게 실제 함수형 프로그래머는 부수 효과와 순수하지 않은 함수를 사용함

<br/>

## 실용적인 측면에서 함수형 프로그래밍 정의의 문제점

- **부수 효과는 필요하다**
  - 부수효과는 소프트웨어를 실행하는 이유 (이메일 전송, db읽고 쓰기…)
- **함수형 프로그래밍은 부수효과를 잘 다룰 수 있다**
  - 함수형 프로그래머는 부수 효과를 잘 다루기 위한 도구를 많이 알고있다.
- **함수형 프로그래밍은 실용적인다**
  - 수학적인 정의는 함수형 프로그래밍이 실용적이지 않다고 느끼게 함. 따라서 혼란을 줄 수있다.

<br/>

## 함수형 프로그래밍 = 기술 & 개념

- 함수형 프로그래밍의 중요한 개념은 객체지향 프로그래밍이나 절차적 프로그래밍을 가리지 않고 모든 프로그래밍 언어에서 쓸 수 있다.

<br/>

## 액션과 계산, 데이터 구분

함수형 프로그래머는 코드를 액션과 계산 데이터로 구분한다.

`데이터 > 계산 > 액션`

### **액션**

```jsx
sendEmail(to, from, subject, body);
saveUserDB(user);
```

- 호출하는 시점과 횟수에 의존.
- 호출할 때 조심해야 함.

---

**필요한 도구**

- 시간이 지남에 따라 안전하게 상태를 바꿀 수 있는 방법
- 순서 보장
- 액션이 정확히 한 번만 실행되게 보장

<br/>

### **계산**

```jsx
sum(number);
string_length(str);
```

- 입력값을 계산해 출력
- 테스트가 쉽고, 몇번을 불러도 안전

---

**필요한 도구**

- 정확성을 위한 정적 분석
- 수학적 지식
- 테스트 전략

<br/>

### **데이터**

- 이벤트에 대한 사실을 기록한 것
- 말 그대로 데이터
- 데이터를 활용해 정보를 얻을 수 있다

---

**필요한 도구**

- 효율적인 데이터 구성 방법
- 데이터 보관 기술
- 데이터를 활용해 중요한 것을 발견하는 원칙

<br/>

## **액션, 계산, 데이터를 구분하는 이유**

- 복잡한 소프트웨어에서 동작 방법을 이해하는 것은 중요하지만 쉽지 않다.
- 데이터와 계산은 실행 시점이나 횟수에 의존하지 않기 때문에 코드를 데이터와 계산으로 바꿀수록 문제에서 벗어날 수 있다.
- 액션은 문제가 될 수 있지만, 코드 전체에 영향을 주지 않도록 격리시키면 된다.
- **코드의 많은 부분을 액션에서 계산으로 옮기면 액션도 다루기 쉬워진다.**

<br/>

## 다른 함수형 프로그래밍 책과 다른 점

- 실용적이다.
- 실제 있을 법한 시나리오로 설명한다.
  - 실무에 가까운 이야기
- 소프트웨어 설계를 중심으로 설명
  - 규모가 큰 소프트웨어를 위한 설계원칙 설명
- 자바스크립트는 함수형 프로그램을 하기 좋은 언어는 아니지만, 부족하기 때문에 가르치기 좋은 언어
