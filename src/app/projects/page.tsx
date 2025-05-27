"use client";

import { useRouter } from "next/navigation";

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen p-6">
      <button
        onClick={() => router.back()}
        className="text-sm text-blue-600 underline mb-4"
      >
        ← Back
      </button>

      <h1 className="text-2xl font-bold mb-6">Projects</h1>

      <div className="grid gap-6">
        {/* Gown Rental Project with video */}
        <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">
            Gown Rental Web App (Mobile Friendly)
          </h2>

          <video
            className="rounded-lg w-full mb-3"
            src="/videos/gown-rental-preview.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls
          />

          <p className="text-sm text-gray-600 mb-2">
            A full-featured scheduling platform for gown rentals. Tracks
            appointments, returns, earnings, expenses, and even sends quarterly
            reports via email.
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Tech: Next.js, Tailwind CSS, Supabase, Prisma, Resend, Vercel
          </p>
          <a
            href="https://keiths-gown-rental-web.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline text-sm"
          >
            🔗 View Live Project
          </a>
        </div>
      </div>
    </main>
  );
}
