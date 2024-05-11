# Duo Lingo Clone

👨‍💻 Source Code & More: https://www.codewithantonio.com/projects/duolingo-clone
GitHub: https://github.com/AntonioErdeljac/next14-duolingo-clone

## 라이브러리
- Clerk: https://go.clerk.com/wmPbEeD
- Kenney Assets:https://kenney.nl/
- Freesound: https://freesound.org/
- Elevenlabs AI: https://elevenlabs.io/
- Flagpack: https://flagpack.xyz/

## 학습 요약
- 이 11시간짜리 튜토리얼에서는 듀오링고와 유사한 나만의 언어 학습 SaaS를 만드는 방법을 배웁니다. 
- 사용자는 언어 코스를 선택할 수 있으며 아름다운 디자인, 캐릭터, 오디오 및 시각 효과가 포함된 가이드 레슨을 받을 수 있습니다. 
- Next.js 14, Drizzle ORM, PostgreSQL, 서버 액션, Stripe, ShadcnUI, Tailwind 등을 배우게 됩니다.

## Key Features
- 🌐 Next.js 14 & server actions
- 🗣 AI Voices using Elevenlabs AI
- 🎨 Beautiful component system using Shadcn UI
- 🎭 Amazing characters thanks to KenneyNL
- 🔐 Auth using Clerk
- 🔊 Sound effects
- ❤️ Hearts system
- 🌟 Points / XP system
- 💔 No hearts left popup
- 🚪 Exit confirmation popup
- 🔄 Practice old lessons to regain hearts
- 🏆 Leaderboard
- 🗺 Quests milestones
- 🛍 Shop system to exchange points with hearts
- 💳 Pro tier for unlimited hearts using Stripe
- 🏠 Landing page
- 📊 Admin dashboard React Admin
- 🌧 ORM using DrizzleORM
- 💾 PostgresDB using NeonDB
- 🚀 Deployment on Vercel
- 📱 Mobile responsiveness

---

## Intro & Demo
## Project Setup
- shadcn/ui 설정
```shell
npx shadcn-ui@latest init
✔ Which style would you like to use? › Default
✔ Which color would you like to use as base color? › Slate
✔ Would you like to use CSS variables for colors? … no / yes
```
- tailwind extention 설치
- shadcn-ui button 추가
  - `npx shadcn-ui@latest add button`


## Buttons library
- app/buttons/page.tsx 생성
  - Variants 별 버튼 화면
- components/ui/button.tsx 수정
  - 버튼 variants, sizse 전체 커스터마이징


## Marketing Skeleton
- app/page.tsx -> app/(marketing)/page.tsx 폴더 이동
- app/(marketing)/layout.tsx 생성
  - 공통 레이아웃 생성 (헤더, 푸터)
- app/(marketing)/header.tsx 생성
  - 헤더 정보
- app/(marketing)/footer.tsx 생성
  - 푸터 정보


## Authentication
- [Clerk 어플리케이션 생성 및 설정](https://clerk.com/docs/quickstarts/nextjs?_gl=1*goi63*_gcl_au*MTE3OTIyNTAzMC4xNzExMjc3NDk4*_ga*NjYxMjQ0MTMzLjE3MDA3NDY5ODM.*_ga_1WMF5X234K*MTcxMTc4MjY0NC4xMi4xLjE3MTE3ODI2NzUuMC4wLjA.)
- `npm install @clerk/nextjs`
- `.env` 생성
  - clerk key 추가
- `middleware.ts` 생성
  - publicRoutes 추가
- `app/layout.tsx` 수정
  - ClerkProvider 추가
- svg 이미지 추가
  - `public/hero.svg`
  - `public/mascot.svg`
- `app/(marketing)/header.tsx` 수정
  - 로고 추가
  - 로그인 버튼 추가
- `app/(marketing)/page.tsx` 수정
  - 로그인 / 미로그인 상태에 따라 UI 분기 처리


## Footer
- public 국기 이미지 추가
- app/(marketing)/footer.tsx 수정
  - 국가별 국기 추가


## Main Layout
- `app/(main)/layout.tsx` 생성
  - 메인 폴더 레이아웃 추가
- `app/(main)/learn/page.tsx` 생성
  - learn 페이지 추가
- `components/sidebar.tsx` 생성
  - sidebar는 재사용 가능하도록 만들기 위해 componenets 에 만듦
- `components/mobile-header.tsx` 생성
  - lg 이하에서는 모바일 헤더가 보이도록 교체
- `components/mobile-sidebar.tsx` 생성
  - 모바일 헤더에서 보여줄 mobile 용 사이드바
  - Sheet 로 구현해서 sidebar 를 재활용해서 표현

### dependencies
- `npx shadcn-ui@latest add sheet`
  - MobileHeader 에서 사용할 sheet


## Sidebar
- public 사이드바 이미지 추가
- components/sidebar-item.tsx 생성
  - 사이드바 메뉴 아이템 컴포넌트 추가
  - 아이콘, 라벨, 링크 데이터로 메뉴 만들기
- components/sidebar.tsx 수정
  - 사이드바 아이템 컴포넌트 적용
  

## Learn Page Wrappers
- app/(main)/layout.tsx 수정
  - 레드 배경 제거 및 css 수정
- app/(main)/learn/page.tsx 수정
    - StickyWrapper 추가
    - FeedWrapper 추가
- components/sticky-wrapper.tsx 생성
  - StickyWrapper 컴포넌트
- components/feed-wrapper.tsx 생성
  - FeedWrapper 컴포넌트
- app/(main)/learn/header.tsx 생성
  - 헤더 컴포넌트 추가
  - 뒤로가기 버튼, 타이틀 추가
- components/user-progress.tsx 생성
  - 오른쪽에 고정된 유저 진행상황 컴포넌트
- 이미지 추가
  - public/heart.svg
  - public/points.svg


## Drizzle & Neon
- 로컬 mysql 로는 어떻게 사용하는지 검토!

### [Drizzle](https://orm.drizzle.team/docs/get-started-postgresql)
- 드리즐 스튜디오는 드리즐 구성 파일을 가져와 데이터베이스에 연결하고 기존 드리즐 SQL 스키마를 기반으로 모든 것을 탐색, 추가, 삭제 및 업데이트할 수 있습니다.
- 명시적 null 및 빈 문자열 값, 부울, 숫자 및 큰 정수, json 객체 및 json 배열을 지원합니다.

**DrizzleKit Setting**
- Dependencies
  - `npm i drizzle-orm @neondatabase/serverless`
  - `npm i -D drizzle-kit`
- package.json
  - script 작성
  - `npm run db:studio`
  - `npm run db:push`
- db/drizzle.ts 생성
  - 디비 연결 정보
- db/schema.ts 생성
  - 스키마 정보
- `npm i dotenv`
  - Dotenv는 .env 파일에서 process.env로 환경 변수를 로드하는 제로 종속성 모듈입니다. 
  - 코드와 별도로 환경에 구성을 저장하는 것은 12요소 앱 방법론을 기반으로 합니다.
- `npm run db:push`
- `npm i -D pg`
- `npm run db:studio`

### MySQL 간단 명령어
```bash
mysql> status;
```
- mysql 연결 상태 정보

```bash
mysql> show databases;
```
- Database 리스트

```bash
mysql> CREATE DATABASE somedatabase;
```
- 데이터베이스 생성

```bash
mysql> select database();
```
- 현재 사용중인 데이터 베이스 조회

```bash
mysql> use somedatabase;
Database changed
```
- 데이터베이스 사용

- [Prisma Database Connector - MySQL](https://www.prisma.io/docs/concepts/database-connectors/mysql)


## Courses Page
- `db/queries.ts` 생성
  - getCourses - 코스 데이터 가져오기
- `app/(main)/courses/page.tsx` 생성
  - /courses 페이지 생성
  - 언어 코스 선택
- `app/(main)/courses/list.tsx` 생성
  - 코스 선택 리스트 컴포넌트
- `app/(main)/courses/card.tsx` 생성
  - 코스 선택 아이템 카드 컴포넌트
  - 국기, 언어 이름 표시


## User Progress
- db/schema.ts 수정
  - userProgress 테이블 추가
  - courses, userProgress 간 relation 연결
- db/queries.ts 수정
  - 유저에 해당하는 코스 진행 상황 가져오기
  - 코스 정보 가져오기
- app/(main)/courses/page.tsx 수정
  - UserProgress 가져와서 코스 표시
- app/(main)/learn/page.tsx 수정
  - UserProgress 정보를 가져와서 진행중인 코스가 없으면 리디렉트 처리
- loading.tsx 생성
  - Page root 에 loading 을 추가하면 자동으로 표시됨
- actions/user-progress.ts 생성
  - User 진행 상황을 데이터베이스에 업데이트 할 액션
- app/(main)/courses/list.tsx 수정
  - 코스 클릭시 코스 정보 저장 및 Learn 페이지 리디렉트
  - 카드 클릭 연결
- app/layout.tsx 수정
  - Body 안에 Toaster 추가

### dependencies
- `npx shadcn-ui@latest add sonner`
  - 토스터

### Note
- upsert: UPDATE + INSERT 합성어


## Seed Script
- scripts/seed.ts 생성
  - 데이터베이스 초기화 및 언어 학습 정보 기초 생성
- package.json 수정
  - seed.ts 실행 스크립트 추가
  - tsx 라이브러리 사용
- app/(main)/learn/page.tsx 수정
  - 선택된 언어 코스로 헤더 타이틀 변경

### dependencies
- `npm i -D tsx`
  - 타입 스크립트 실행

### Notes
- tsx 대안으로 [bun](https://bun.sh/) 사용 가능
  - Bun으로 JavaScript 및 TypeScript 프로젝트를 개발, 테스트, 실행, 번들링
  - Bun은 번들러, 테스트 런처, Node.js 호환 패키지 관리자가 포함된 속도를 위해 설계된 올인원 JavaScript 런타임 및 툴킷


## Schema
- db/schema.ts 수정
  - table, relations 생성
    - units
    - lessons
    - challenges
    - challenge_options
    - challenge_progress


## Units
- scripts/seed.ts 수정
  - unit, lessons, challenge, challengeOptions 초기 데이터베이스 추가
- db/queries.ts 수정
  - getUnits 작성
- app/(main)/learn/page.tsx 수정
  - unit 정보 Json 으로 임시 표시

  
## Lesson Button
- db/queries.ts 수정
  - getUnit - userId 비교 추가
- app/(main)/learn/page.tsx 수정
  - Unit 추가
- app/(main)/learn/unit.tsx 생성
  - Unit 컴포넌트
- app/(main)/learn/unit-banner.tsx 생성
  - 코스 경로에서 보여지는 레슨 유닛 배너
- app/(main)/learn/lesson-button.tsx 생성
  - 코스 경로에서 보여지는 레슨 버튼
  - react-circular-progressbar 를 사용해서 버튼의 진행상황 표시

### dependencies
- npm i react-circular-progressbar
  - SVG로 제작되고 광범위하게 사용자 정의할 수 있는 원형 진행률 표시줄 컴포넌트입니다.


## Course Progress
- db/queries.ts 수정
  - getCourseProgress: 진행중인 코스 가져오기
  - getLesson: 레슨 정보 가져오기
  - getLessonPercentage: 레슨 진행률 가져오기
- app/(main)/learn/page.tsx 수정
  - activeLesson 디비 데이터 추가
  - activeLessonPercentage 디비 데이터 추가


## Lesson Header
- db/queries.ts 수정
  - normalizedData 챌린지가 없을때 예외 처리 추가
- app/lesson/layout.tsx 생성
  - lesson 기본 레이아웃
- app/lesson/page.tsx 생성
  - 레슨 페이지
- app/lesson/quiz.tsx 생성
  - 퀴즈 컴포넌트 추가 
- app/lesson/header.tsx 생성
  - 헤더 컴포넌트 추가
  - shadcn-ui progress 컴포넌트 추가

### dependencies
- npx shadcn-ui@latest add progress

## Exit Modal
- dialog, zustand 디펜던시 추가
- store/use-exit-modal.ts 생성
  - exit modal 상태관리
- app/layout.tsx 수정
  - 전역 ExitModal 추가
- app/lesson/header.tsx 수정
  - X 버튼 클릭 연결
- components/modals/exit-modal.tsx 추가
  - 종료 팝업 추가

### dependencies
- npx shadcn-ui@latest add dialog
- npm i zustand
  - 작고 빠르며 확장 가능한 베어본 상태 관리 솔루션입니다. 
  - Zustand는 훅을 기반으로 하는 편안한 API를 제공합니다
  - 좀비 자식 문제, React 동시성, 혼합 렌더러 간의 컨텍스트 손실과 같은 일반적인 함정을 처리


## Challenge Cards
- app/lesson/quiz.tsx 수정
- app/lesson/question-bubble.tsx 생성
  - 질문 버블 컴포넌트
- app/lesson/challenge.tsx 생성
  - 질문 컴포넌트
- app/lesson/card.tsx 생성
  - 정답 카드 컴포넌트
  - correct, wrong 에 따라 카드 상태 변경


## Challenge Footer
- Elevenlabs AI 로 소리 만들기
- app/lesson/card.tsx 수정
  - 보기 클릭시 음성 재생 추가
  - react-use 의 useAudio 사용하기
- app/lesson/quiz.tsx 수정
  - Footer 추가
- app/lesson/footer.tsx 생성
  - Footer 컴포넌트
  - status 에 따라 상태 변경

### public 음성 파일 추가
- es_man.mp3
- es_woman.mp3
- es_robot.mp3

### dependencies
- npm i react-use


## Challenge Actions
- app/lesson/quiz.tsx 수정
  - footer check 버튼 옵션 선택시 로직 추가
    - 성공시 다음 문제 진행
    - 실패시 하트 감소 및 다시시도 처리
- actions/challenge-progress.ts 생성
  - 문제 정답 시 진행 상황 업데이트
- scripts/seed.ts 수정
  - 문제 추가
- actions/user-progress.ts 수정
  - 디비에 하트 감소시키는 로직 추가


## Challenge Finish Screen
- 정답, 오답, 완료 음성 파일 추가
- scripts/seed.ts 수정
  - 기본 챌린지 추가
- app/lesson/quiz.tsx 수정
  - 챌린지 완료 표시
  - 보기 선택시 오디오 재생
  - 챌린지 완료 오디오 자동재생
  - confetti 효과 추가
- app/lesson/result-card.tsx 생성
  - 챌린지 완료 결과 카드 컴포넌트

### 리소스 추가
- correct.wav
- incorrect.wav
- finish.mp3
- finish.svg

### dependencies
- npm i react-confetti
  - 종이 꽃가루 애니메이션


## Challenge Practice
- store/use-hearts-modal.ts 생성
  - 하트모달에서 사용할 store
- components/modals/hearts-modal.tsx 생성
  - 하트모달 컴포넌트
- app/layout.tsx 수정
  - HeartsModal 추가
- app/lesson/quiz.tsx 수정
  - 정답/오답 선택시 Heart 가 없으면 모달 팝업 표시

### 리소스 추가
- mascot_bad.svg


## Shop
- app/(main)/shop/page.tsx 생성
  - 상점 페이지
- app/(main)/shop/items.tsx 생성
  - 상점의 아이템을 표시하는 컴포넌트
- actions/user-progress.ts 수정
  - refillHearts 추가
    - point 차감 후 하트 풀 리필


## Stripe
- db/schema.ts 수정
  - userSubscription 테이블 생성
- stripe 설치
- lib/stripe.ts 생성
  - Stripe 객체 생성
    - API 버전, Stripe secret 키 추가
- .env 수정
  - [Stripe](https://stripe.com/) 대시보드 account 생성
  - STRIPE_API_KEY 추가
- 리소스 추가
  - public/unlimited.svg
- actions/user-subscription.ts 생성
  - 구독 정보 및 callback url 지정
  - stripe 세션 생성
    - 결제 데이터
    - 메타 데이터
- db/queries.ts 수정
  - 현재 구독중인지 정보 반환
- lib/utils.ts 수정
  - 절대 경로 생성 유틸 추가
- app/(main)/shop/page.tsx 수정
  - 프로 버전 사용 유무에 따라 컴포넌트 상태 변경
- app/(main)/shop/items.tsx 수정
  - onUpgrade 프로 버전 전환


### dependencies
- npm i stripe


## Details
## Admin
## Deployment