import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Common validation schemas
export const emailSchema = z.string().email("유효한 이메일을 입력해주세요");
export const passwordSchema = z
  .string()
  .min(8, "비밀번호는 최소 8자 이상이어야 합니다");
export const phoneSchema = z
  .string()
  .regex(/^[0-9-]+$/, "유효한 전화번호를 입력해주세요")
  .optional()
  .or(z.literal(""));
export const requiredString = (message = "필수 입력 항목입니다") =>
  z.string().min(1, message);

// Login schema
export const loginSchema = z.object({
  email: emailSchema,
  password: requiredString("비밀번호를 입력해주세요"),
  remember: z.boolean().optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;

// Signup schema
export const signupSchema = z
  .object({
    name: requiredString("이름을 입력해주세요"),
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: requiredString("비밀번호 확인을 입력해주세요"),
    agreeTerms: z
      .boolean()
      .refine((val) => val === true, "이용약관에 동의해주세요"),
    agreePrivacy: z
      .boolean()
      .refine((val) => val === true, "개인정보 처리방침에 동의해주세요"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다",
    path: ["confirmPassword"],
  });

export type SignupFormData = z.infer<typeof signupSchema>;

// Contact schema
export const contactSchema = z.object({
  name: requiredString("이름을 입력해주세요"),
  email: emailSchema,
  phone: phoneSchema,
  category: requiredString("문의 유형을 선택해주세요"),
  message: requiredString("문의 내용을 입력해주세요"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

// Helper function to get zodResolver
export const getZodResolver = <T extends z.ZodType>(schema: T) =>
  zodResolver(schema);
