## 신뢰할 수 없는 코드를 쓰면서 불변성 지키기

우리가 만든 모든 코드는 불변성이 지켜지는 안전지대safe zon에 있지만, 바꿀 수 없는 라이브러리나 레거시 코드를 사용한다면 카피-온-라이트를 적용할 수 없습니다. 대신 방어적 복사defensive copy를 이용하면 불변성을 지킬 수 있습니다. 카피-온-라이트가 얕은 복사shallow copy를 이용하여 안전지대를 구축한다면, 방어적 복사는 안전지대를 나가고 들어오는 데이터에 모두 깊은 복사deep copy를 적용합니다. 불변성을 스스로 구현할 수 있기 때문에 강력하지만, 복사본이 많이 필요하여 비용이 많이 들기 때문에 카피-온-라이트와 용례를 구분하여 사용해야 합니다.