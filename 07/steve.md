# 07 신뢰할 수 없는 코드를 쓰면서 불변성 지키기

### 방어적 복사 (defensive copy)

- 원본이 바뀌는 것을 막아줌
- 데이터 전달 전 혹은 전후에 복사

### 방어적 복사 규칙

- 1. 데이터가 안전한 코드에서 나갈 때 복사하기
- 2. 안전한 코드로 데이터가 들어올 때 복사하기

### 카피-온-라이트와 비교
- 방어적 복사는 깊은 복사, 카피-온-라이트는 얕은 복사
- 방어적 복사는 불변성 원칙을 구현하지 않은 코드로부터 데이터를 보호해 줌
- 깊은 복사는 위에서 아래로 중첩된 데이터 전체를 복사함, 얕은 복사는 필요한 부분만 최소한으로 복사

```js
// shift not using shfit
function safeShift(data) {
  const copy = data.slice();
  return {
    first: copy.shift(),
    rest: copy.slice(1)
  }
}
```