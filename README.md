# 1만 시간의 법칙

## 📋 목차

1. [프로젝트 소개](#프로젝트-소개)
2. [기술 스택](#기술-스택)
3. [주요 기능](#주요-기능)
4. [프로젝트 구조](#프로젝트-구조)
5. [프로젝트 기획](#프로젝트-기획)
6. [설치 및 실행](#설치-및-실행)
7. [주요 구현 사항](#주요-구현-사항)
8. [사용법](#사용법)
9. [반응형 디자인](#반응형-디자인)
10. [접근성](#접근성)
11. [에러와 에러 해결](#에러와-에러-해결)
12. [개발하며 느낀점](#개발하며-느낀점)

## 🎯 프로젝트 소개

1만 시간의 법칙은 어떤 분야의 전문가가 되기 위해서는 최소한 1만 시간의 훈련이 필요하다는 법칙을 바탕으로, 사용자가 원하는 분야와 하루 훈련 시간을 입력하면 1만 시간 달성까지 필요한 일수를 계산해주는 웹 애플리케이션입니다.

### 프로젝트 목표

- 사용자가 쉽게 1만 시간의 법칙을 체험할 수 있는 인터페이스 제공
- 반응형 디자인으로 다양한 디바이스에서 접근 가능
- 접근성을 고려한 웹 표준 준수

## 🛠 기술 스택

### Frontend

- **HTML**: 시맨틱 마크업과 웹 표준 준수
- **CSS**: Flexbox, Grid, 반응형 디자인
- **JavaScript**: 모달 다이얼로그 기능

### 폰트

- **Gmarket Sans**: 메인 폰트 (Light, Medium, Bold)
- **Noto Sans KR**: 한글 폰트

## ✨ 주요 기능

### 1. 1만 시간 계산기(추후 적용 예정)

- 분야 입력: 사용자가 전문가가 되고 싶은 분야 입력
- 시간 입력: 하루 훈련 시간 입력
- 결과 표시: 1만 시간 달성까지 필요한 일수 계산

### 2. 모달 다이얼로그

- 응원 메시지 표시
- 모달 열기/닫기 기능

### 3. 반응형 레이아웃

- 데스크톱, 태블릿, 모바일 대응
- 유동적 폰트 크기와 여백 조정

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

## 🚀 설치 및 실행

### 🌐 배포 링크

**Live Demo**: [https://chaehyeon119.github.io/2025-project-10000hours-rule/](https://chaehyeon119.github.io/2025-project-10000hours-rule/)

### 저장소 클론

```bash
git clone https://github.com/your-username/2025-project-10000hours-rule.git
cd 2025-project-10000hours-rule
```

## 📖 사용법

### 현재 구현된 기능

#### 1. 모달 다이얼로그 확인

- "훈련하러 가기 GO! GO!" 버튼 클릭
- 응원 메시지와 라이캣 캐릭터 확인
- "종료하고 진짜 훈련하러 가기 GO!GO!" 버튼으로 모달 닫기

### 추후 구현 예정 기능

#### 1. 분야 입력

- "나는" 입력 필드에 원하는 분야 입력 (예: 프로그래밍)

#### 2. 시간 입력

- "그래서 앞으로 매일 하루에" 입력 필드에 하루 훈련 시간 입력 (예: 5)

#### 3. 계산하기

- "나는 며칠 동안 훈련을 해야 1만 시간이 될까?" 버튼 클릭

#### 4. 결과 확인

- 입력한 분야와 필요한 일수가 표시됨

## 📋 프로젝트 기획

### 와이어프레임

프로젝트 초기 기획 단계에서 작성한 와이어프레임입니다.

```
[와이어프레임 이미지 또는 링크 추가 예정]
```

### WBS (Work Breakdown Structure)

프로젝트 작업 분할 구조도입니다.

#### Phase 1: 데스크톱 버전 작업

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

#### Phase 2: 모바일 버전 작업

- [x] 모달창 구현 및 마무리
- [x] 브레이크포인트 설정 (모바일, 데스크톱)
- [x] 모바일 버전 스타일링 (미디어 쿼리 적용)
- [x] 이미지 요소의 반응형 처리
- [x] 적절한 대체 텍스트(alt) 제공
- [x] 키보드 접근성 확인

## 🔧 주요 구현 사항

### 1. 시맨틱 HTML 구조

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

### 2. CSS 변수 활용

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

### 3. 반응형 디자인

```css
/* 데스크톱 우선 접근법 */
.container {
  max-width: 192rem;
  margin: 0 auto;
}

/* 태블릿 대응 */
@media screen and (max-width: 799px) {
  .result-row {
    font-size: 2rem;
  }
}

/* 모바일 대응 */
@media screen and (max-width: 576px) {
  /* mobile.css에서 처리 */
}
```

### 4. 모달 다이얼로그

```javascript
const dialog = document.getElementById("myDialog");
const showDialogBtn = document.getElementById("showDialogBtn");
const closeBtn = document.getElementById("closeBtn");

showDialogBtn.addEventListener("click", () => dialog.showModal());
closeBtn.addEventListener("click", () => dialog.close());
```

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

## 📱 반응형 디자인

### 브레이크포인트

- **모바일**: 576px 이하
- **태블릿**: 577px ~ 799px
- **데스크톱**: 800px 이상

### 주요 반응형 요소

- 유동적 폰트 크기 (`clamp()` 함수 활용)
- 반응형 여백과 패딩
- 모바일에서의 레이아웃 변경
- 이미지 크기 조정

## ♿ 접근성

### 1. 시맨틱 마크업

- 적절한 HTML 태그 사용 (`header`, `section`, `main` 등)
- 제목 구조 (`h1`, `h2`, `h3`) 명확히 구분

### 2. 스크린 리더 지원

```html
<h1 class="a11y-hidden">1만 시간의 법칙</h1>
<div class="cheering-text" aria-label="화이팅! 당신의 꿈을 응원합니다!"></div>
```

### 3. 키보드 네비게이션

- 모든 인터랙티브 요소에 키보드 접근 가능
- 포커스 표시 명확히 구분

## ⚠️ 에러와 에러 해결

### 1. 폰트 로딩 문제

**문제**: 웹폰트가 제대로 로드되지 않음
**해결**: 다운로드 받아 fonts 폴더로 관리

### 2. 반응형 이미지 크기 조정

**문제**: 이미지가 화면 크기에 따라 적절히 조정되지 않음
**해결**: `clamp()` 함수와 `aspect-ratio` 속성 활용

## 💭 개발하며 느낀점

### 1. 반응형 디자인의 중요성

- 다양한 디바이스에서 일관된 사용자 경험 제공의 중요성
- `clamp()` 함수를 활용한 유동적 디자인 시스템의 효율성

### 2. 접근성 고려의 필요성

- 웹 표준과 시맨틱 마크업의 중요성
- 스크린 리더 사용자를 위한 적절한 라벨링의 필요성

### 3. CSS 변수의 활용

- 일관된 디자인 시스템 구축의 효율성
- 유지보수성 향상과 코드 재사용성 증대

### 4. 모던 CSS 기술의 활용

- Flexbox와 Grid를 활용한 레이아웃 구성
- CSS 변수와 함수를 활용한 동적 스타일링

### 5. 사용자 경험 개선

- 직관적인 인터페이스 설계의 중요성
- 시각적 피드백과 애니메이션의 효과

## 참고사항

본 프로젝트는 [모두의연구소/위니브] 프론트엔드 스쿨 HTML/CSS 프로젝트 목적으로 제작되었습니다.

---

**개발자**: 김채현
**기술 스택**: HTML, CSS, JavaScript
