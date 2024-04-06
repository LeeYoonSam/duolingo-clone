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
## User Progress
## Seed Script
## Schema
## Units
## Lesson Button
## Course Progress
## Lesson Header
## Exit Modal
## Challenge Cards
## Challenge Footer
## Challenge Actions
## Challenge Finish Screen
## Challenge Practice
## Shop
## Stripe
## Details
## Admin
## Deployment