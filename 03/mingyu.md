---
title: 03 액션과 계산, 데이터의 차이를 알기
---

:::info 이번 장에서 살펴볼 내용

- 액션과 계산, 데이터가 어떻게 다른지 배웁니다.
- 문제에 대해 생각하거나 코드를 작성할 때 또는 코드를 읽을 때 액션과 계산, 데이터를 구분해서 적용해봅니다.
- 액션이 코드 전체로 퍼질 수 있다는 것을 이해합니다.
- 이미 있는 코드에서 어떤 부분이 액션인지 찾아봅니다.

:::

이 장에서는 현실 세계의 문제를 통해 코드에서 액션과 계산, 데이터를 찾아 적용하는 방법을 알아보겠습니다. 액션과 계산, 데이터를 구분하는 것은 함수형 프로그래밍의 첫 번째 단계입니다. 이 장을 통해 일반적으로 코드에 액션이 너무 많이 사용되고 있는 반면에 계산은 거의 찾아보기 힘든 이유를 알 수 있습니다.

## 액션과 계산, 데이터

| **액션** | **계산** | **데이터** |
| --- | --- | --- |
| 실행 시점과 횟수에 의존합니다. | 입력으로 출력을 계산합니다. | 이벤트에 대한 사실 |
| 다른 말로 **부수 효과**, **부수 효과가 있는 함수**, **순수하지 않은 함수**라고 부르기도 합니다. | 다른 말로 **순수 함수**, **수학 함수**라고 부르기도 합니다. | |
| 예) 이메일 보내기, 데이터베이스 읽기 | 예) 최댓값 찾기, 이메일 주소가 올바른지 확인하기 | 예) 사용자가 입력한 이메일 주소, 은행 API로 읽은 달러 수량 |

모든 개발 과정에서 액션과 계산 데이터를 구분하는 기술을 적용할 수 있습니다.

:::note 용어 설명

계산은 계산을 호출하는 코드를 계산 결과로 바꿀 수 있기 때문에 **참조 투명**합니다. 2 + 3의 예를 들어 봅시다. +는 계산이기 때문에 2 + 3의 결과는 항상 5 입니다. 그래서 2 + 3이라는 코드를 5라는 결괏값으로 바꿔도 프로그램이 달라지지 않습니다.

:::

### 1. 문제에 대해 생각할 때

문제를 액션과 계산, 데이터를 나눠보면 코드를 작성할 때 특별히 주의해야 할 부분(액션)과 데이터로 처리해야 할 부분, 결정을 내려야 하는 부분(계산)을 명확히 알 수 있습니다.

### 2. 코딩할 때

함수형 프로그래머는 최대한 액션에서 계산을 빼내려고 합니다. 또 계산에서는 데이터를 분리할 수 있는지 생각합니다. 더 나아가 액션이 계산이 될 수 있는지, 계산을 데이터가 될 수 있는지 고민합니다.

### 3. 코드를 읽을 때

코드를 읽을 때 액션과 계산, 데이터 중 어떤 것에 속하는지 잘 살펴봐야 합니다. 특히 액션은 시간에 의존하기 때문에 더 조심해야 합니다. 그래서 언제나 숨어있는 액션까지도 찾아야 합니다. 대부분의 함수형 프로그래머는 더 좋은 코드를 만들기 위해 이미 있는 코드를 액션과 계산, 데이터로 리팩터링하는 방법을 찾을 것입니다.

## 액션과 계산, 데이터는 어디에나 적용할 수 있습니다.

우리가 일상에서 자주 하는 장보기에 액션과 계산, 데이터를 적용해 봅시다. 

| | 장보기 과정 | 설명 |
| -- | -- | -- |
| 액션 | 냉장고 확인하기 | 액션입니다. 냉장고를 확인하는 시점에 따라 냉장고에 있는 제품이 다르기 때문입니다. |
| 액션 | 운전해서 상점으로 가기 | 이 단계 역시 액션입니다. 두 번 운전해서 상점에 가면 연료가 두 배로 듭니다. | 
| 액션 | 누군가가 브로콜리를 구입하면 브로콜리가 다 떨어질 수도 있기 때문에 구입하는 시점이 중요합니다. |
| 액션 | 운전해서 집으로 오기 | 이미 집에 있다면 상점에 있는 것이 아니기 때문에 상점에서 집으로 올 수 없습니다. 언제 하는지가 중요한 단계입니다. |

모든 것이 액션이라니! 뭔가 놓친 것이 있는 것 같습니다. 놓친 것이 있는지 단계별로 다시 살펴봅시다.

### 냉장고 확인하기

냉장고를 확인하는 일은 확인하는 시점이 중요하기 때문에 **액션**입니다. 사실 여기에는 **데이터**가 숨어 있습니다. 상점 위치나 가는 경로는 데이터로 볼 수 있습니다.

### 필요한 것 구입하기

구입하는 일도 확실히 **액션**입니다. 필요한 것을 구입하려면 필요한 것이 무엇인지 알아야 합니다. 필요한 것은 어떻게 알 수 있을까요? 필요하지만 없는 제품의 목록을 만드는 것이 가장 쉽습니다.

> 필요한 재고 - 현재 재고 = 장보기 목록

앞에 '냉장고 확인하기' 단계에서 만든 **현재 재고 데이터**를 사용했습니다. 이제 '필요한 것 구입하기' 단계를 몇 단계로 더 나눌 수 있습니다.

| | 구입하는 과정 | 설명 |
| -- | -- | -- |
| 데이터 | 현재 재고 | |
| 데이터 | 필요한 재고 | |
| 계산 | 재고 '빼기' | 재고 '빼기'는 같은 입력값일 때 항상 같은 결괏값을 주기 때문에 계산입니다.<br/>어떤 것을 결정하는 일은 계산으로 표현할 수 있습니다. 장보기 목록을 결정하는 것은 계산입니다. 실제 구입하는 단계와 구입할 것을 결정하는 단계를 나누었습니다. |
| 데이터 | 장보기 목록 | |
| 액션 | 목록에 있는 것 구입하기 | |

### 운전해서 집으로 오기

액션과 계산, 데이터를 더 명확하게 하기 위해 액션과 계산, 데이터에 해당하는 단계를 각각 다른 열에 그려봅시다. 그리고 데이터는 액션과 계산의 입력과 출력으로 사용되기 때문에 선으로 연결해 봅시다.

![img](./images/3.1.jpg)

예를 들어 '냉장고 확인하기' 단계는 '냉장실 확인하기' 단계와 '냉동실 확인하기' 단계로 나눠 액션으로 만들 수 있습니다. 각 액션은 각각의 데이터를 만들 수도 있고 연결할 수 있습니다. 

계속 나누다 보면 점점 더 복잡해진다고 생각할 수 있습니다. 하지만 액션에 숨어 있는 다른 액션이나 계산 또는 데이터를 발견하기 위해 나눌 수 있는 만큼 나누는 것이 좋습니다.

## 장보기 과정에서 배운 것

### 1. 액션과 계산, 데이터는 어디에나 적용할 수 있습니다.

### 2. 액션 안에는 계산과 데이터, 또 다른 액션이 숨어 있을지도 모릅니다.

단순해 보이는 액션도 또 다른 액션이나 계산, 데이터로 나눌 수 있습니다. 함수형 프로그래밍에서는 액션을 더 작은 액션과 계산, 데이터로 나누고 나누는 것을 언제 멈춰야 할지 아는 것이 중요합니다.

### 3. 계산은 더 작은 계산과 데이터로 나누고 연결할 수 있습니다.

계산을 더 작은 계산으로 나누는 것이 더 좋을 떄도 잇습니다. 계산을 나누면 첫 번째 계산의 결과 데이터가 두 번째 계산의 입력이 됩니다.

### 4. 데이터는 데이터만 조합할 수 있습니다.

데이터는 다른 영향을 주지 않는 그냥 데이터입니다. 그래서 데이터 찾는 일을 먼저 해야 합니다. 데이터를 찾았다면 동작에 대해 많은 것을 알 수 있습니다.

### 5. 계산은 때로 '우리 머릿속에서' 일어납니다.

사실 계산 단계가 있지만 잘 보이지 않는 이유는 계산이 우리 사고 과정이 녹아있기 때문입니다. 이처럼 계산은 머릿속에서 나도 모르게 일어납니다.

하지만 이 사실을 알면 계산을 더 쉽게 찾을 수 있습니다. 어떤 단계에서 무엇인가 결정해야 할 것이 있는지 또는 무엇인가 계획해서 방법을 찾아야 할 것이 있는지 스스로에게 물어보면 됩니다. 결정과 계획은 계산이 될 가능성이 높기 때문입니다.

:::important 데이터에 대해 자세히 알아보기

#### 데이터는 무엇인가요?

데이터는 이벤트에 대한 사실입니다. 일어난 일의 결과를 기록한 것입니다.

#### 어떻게 데이터에 의미를 담을 수 있나요?

데이터 구조로 의미를 담을 수 있습니다. 예를 들어 목록의 순서가 중요하다면 순서를 보장하는 데이터 구조를 사용하면 됩니다. 데이터 구조로 도메인을 표현할 수 있습니다.

**불변성**

함수형 프로그래머는 불변 데이터 구조를 만들기 위해 두 가지 원칙을 사용합니다.

1. **카피-온-라이트**. 변경할 때 복사본을 만듭니다.
2. **방어적 복사**. 보관하려고 하는 데이터의 복사본을 만듭니다.

#### 데이터의 장점은 무엇인가요?

역설적으로 데이터는 데이터 자체로 할 수 있는 것이 없기 때문에 좋습니다. 그래서 데이터는 데이터 그대로 이해할 수 있습니다.

1. **직렬화** 직력화된 액션과 계산은 다른 곳에서 잘 동작할 것이라는 보장이 없습니다. 하지만 직렬화된 데이터는 전송하거나 디스크에 저장했다가 읽기 쉽습니다.
2. **동일성 비교** 계산이나 액션은 서로 비교하기 어렵습니다. 하지만 데이터는 비교하기 쉽습니다.
3. **자유로운 해석** 데이터는 여러 가지 방법으로 해석할 수 있습니다. 접속 로그는 문제 해결을 위해 사용할 수 있지만, 모니터링을 위해 사용할 수도 있습니다.

#### 데이터의 단점은 무엇인가요?

유연하게 해석할 수 있다는 점은 장점이지만, 해석이 반드시 필요하다는 점은 단점입니다.

:::

## 새로 만드는 코드에 함수형 사고 적용하기

### 쿠폰독의 새로운 마케팅 전략

쿠폰독은 쿠폰에 관심 있는 구독자들에게 이메일로 쿠폰을 매주 보내주는 서비스입니다.

쿠폰독 CMO는 사용자를 더 늘리기 위해 친구 10명을 추천하면 더 좋은 쿠폰을 보내주려고 합니다.

쿠폰독은 이메일별로 각 사용자가 추천한 친구 수를 기록하고 있습니다.

쿠폰에 대한 정보를 가지고 있는 데이터베이스도 있습니다. 쿠폰 데이터베이스는 각 쿠폰에 'bad', 'good', 'best'과 같은 등급 정보도 있습니다. 'best' 쿠폰은 추천을 많이 한 사용자를 위한 쿠폰입니다. 'good' 쿠폰은 모든 사용자들에게 전달되는 쿠폰이고 'bad' 쿠폰은 사용하지 않기 때문에 사용자에게 전달하지 않습니다.

## 쿠폰 보내는 과정을 그려보기

쿠폰 보내는 과정을 그리는 방법은 많지만 여기서는 특별한 형태로 그려보겠습니다. 이 방법으로 그리면 액션과 계산, 데이터를 구별해서 그릴 수 있습니다.

![img](./images/3.2.png)

### 1. 데이터베이스에서 구독자를 가져오는 것부터 시작해 봅시다.

쿠폰을 이메일로 보내면서 먼저 데이터베이스에서 구독자를 가져와야 합니다. 이 단계는 **액션**입니다. 구독자는 계속 바뀌기 때문에 지금 가져온 구독자와 다음에 가져온 구독자는 다를 수 있습니다. 구독자를 데이터베이스에서 가져오면 사용자 목록을 얻을 수 있고, 이것은 **데이터**입니다.

### 2. 데이터베이스에서 쿠폰 목록 가져오기

데이터베이스에서 쿠폰 목록 가져오는 것도 **액션**입니다. 쿠폰 데이터베이스는 계속 바뀌기 때문에 가져오는 시점이 중요합니다. 그리고 가져온 쿠폰 목록은 **데이터**입니다.

### 3. 보내야 할 이메일 목록 만들기

함수형 프로그래머는 처리 과정에 필요한 데이터를 만들기도 합니다. 장을 볼 때 돌아다니면서 생각나는 것을 사지 않고 장보기 전에 목록을 만드는 것과 비슷하다고 할 수 있습니다.

'이메일 목록 계획하기'에서 생성된 이메일 목록은 다음 단계에서 사용할 데이터입니다.

### 4. 이메일 전송하기

이제 계획한 이베일을 보낼 수 있습니다. 이메일 메시지에는 수진자와 보낸 내용이 이미 앞에서 다 만들었기 때문에 목록을 순회하면서 그냥 보내면 됩니다.

![img](./images/3.3.png)

### 이메일 만드는 부분을 자세히 살펴보기

계산을 나누면 구현하기 쉽습니다. 하지만 충분히 구현하기 쉽다고 생각되는 시점에서 더 나누는 것을 멈춰야 합니다.

## 쿠폰 보내는 과정 구현하기

쿠폰 등급을 결정하는 계산과 구독자 데이터, 쿠폰 등급 데이터가 있습니다.

![img](./images/3.4.png)

### 데이터베이스에서 가져온 구독자 데이터