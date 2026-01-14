"use client";

import { useState } from "react";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      alert("Login successful!");
      router.push("/"); // redirect to homepage after login
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("Unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600 px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
      >
        <h1 className="mb-6 text-center text-2xl font-bold text-blue-900">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mb-4 w-full rounded-lg border bg-gray-100 px-4 py-2"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mb-6 w-full rounded-lg border bg-gray-100 px-4 py-2"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-900 py-3 font-bold text-white hover:bg-blue-800"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="mt-4 text-center text-sm">
          Don’t have an account?{" "}
          <Link href="/auth/signup" className="font-semibold text-blue-900">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
