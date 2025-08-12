# 1만 시간의 법칙

1만 시간의 법칙을 테마로 한 반응형 웹 애플리케이션입니다. 웹 접근성을 고려한 시맨틱 HTML과 CSS를 활용하여 구현했습니다.

## 목차

- [프로젝트 소개](#프로젝트-소개)
- [주요 기능](#주요-기능)
- [기술 스택](#기술-스택)
- [프로젝트 구조](#프로젝트-구조)
- [개발 일정](#개발-일정)
- [화면 설계도](#화면-설계도)
- [실행 방법](#실행-방법)
- [주요 구현 사항](#주요-구현-사항)
- [웹 접근성 고려사항](#웹-접근성-고려사항)
- [반응형 디자인](#반응형-디자인)
- [에러와 에러 해결](#에러와-에러-해결)
- [개발하며 느낀점](#개발하며-느낀점)
- [참고자료](#참고자료)

## 프로젝트 소개

1만 시간의 법칙은 어떤 분야의 전문가가 되기 위해서는 최소한 1만 시간의 훈련이 필요하다는 법칙을 바탕으로, 사용자가 원하는 분야와 하루 훈련 시간을 입력하면 1만 시간 달성까지 필요한 일수를 계산해주는 웹 애플리케이션입니다.

### 프로젝트 목표

- 사용자가 쉽게 1만 시간의 법칙을 체험할 수 있는 인터페이스 제공
- 반응형 디자인으로 다양한 디바이스에서 접근 가능
- 접근성을 고려한 웹 표준 준수

## 주요 기능

- **반응형 디자인**: 데스크톱, 태블릿, 모바일 환경 지원
- **모달 시스템**: 응원 메시지 및 라이캣 캐릭터 모달
- **웹 접근성**: 스크린 리더 지원 및 키보드 네비게이션
- **1만 시간 계산기**: 분야와 시간 입력을 통한 일수 계산 (추후 구현 예정)

## 기술 스택

- **HTML**: 시맨틱 마크업
- **CSS**:
  - CSS Grid & Flexbox
  - CSS Custom Properties (변수)
  - Media Queries
  - clamp() 함수
- **JavaScript**:
  - DOM 조작
  - 이벤트 리스너
  - 모달 기능
- **명명법**: 카멜 케이스 (camelCase) - 단어 사이를 대문자로 연결하여 가독성을 높이고 일관성 있는 클래스명 사용

## 📁 프로젝트 구조

```
2025-project-10000hours-rule/
├── index.html              # 메인 HTML 파일
├── styles/
│   ├── reset.css           # CSS 리셋
│   ├── style.css           # 메인 스타일
│   └── mobile.css          # 모바일 스타일
├── images/
│   ├── title.png           # 타이틀 이미지
│   ├── quote.png           # 인용구 이미지
│   ├── left.png            # 왼쪽 따옴표
│   ├── right.png           # 오른쪽 따옴표
│   ├── icon.png            # 커서 아이콘
│   ├── logo-m.png          # 로고
│   ├── licat-img.png       # 라이캣 캐릭터
│   ├── modal-text.png      # 모달 텍스트
│   └── modal-text-2x.png   # 모달 텍스트 (2x)
├── fonts/                  # 폰트 파일들
└── README.md              # 프로젝트 문서
```

## 📅 개발 일정

### Phase 1: 데스크톱 버전 작업

- [x] 작업 폴더 구조 생성 (HTML, CSS 등)
- [x] 피그마 파일 검토 및 디자인 요소 다운로드
- [x] 필요한 이미지, 아이콘, 폰트 등의 자산 추출/준비
- [x] 기본 HTML 파일 생성
- [x] 기본 CSS 파일 생성 (Reset CSS 포함)
- [x] 페이지 구조 분석 및 적절한 시멘틱 태그 선정 (header, nav, main, section, article, footer 등)
- [x] 접근성을 고려한 태그 사용 계획
- [x] 브레이크포인트 설정 (모바일, 데스크톱)
- [x] 모바일 퍼스트 vs 데스크톱 퍼스트 접근 방식 결정
- [x] 이미지 요소의 반응형 처리 방법 계획
- [x] HTML 기본 구조 마크업 작성
- [x] 기본 스타일 및 레이아웃 CSS 작성
- [x] 데스크톱 버전 스타일링

### Phase 2: 모바일 버전 작업

- [x] 모달창 구현 및 마무리
- [x] 브레이크포인트 설정 (모바일, 데스크톱)
- [x] 모바일 버전 스타일링 (미디어 쿼리 적용)
- [x] 이미지 요소의 반응형 처리
- [x] 적절한 대체 텍스트(alt) 제공
- [x] 키보드 접근성 확인

## 와이어프레임 / UI

### 데스크톱 | 모바일 버전

```
[와이어프레임 이미지 또는 링크 추가 예정]
```

> **참고**: 위 이미지는 프로젝트의 실제 화면 설계도와 반응형 동작을 보여줍니다.

## 실행 방법

1. 프로젝트 클론

```bash
git clone https://github.com/your-username/2025-project-10000hours-rule.git
cd 2025-project-10000hours-rule
```

## 🌐 배포 링크

**Live Demo**: [https://chaehyeon119.github.io/2025-project-10000hours-rule/](https://chaehyeon119.github.io/2025-project-10000hours-rule/)

## 주요 구현 사항

### 1. CSS Custom Properties 활용

```css
:root {
  --bg-purple: #5b2386;
  --text-white: #fff;
  --yellow: #fcee21;
  --btn-yellow: #fcee21;
  --font-main: "GmarketSans", sans-serif;
  --placeholder-gray: #babcbe;
}
```

### 2. 반응형 폰트 크기 (clamp 함수)

```css
/* 폰트가 넘치는 문제를 해결해줌 */
font-size: clamp(1.4rem, 2.5vw, 1.8rem);
```

### 3. 모달 시스템

```javascript
const dialog = document.getElementById("myDialog");
const showDialogBtn = document.getElementById("showDialogBtn");
const closeBtn = document.getElementById("closeBtn");

showDialogBtn.addEventListener("click", () => dialog.showModal());
closeBtn.addEventListener("click", () => dialog.close());
```

### 4. 시맨틱 HTML 구조

```html
<main class="container">
  <header class="title-section">
    <h1 class="a11y-hidden">1만 시간의 법칙</h1>
    <!-- 타이틀 이미지 -->
  </header>

  <section class="description">
    <h2 class="a11y-hidden">1만 시간의 법칙 설명</h2>
    <!-- 설명 내용 -->
  </section>

  <section class="form-section">
    <h2 class="a11y-hidden">1만 시간 계산기</h2>
    <!-- 폼 요소들 -->
  </section>
</main>
```

## 웹 접근성 고려사항

### 1. 시맨틱 HTML 구조

- `<header>`, `<main>`, `<footer>` 태그 활용
- `<nav>`, `<section>`, `<article>` 등 의미있는 태그 사용
- `aria-labelledby`, `aria-describedby` 속성으로 연결

### 2. 스크린 리더 지원

```html
<!-- 스크린 리더 전용 설명 -->
<h1 class="a11y-hidden">1만 시간의 법칙</h1>

<!-- 접근성 숨김 클래스 -->
.a11y-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin:
-1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;
}
```

### 3. 키보드 네비게이션

- 모든 인터랙티브 요소에 포커스 가능
- `tabindex` 속성 적절히 활용
- 포커스 표시 스타일 정의

### 4. 이미지 대체 텍스트

```html
<img src="./images/licat-img.png" alt="응원하는 모습의 라이캣 캐릭터" />
```

## 반응형 디자인

### 1. 데스크톱 우선 접근법

- 기본 스타일은 데스크톱 기준
- `@media screen and (max-width: 576px)` 로 모바일 스타일 적용

### 2. 유연한 레이아웃

```css
/* max-width와 width:100% 속성의 중요성 */
.container {
  max-width: 192rem;
  width: 100%;
  margin: 0 auto;
}
```

### 3. 반응형 간격

```css
/* clamp를 활용한 반응형 간격 */
gap: clamp(12px, 3vw, 40px);
padding: clamp(12px, 2.2vw, 32px) clamp(16px, 4vw, 32px);
```

## 에러와 에러 해결

### 1. CSS 관련 에러

#### 문제: 폰트 로딩 문제

**에러 상황**: 웹폰트가 제대로 로드되지 않음
**해결 방법**: 다운로드 받아 fonts 폴더로 관리

#### 문제: 반응형 이미지 크기 조정

**에러 상황**: 이미지가 화면 크기에 따라 적절히 조정되지 않음
**해결 방법**: `clamp()` 함수와 `aspect-ratio` 속성 활용

### 2. JavaScript 관련 에러

#### 문제: 모달 다이얼로그 호환성

**에러 상황**: 일부 브라우저에서 `<dialog>` 요소 지원 부족
**해결 방법**: 폴리필 적용 및 대체 스타일링

### 3. 웹 접근성 관련 에러

#### 문제: 스크린 리더가 이미지 내용을 읽지 못함

**에러 상황**: 장식용 이미지에 불필요한 alt 텍스트 제공
**해결 방법**: 장식용 이미지는 `alt=""` 또는 `aria-hidden="true"` 사용

```html
<!-- 기존 코드 -->
<img src="./images/decoration.png" alt="장식 이미지" />

<!-- 해결된 코드 -->
<img src="./images/decoration.png" alt="" aria-hidden="true" />
```

### 4. 반응형 디자인 관련 에러

#### 문제: 모바일에서 레이아웃이 깨지는 현상

**에러 상황**: 고정된 픽셀 값 사용으로 인한 반응형 문제
**해결 방법**: 상대 단위와 clamp() 함수 활용

```css
/* 기존 코드 */
gap: 30px;
padding: 32px;

/* 해결된 코드 */
gap: clamp(12px, 3vw, 40px);
padding: clamp(12px, 2.2vw, 32px) clamp(16px, 4vw, 32px);
```

## 개발하며 느낀점

### 1. CSS 선택자 우선순위의 중요성

- 명확한 선택자 구조로 스타일 충돌 방지
- CSS Custom Properties로 일관성 있는 디자인 시스템 구축

### 2. 반응형 디자인의 핵심

- `clamp()` 함수로 폰트 크기 반응형 처리
- `max-width`와 `width: 100%` 조합으로 컨테이너 반응형 구현
- `line-height`로 높이를 맞추는 것의 장점

### 3. 웹 접근성의 실무적 적용

- 시맨틱 HTML의 중요성 재확인
- 스크린 리더 사용자를 위한 적절한 대체 텍스트 제공
- 키보드 네비게이션 지원의 필요성

### 4. 성능 최적화

- 이미지 최적화 및 적절한 포맷 선택
- CSS와 JavaScript 파일 분리로 유지보수성 향상

### 5. 코드리뷰의 중요성

- 코드리뷰를 통해 잠재적인 버그와 개선점을 발견할 수 있었음
- 다른 개발자의 관점에서 코드를 바라보는 것의 가치를 깨달음
- 코드 품질과 가독성 향상에 큰 도움이 됨

## 🔮 추후 구현 사항

### 1. 1만 시간 계산기 기능

현재는 정적인 결과만 표시되지만, 추후 다음과 같은 기능을 구현할 예정

#### 입력 검증

- 분야 입력 필드: 빈 값 체크, 특수문자 제한
- 시간 입력 필드: 숫자만 입력 가능, 1-24시간 범위 제한

#### 계산 로직

#### 동적 결과 표시

- 입력값에 따른 실시간 결과 업데이트
- 애니메이션 효과와 함께 결과 표시
- 결과 저장 및 히스토리 기능

## 참고자료

- [MDN Web Docs - WAI-ARIA Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles)
- [인프런] 아는 만큼 보이는 웹 접근성 WCAG

## 🔗 링크

- **GitHub Repository**: [https://github.com/chaehyeon119/2025-project-10000hours-rule](https://github.com/chaehyeon119/2025-project-10000hours-rule)
- **Live Demo**: [https://chaehyeon119.github.io/2025-project-10000hours-rule/](https://chaehyeon119.github.io/2025-project-10000hours-rule/)

---

**참고**: 본 프로젝트는 [모두의연구소/위니브] 프론트엔드 스쿨 HTML/CSS 프로젝트 목적으로 제작되었습니다.

**개발자**: 김채현  
**기술 스택**: HTML, CSS, JavaScript
