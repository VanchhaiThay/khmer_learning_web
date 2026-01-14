"use client";

import { useState } from "react";
import Link from "next/link";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../lib/firebase";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const router = useRouter(); // Next.js router for navigation

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.password) {
      alert("Password is required");
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email.trim(),
        form.password
      );

      const user = userCredential.user;
      const fullName = `${form.firstName.trim()} ${form.lastName.trim()}`;

      await updateProfile(user, { displayName: fullName });

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        first_name: form.firstName.trim(),
        last_name: form.lastName.trim(),
        email: form.email.trim(),
        created_at: serverTimestamp(),
      });

      alert("Account created successfully!");

      // ✅ Redirect to login page
      router.push("/auth/login");
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
        onSubmit={handleSignup}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
      >
        <h1 className="text-center text-2xl font-bold text-blue-900">
          Create Account
        </h1>
        <p className="mb-6 text-center text-gray-500">
          Sign up to get started
        </p>

        <div className="mb-4 grid grid-cols-2 gap-3">
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
            className="rounded-lg border bg-gray-100 px-4 py-2"
          />
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
            className="rounded-lg border bg-gray-100 px-4 py-2"
          />
        </div>

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="mb-4 w-full rounded-lg border bg-gray-100 px-4 py-2"
        />

        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
          minLength={6}
          className="mb-6 w-full rounded-lg border bg-gray-100 px-4 py-2"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-900 py-3 font-bold text-white hover:bg-blue-800"
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>

        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/auth/login" className="font-semibold text-blue-900">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
