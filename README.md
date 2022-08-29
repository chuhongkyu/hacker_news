# 해커스 뉴스

## 타입스크립트

- 타입 추론

  - 대표적으로 for(i)같은거

- 타입 알리아스, 인터페이스 중 하나만 사용한다.
- 인터섹션 확장시 차이가 남. 타입 결합, 조합

- 타입 알리아스

  ```
  type Store = {
    currentPage: number;
    feeds: [];
  };
  ```

  - 인터섹션 있음.
  - 중복을 또 씀.

  ```
  type NewsComment = News & {
    comments: NewsComment[];
    level: number;
  };
  ```

  - 유니온 타입 이거 또는 이거 사용 가능

- 타입 인터페이스

  - 코드를 확장하는 느낌에서는 interface 사용
  - 동일한 이름으로 재선언 가능
  - 선언된 타입은 선언 이후의 타입 확장

- 타입스크립트 권장
  - Typescript 공식 문서에서는 type alias 대신 interface 키워드를 사용하여 타입을 선언할 것을 권장하고 있다.
    따라서, 튜플이나 &, | 연산자를 필수적으로 사용해야 하는 상황이 아니라면 interface 키워드를 사용하는 것이 바람직하다.
