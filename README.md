# Company Template

최신 기술 스택을 사용한 Monorepo 템플릿 프로젝트입니다.

## 🚀 기술 스택

- **Next.js 16.0.4** - 최신 React 프레임워크
- **React 19.2.0** - 최신 React 버전
- **Tailwind CSS v4** - 최신 CSS 프레임워크
- **TypeScript 5.9.3** - 타입 안전성
- **Turborepo** - 모노레포 관리
- **pnpm** - 패키지 매니저

## 📁 프로젝트 구조

```
company-template/
├── apps/
│   ├── admin/          # 관리자 앱 (포트: 3000)
│   └── user/           # 사용자 앱 (포트: 3001)
├── packages/
│   └── ui/             # 공통 UI 컴포넌트 (shadcn/ui 기반)
│       ├── src/
│       │   ├── components/
│       │   │   ├── ui/        # shadcn/ui 컴포넌트들
│       │   │   └── index.ts   # 컴포넌트 export
│       │   ├── lib/
│       │   │   └── utils.ts   # 유틸리티 함수
│       │   └── styles.css     # 글로벌 스타일 & 테마
│       ├── components.json    # shadcn/ui 설정
│       └── package.json
├── turbo.json          # Turborepo 설정
├── pnpm-workspace.yaml # pnpm 워크스페이스 설정
└── package.json        # 루트 패키지 설정
```

## 🛠️ 개발 시작하기

### 1. 의존성 설치

```bash
pnpm install
```

### 2. 개발 서버 실행

#### 모든 앱 동시 실행

```bash
pnpm dev
```

#### 개별 앱 실행

```bash
# 관리자 앱만 실행 (http://localhost:3000)
pnpm --filter admin dev

# 사용자 앱만 실행 (http://localhost:3001)
pnpm --filter user dev
```

### 3. 빌드

```bash
# 모든 앱 빌드
pnpm build

# 개별 앱 빌드
pnpm --filter admin build
pnpm --filter user build
```

### 4. 린트

```bash
pnpm lint
```

## 🌟 주요 특징

- ✅ **최신 기술 스택**: Next.js 16, React 19, Tailwind CSS v4
- ✅ **모노레포 구조**: Turborepo로 효율적인 빌드 캐싱
- ✅ **공통 UI 시스템**: shadcn/ui 기반 컴포넌트 라이브러리
- ✅ **타입 안전성**: TypeScript 완전 지원
- ✅ **개발 경험**: Hot reload, ESLint, Prettier
- ✅ **확장 가능**: 워크스페이스 기반 패키지 관리

## 📝 개발 가이드

### 새로운 앱 추가

```bash
cd apps/
pnpm create next-app@latest new-app --typescript --tailwind --eslint --app --src-dir
```

### 공통 UI 컴포넌트 사용

```typescript
// UI 컴포넌트 import
import { Button, Card, CardContent, CardHeader, CardTitle } from '@repo/ui/components'

// 사용 예시
export default function MyPage() {
  return (
    <div className="p-8">
      <Card>
        <CardHeader>
          <CardTitle>제목</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>클릭하세요</Button>
        </CardContent>
      </Card>
    </div>
  )
}
```

### 새로운 UI 컴포넌트 추가

```bash
# UI 패키지 디렉토리로 이동
cd packages/ui

# shadcn/ui 컴포넌트 추가
pnpm dlx shadcn@canary add dialog input label

# 추가된 컴포넌트를 index.ts에 export
```

## 🔧 스크립트

| 명령어             | 설명                   |
| ------------------ | ---------------------- |
| `pnpm dev`         | 모든 앱 개발 서버 실행 |
| `pnpm build`       | 모든 앱 빌드           |
| `pnpm lint`        | 모든 앱 린트 검사      |
| `pnpm format`      | 코드 포맷팅            |
| `pnpm check-types` | TypeScript 타입 검사   |

## 🎨 사용 가능한 UI 컴포넌트

현재 설치된 컴포넌트들:

- `Button` - 다양한 variant (default, secondary, outline, destructive, ghost)
- `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`
- `cn` - 클래스명 유틸리티 함수

더 많은 컴포넌트는 [shadcn/ui 문서](https://ui.shadcn.com/docs/tailwind-v4)에서 확인하고 추가할 수 있습니다.

## 🚀 배포

각 앱은 독립적으로 배포 가능합니다:

```bash
# 관리자 앱 배포
cd apps/admin && pnpm build && pnpm start

# 사용자 앱 배포
cd apps/user && pnpm build && pnpm start
```

## 📚 참고 자료

- [Next.js 16 문서](https://nextjs.org/docs)
- [React 19 문서](https://react.dev)
- [Tailwind CSS v4 문서](https://tailwindcss.com/docs)
- [shadcn/ui 문서](https://ui.shadcn.com/docs/tailwind-v4)
- [Turborepo 문서](https://turbo.build/repo/docs)
