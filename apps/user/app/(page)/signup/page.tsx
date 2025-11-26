"use client";

import { Button, Card, CardContent } from "@repo/ui/components";
import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    agreePrivacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    // TODO: 회원가입 로직
    console.log("Signup:", formData);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-muted/30 to-background">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">
                文
              </span>
            </div>
            <span className="text-2xl font-bold">문학수첩</span>
          </Link>
          <h1 className="text-3xl font-bold mt-6">회원가입</h1>
          <p className="text-muted-foreground mt-2">
            문학수첩과 함께 시작하세요
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  이름
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-md bg-background"
                  placeholder="홍길동"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  이메일
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-md bg-background"
                  placeholder="email@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  비밀번호
                </label>
                <input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-md bg-background"
                  placeholder="••••••••"
                  required
                  minLength={8}
                />
                <p className="text-xs text-muted-foreground">
                  8자 이상 입력해주세요
                </p>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium"
                >
                  비밀번호 확인
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border rounded-md bg-background"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="space-y-3 pt-2">
                <label className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={(e) =>
                      setFormData({ ...formData, agreeTerms: e.target.checked })
                    }
                    className="mt-1"
                    required
                  />
                  <span className="text-sm">
                    <a href="#" className="text-primary hover:underline">
                      이용약관
                    </a>
                    에 동의합니다 (필수)
                  </span>
                </label>
                <label className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.agreePrivacy}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        agreePrivacy: e.target.checked,
                      })
                    }
                    className="mt-1"
                    required
                  />
                  <span className="text-sm">
                    <a href="#" className="text-primary hover:underline">
                      개인정보 처리방침
                    </a>
                    에 동의합니다 (필수)
                  </span>
                </label>
              </div>

              <Button type="submit" className="w-full" size="lg">
                회원가입
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">
                이미 계정이 있으신가요?{" "}
              </span>
              <Link
                href="/login"
                className="text-primary font-medium hover:underline"
              >
                로그인
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
