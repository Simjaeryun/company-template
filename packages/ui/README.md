# @repo/ui

재사용 가능한 UI 컴포넌트와 Form 관리 라이브러리

## 설치

이 패키지는 모노레포 내부에서 workspace로 사용됩니다.

```bash
pnpm install
```

## Form 사용법

### 기본 예제

```tsx
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Input,
  Button,
  useForm,
} from "@repo/ui/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// 1. 스키마 정의
const formSchema = z.object({
  email: z.string().email("유효한 이메일을 입력해주세요"),
  password: z.string().min(8, "비밀번호는 최소 8자 이상이어야 합니다"),
});

type FormData = z.infer<typeof formSchema>;

// 2. 컴포넌트에서 사용
function MyForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
  };

  return (
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
              <Input type="password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <Button type="submit">제출</Button>
    </Form>
  );
}
```

### 사전 정의된 Validation Schemas

```tsx
import {
  loginSchema,
  signupSchema,
  contactSchema,
  type LoginFormData,
  type SignupFormData,
  type ContactFormData,
} from "@repo/ui/hooks/useFormValidation";

// Login Form
const form = useForm<LoginFormData>({
  resolver: zodResolver(loginSchema),
});

// Signup Form
const form = useForm<SignupFormData>({
  resolver: zodResolver(signupSchema),
});

// Contact Form
const form = useForm<ContactFormData>({
  resolver: zodResolver(contactSchema),
});
```

## 컴포넌트

### Form Components

- `Form` - Form Provider wrapper
- `FormField` - react-hook-form Controller wrapper
- `FormItem` - Form item container
- `FormLabel` - Label with required indicator
- `FormControl` - Form control wrapper
- `FormMessage` - Error message display
- `FormDescription` - Helper text

### Input Components

- `Input` - Text input
- `Textarea` - Multi-line text input
- `Select` - Dropdown select
- `Checkbox` - Checkbox with optional label

### UI Components

- `Button` - Button with variants
- `Card` - Card container with sub-components

## Validation Schemas

### Common Schemas

```tsx
import {
  emailSchema,
  passwordSchema,
  phoneSchema,
  requiredString,
} from "@repo/ui/hooks/useFormValidation";

const mySchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  phone: phoneSchema,
  name: requiredString("이름을 입력해주세요"),
});
```

### Pre-built Schemas

- `loginSchema` - Email + Password
- `signupSchema` - Name, Email, Password, Confirm Password, Terms
- `contactSchema` - Name, Email, Phone, Category, Message

## 확장하기

### 새로운 Form Component 추가

```tsx
// packages/ui/src/components/ui/my-input.tsx
import * as React from "react";
import { cn } from "../../lib/utils";

const MyInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input className={cn("custom-styles", className)} ref={ref} {...props} />
    );
  },
);

export { MyInput };
```

### 새로운 Validation Schema 추가

```tsx
// packages/ui/src/hooks/useFormValidation.ts
export const mySchema = z.object({
  // your fields
});

export type MyFormData = z.infer<typeof mySchema>;
```

## 스타일링

모든 컴포넌트는 Tailwind CSS v4와 shadcn/ui 디자인 시스템을 따릅니다.

커스텀 스타일은 `className` prop을 통해 적용할 수 있습니다.
