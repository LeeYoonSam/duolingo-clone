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
## Footer
## Main Layout
## Sidebar
## Learn Page Wrappers
## Drizzle & Neon
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