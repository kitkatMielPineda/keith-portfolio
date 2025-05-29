"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import TechItem from "@/components/TechItem";
export default function AboutPage() {
  const router = useRouter();

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory font-sans text-black bg-white">
      <button
        onClick={() => router.push("/")}
        className="italic absolute top-6 left-6 flex items-center gap-2 text-gray-700 hover:text-black font-medium bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow hover:shadow-md transition text-lg sm:text-xl"
      >
        <span className="text-2xl">←</span> Back
      </button>
      {/* About Me Section */}
      <section className="min-h-screen snap-start flex flex-col justify-center items-center px-6 py-16">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="flex justify-center md:justify-end">
            <Image
              src="/about-keith-2.png"
              alt="About Keith"
              width={640}
              height={640}
              className="w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 flex items-center gap-2">
              <span role="img" aria-label="laptop emoji">
                🧑‍💻
              </span>
              About Me
            </h2>
            <div className="space-y-5 text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed">
              <p>
                Hi, I’m Keith — originally a registered Electronics Engineer
                from the Philippines with roots in teaching, tech, and
                entrepreneurship.
              </p>
              <p>
                I began as a college instructor, explored engineering roles,
                then built a gown rental business from scratch. During the
                pandemic, I shifted into tech, learning full-stack development
                and building useful web and mobile projects.
              </p>
              <p>
                Today, I focus on creating clean, intuitive applications that
                solve real problems and deliver real value.
              </p>
              <p className="font-semibold italic text-gray-800">
                Let’s build solutions that work — and last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="min-h-screen snap-start px-6 py-16 flex flex-col justify-center items-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10">
          🎓 Certificates
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-1">
              React Native Bootcamp
            </h3>
            <p className="text-sm text-gray-600 mb-2">via Udemy</p>
            <Image
              src="/react-native-keith.jpg"
              alt="React Native Certificate"
              width={400}
              height={300}
              className="rounded shadow w-full h-auto"
            />
            <p className="text-gray-500 text-sm mt-2">
              Focused on mobile app development using React Native.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-1">
              AWS Cloud Practitioner
            </h3>
            <p className="text-sm text-gray-600 mb-2">Amazon Web Services</p>
            <Image
              src="/aws-cloud-practitioner-keith.png"
              alt="AWS Certified Cloud Practitioner Certificate"
              width={400}
              height={300}
              className="rounded shadow w-full h-auto"
            />
            <p className="text-gray-500 text-sm mt-2">
              Valid until Dec 2025. Basic understanding of cloud concepts and
              services.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-1">
              Full-Stack Web Dev Bootcamp
            </h3>
            <p className="text-sm text-gray-600 mb-2">Avion School</p>
            <p className="text-gray-500 text-sm">
              Learned JavaScript, Ruby, and full-stack development.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="min-h-screen snap-start px-6 py-16 flex flex-col justify-center items-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-center">
          💻 Tech Stack
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center w-full max-w-5xl">
          <TechItem name="React" src="/tech/react.svg" />
          <TechItem name="Next.js" src="/tech/nextdotjs.svg" />
          <TechItem name="Tailwind CSS" src="/tech/tailwindcss.svg" />
          <TechItem name="React Native" src="/tech/react-native.svg" />
          <TechItem name="Node.js" src="/tech/nodedotjs.svg" />
          <TechItem name="Prisma" src="/tech/prisma.svg" />
          <TechItem name="Supabase" src="/tech/supabase.svg" />
          <TechItem name="GitHub" src="/tech/github.svg" />
          <TechItem name="AWS" src="/tech/amazonwebservices.svg" />
        </div>
      </section>
    </main>
  );
}
