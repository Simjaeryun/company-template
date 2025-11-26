import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components";

export default function AdminPage() {
  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            관리자 대시보드
          </h1>
          <p className="text-muted-foreground">
            Next.js 16 + React 19 + Tailwind v4 + shadcn/ui 기반 관리자 앱
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>사용자 관리</CardTitle>
              <CardDescription>시스템 사용자들을 관리합니다</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">사용자 목록 보기</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>콘텐츠 관리</CardTitle>
              <CardDescription>웹사이트 콘텐츠를 관리합니다</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" className="w-full">
                콘텐츠 편집
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>시스템 설정</CardTitle>
              <CardDescription>
                시스템 전반적인 설정을 관리합니다
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                설정 보기
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center space-x-4">
          <Button size="lg">새 항목 추가</Button>
          <Button variant="destructive" size="lg">
            전체 삭제
          </Button>
        </div>
      </div>
    </div>
  );
}
