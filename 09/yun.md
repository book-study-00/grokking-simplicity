# 9장 계층형 설계2

### 패턴 2: 추상화 벽

- 세부 구현을 감춘 함수로 이루어진 계층
  ⇒ 추상화 벽에 있는 함수를 사용할 때는 구현을 전혀 몰라도 함수 사용 가능
  ⇒ 팀 간 책임을 명확하게 나눌 수 있음 (독립적으로 일 할 수 있게 함)
- 추상화 벽으로 추상화 벽 아래에 있는 코드와 위에 있는 코드의 의존성을 없앨 수 있음
- 신경 쓰지 않아도 되는 것을 다루는 것이 추상화 벽의 핵심

### 추상화 벽 언제 사용?

1. 구현에 대한 확신이 없는 경우
   ⇒ 쉽게 구현을 바꿀 수 있음
   ⇒ **단, 오지 않을 수도 있는 미래를 위해 불필요한 코드를 작성하는 것은 좋지 않음
   (대부분의 데이터 구조는 바뀌지 않음)**
2. 코드를 읽고 쓰기 쉽게 만들기 위해
3. 팀 간에 조율해야 할 것을 줄이기 위해
4. 주어진 문제에 집중하기 위해
   ⇒ 추상화 벽을 사용하면 해결하려는 문제의 구체적인 부분을 무시할 수 있음

---

### 패턴 3: 작은 인터페이스

- 인터페이스를 최소화하면 하위 계층에 불필요한 기능이 쓸데없이 커지는 것을 막을 수 있음
- 새로운 기능을 만들 때 하위 계층에 기능을 추가하거나 고치는 것보다 상위 계층에 만드는 것
  ⇒ 상위 계층에 어떤 함수를 만들 때 가능한 현재 계층에 있는 함수로 구현하는 것이 작은 인터페이스를 실천하는 방법
  ⇒ 일반적으로 그래프에서 상위 계층에 구현하는 것이 좋음
- 하위 계층을 고치지 않고 상위 계층에서 문제를 해결 할 수 있음
- 모든 계층에 적용할 수 있음

### 추상화 벽을 작게 만들어야 하는 이유

1. 추상화 벽에 코드가 많을수록 구현이 변경되었을 때 고쳐야 할 것이 많아짐
2. 추상화 벽에 있는 코드는 낮은 수준의 코드이기 때문에 더 많은 버그가 있을 수 있음
3. 낮은 수준의 코드는 이해하기 더 어려움
4. 추상화 벽에 코드가 많을수록 팀 간 조율해야 할 것도 많아짐
5. 추상화 벽에 인터페이스가 많으면 알아야 할 것이 많아 사용하기 어려움

---

### 패턴 4: 편리한 계층

- 언제 패턴을 적용하고 또 언제 멈춰야 하는지 알려줌
- 작업하는 코드가 편리하다고 느껴진다면 설계는 조금 멈춰도 됨
- 구체적인 것을 너무 많이 알아야 하거나, 코드가 지저분하다고 느껴진다면 패턴 적용 필요

---

### 기능적 요구사항(functional requirements)

- 소프트웨어가 정확히 해야 하는 일
  (ex. 세금에 대한 계산)

### 비기능적 요구사항(nonfunctional requirements, NFRs)

⇒ 소프트웨어 설계를 하는 중요한 이유

1. 유지보수성(maintainability): 요구 사항이 바뀌었을 때 가장 쉽게 고칠 수 있는 코드?
   ⇒ 호출 그래프에서 가장 위에 있는 코드가 고치기 가장 쉬움
   (호출 그래프에서 의존성은 위에서 아래로 가기 때문)
   ⇒ 시간이 지나도 변하지 않는 코드는 가장 아래 계층에 있어야 함(ex. 카피-온-라이트 함수)
2. 테스트성(testability): 어떤 것을 테스트하는 것이 가장 중요?
   ⇒ 호출 그래프에서 아래에 있는 코드는 테스트가 중요
3. 재사용성(reusability): 어떤 함수가 재사용하기 좋은지?
   ⇒ 호출 그래프에서 아래에 있는 코드가 재사용하기 더 좋음
   ⇒ 호출 그래프에서 해당 함수 아래에 함수가 적을수록 재사용하기 더 좋음