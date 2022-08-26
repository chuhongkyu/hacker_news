# 해커스 뉴스

- 타입 추론

  - 대표적으로 for(i)같은거

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

- 타입 인터페이스
