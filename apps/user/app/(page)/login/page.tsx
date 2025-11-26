"use client";

import {
  Button,
  Card,
  CardContent,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Input,
  Checkbox,
  useForm,
} from "@repo/ui/components";
import {
  loginSchema,
  type LoginFormData,
} from "@repo/ui/hooks/useFormValidation";
import Link from "next/link";

export default function LoginPage() {
  const form = useForm<LoginFormData>({
    resolver: async (data, context, options) => {
      const { getZodResolver } = await import(
        "@repo/ui/hooks/useFormValidation"
      );
      return getZodResolver(loginSchema)(data, context, options);
    },
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log("Login:", data);
    // TODO: 실제 로그인 API 호출
    alert("로그인 성공!");
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
            <span className="text-2xl font-bold">책책책책</span>
          </Link>
          <h1 className="text-3xl font-bold mt-6">로그인</h1>
          <p className="text-muted-foreground mt-2">
            책책책책에 오신 것을 환영합니다
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <Form form={form} onSubmit={onSubmit}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>이메일</FormLabel>
                    <FormControl>
                      <Input placeholder="email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>비밀번호</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-between text-sm">
                <FormField
                  control={form.control}
                  name="remember"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          label="로그인 상태 유지"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <a href="#" className="text-primary hover:underline">
                  비밀번호 찾기
                </a>
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "로그인 중..." : "로그인"}
              </Button>
            </Form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">계정이 없으신가요? </span>
              <Link
                href="/signup"
                className="text-primary font-medium hover:underline"
              >
                회원가입
              </Link>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-card text-muted-foreground">
                    또는
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  Facebook
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
