"use client";

import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen p-6">
      <button
        onClick={() => router.back()}
        className="text-sm text-blue-600 underline mb-4"
      >
        ← Back
      </button>

      <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
      <p>Email: kitkat.m.pineda@gmail.com</p>
      <p>GitHub: github.com/keithpineda</p>
      <p>LinkedIn: linkedin.com/in/keithpineda</p>
    </main>
  );
}
