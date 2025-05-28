"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen w-full bg-white px-6 py-12 flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* Avatar (Left side) */}
        <div className="flex justify-center animate-fade-in">
          <Image
            src="/keith-landing.png"
            alt="Keith - Software Engineer"
            width={640}
            height={640}
            className="w-full h-auto"
          />
        </div>

        {/* Text + Buttons (Right side) */}
        <div className="text-center md:text-left max-w-md animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Hi! <span className="inline-block">👋</span> I’m Keith
            <br />
            (or Kitkat👩‍💻)
          </h1>
          <p className="text-gray-700 text-xl sm:text-2xl md:text-4xl mb-6 leading-relaxed">
            Engineer by craft,
            <br />
            entrepreneur by passion.
          </p>

          <div className=" flex flex-row gap-3 justify-center md:justify-start">
            <button
              onClick={() => router.push("/projects")}
              className="bg-blue-800 text-white py-3 px-6 rounded-lg font-medium text-lg sm:text-xl md:text-2xl hover:bg-blue-900 transition shadow-md"
            >
              View Projects
            </button>
            <button
              onClick={() => router.push("/about")}
              className="border border-gray-800 text-gray-800 py-3 px-6 rounded-lg font-medium text-lg sm:text-xl md:text-2xl hover:bg-gray-100 transition shadow-sm"
            >
              About Me
            </button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </main>
  );
}
