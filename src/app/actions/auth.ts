'use server';
// import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { signIn, signOut } from "../../../auth";
import { users } from "@/lib/users";

import { isRedirectError } from "next/dist/client/components/redirect-error";

export async function loginAction(prevState: any, formData: FormData) {
  const callbackUrl = formData.get("callbackUrl") as string || "/dashboard";
  
  try {
    await signIn("credentials", {
      ...Object.fromEntries(formData),
      redirectTo: callbackUrl,
    });
  } catch (error) {
    // If it's a redirect, let it happen!
    if (isRedirectError(error)) {
      throw error;
    }
    // Otherwise, it's an actual authentication error
    return { error: "Invalid credentials" };
  }
}

export async function signupAction(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // 1. Check if user already exists
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return { error: "User already exists" };
  }

  // 2. Add user to your "database"
  const newUser = {
    id: Math.random().toString(36).substr(2, 9),
    email,
    password, // IMPORTANT: In a real app, always hash this with bcrypt!
    role: "USER" as const,
  };
  users.push(newUser);

  // 3. Automatically sign the user in after registration
  try {
    await signIn("credentials", { 
      email, 
      password, 
      redirectTo: "/dashboard" 
    });
  } catch (error) {
    if (error instanceof AuthError) return { error: "Sign in failed after registration" };
    throw error;
  }
}

export async function handleSignOut() {
  await signOut({ redirectTo: "/auth" });
}