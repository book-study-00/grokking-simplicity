# 14장 중첩된 데이터에 함수형 도구 사용하기

### 함수 기능이 있는 암묵적 인자를 리팩토링

- ex) incrementField(), decrementField(), doubleField() halveField()
  ⇒ increment, decrement, double, halve 가 함수 본문에 사용
- 함수 기능을 매개 변수로 받는 고차 함수를 만들어 리팩토링

### 객체에 값을 변경하는 부분을 `update()` 로 일반화

1. 객체에서 값을 조회
2. 값을 바꾸기
3. 객체에 값을 설정(카피-온-라이트 사용)

```jsx
const objectSet = (object, key, newValue) => ({ ...object, [key]: newValue });

const update = (object, key, modify) => {
  const value = object[key]; // 1. 값 조회
  const newValue = modify(value); // 2. modify 적용 값으로 변경
  const newObject = objectSet(object, key, newValue); // 3. 객체에 값 설정 (카피-온-라이트)
  return newObject;
};

const incrementField = (item, field) =>
  update(item, field, (value) => value + 1);
const decrementField = (item, field) =>
  update(item, field, (value) => value - 1);
const doubleField = (item, field) => update(item, field, (value) => value * 2);
const halveField = (item, field) => update(item, field, (value) => value / 2);
```

### 객체에 깊이가 깊으면 위 방법 불가

⇒ `nestedUpdate()` 로 일반화

- 중첩 깊이에 상관없이 사용 가능
  ⇒ 중첩된 데이터를 효율적으로 다룰 수 있음
- 추상화 벽에 함수를 만들고 의미 있는 이름을 붙여줘서 데이터 구조를 줄일 수 있음

1. 기억해야 할 것이 줄어듦
2. 동작의 이름이 있으므로 각각의 동작을 기억하기 쉬움

```jsx
const objectSet = (object, key, newValue) => ({ ...object, [key]: newValue });
const dropFirst = (arr) => {
  const newArr = [...arr];
  newArr.shift();
  return newArr;
};

const update = (object, key, modify) => {
  const value = object[key]; // 1. 값 조회
  const newValue = modify(value); // 2. modify 적용 값으로 변경
  const newObject = objectSet(object, key, newValue); // 3. 객체에 값 설정 (카피-온-라이트)
  return newObject;
};

const nestedUpdate = (object, keys, modify) => {
  if (keys.length === 0) {
    return modify(object);
  }
  const key1 = keys[0];
  const restOfKeys = dropFirst(keys);
  return update(object, key1, (value1) =>
    nestedUpdate(value1, restOfKeys, modify)
  );
};
```

### 재귀는 중첩된 데이터와 잘 어울림!

- ex) deepCopy(), nestedUpdate()
- 중첩된 데이터를 다루는 경우에는 재귀로 표현 하는 것이 for문보다 더 명확
  cf) for문으로 사용하려면 스택을 직접 관리해야 함

### 안전한 재귀 사용법

1. 종료 조건
2. 재귀 호출
3. 종료 조건에 다가가기
   ⇒ 최소 하나 이상의 인자가 점점 줄어들어야 함
   **cf) 같은 인자를 그대로 전달하면 무한 호출에 빠질 가능성 높아짐**
