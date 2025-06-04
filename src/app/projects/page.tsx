"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import GalleryModal from "@/components/GalleryModal";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  const router = useRouter();
  const imagesproj1 = [
    "/projects/proj1/landing.png",
    "/projects/proj1/list.png",
    "/projects/proj1/return.png",
    "/projects/proj1/availability.png",
    "/projects/proj1/earnings.png",
    "/projects/proj1/email.png",
  ];
  const imagesproj2 = [
    "/projects/proj2/feed.jpg",
    "/projects/proj2/code.jpg",
    "/projects/proj2/favorites.jpg",
    "/projects/proj2/calendar.jpg",
  ];
  const imagesproj3 = [
    "/projects/proj3/home.jpg",
    "/projects/proj3/gas_logs.jpg",
    "/projects/proj3/trip_logs.jpg",
    "/projects/proj3/users_share.jpg",
    "/projects/proj3/add_gas.png",
    "/projects/proj3/add_trip.png",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeImages, setActiveImages] = useState<string[]>([]);

  return (
    <main className="min-h-screen px-4 sm:px-6 py-10 bg-gradient-to-b from-white to-gray-100 text-black">
      <button
        onClick={() => router.push("/")}
        className="italic absolute top-6 left-4 sm:left-6 flex items-center gap-2 text-gray-700 hover:text-black font-medium bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow hover:shadow-md transition text-lg sm:text-xl"
      >
        <span className="text-2xl">←</span> Back
      </button>

      <div className="max-w-5xl mx-auto space-y-16">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800">
          Projects
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="border rounded-2xl p-8 shadow-xl hover:shadow-2xl transition bg-white">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Gown Rental Scheduler Web App (Mobile Friendly)
            </h2>

            <div
              className="relative w-72 h-48 mx-auto my-10 cursor-pointer"
              onClick={() => {
                setActiveImages(imagesproj1);
                setCurrentIndex(0);
                setIsOpen(true);
              }}
            >
              <img
                src={imagesproj1[1]}
                alt="Preview 2"
                className="absolute w-full h-full object-cover rounded-xl shadow-xl transform -translate-x-8 translate-y-2 rotate-[-2deg] z-0"
              />
              <img
                src={imagesproj1[2]}
                alt="Preview 3"
                className="absolute w-full h-full object-cover rounded-xl shadow-xl transform translate-x-8 translate-y-2 rotate-[2deg] z-10"
              />
              <img
                src={imagesproj1[0]}
                alt="Preview 1"
                className="absolute w-full h-full object-cover rounded-xl shadow-xl z-20"
              />
            </div>

            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              A full-featured scheduling platform built for my gown rental
              business. Designed with clean aesthetics but intentionally minimal
              — no image uploads to stay within the free-tier limits of Supabase
              and Vercel.
            </p>

            <ul className="text-sm text-gray-700 mb-4 list-disc list-inside space-y-1">
              <li>Tracks appointments, gown returns, and client meetings</li>
              <li>Flags unavailable gowns to avoid double bookings</li>
              <li>Logs earnings and expenses per transaction</li>
              <li>Generates and emails quarterly reports automatically</li>
              <li>Used daily as an internal admin tool for operations</li>
            </ul>

            <p className="text-sm text-gray-500 mb-4">
              Tech: Next.js, Tailwind CSS, Supabase, Prisma, Resend, Vercel
            </p>

            <a
              href="https://keiths-gown-rental-web.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm hover:text-blue-800"
            >
              🔗 View Live Project
            </a>
          </div>

          {/* Project 2 */}
          <div className="border rounded-2xl p-8 shadow-xl hover:shadow-2xl transition bg-white">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Hey Roomie App
            </h2>

            <div
              className="relative w-72 h-48 mx-auto my-10 cursor-pointer"
              onClick={() => {
                setActiveImages(imagesproj2);
                setCurrentIndex(0);
                setIsOpen(true);
              }}
            >
              <img
                src={imagesproj2[1]}
                alt="Preview 2"
                className="absolute w-full h-full object-cover rounded-xl shadow-xl transform -translate-x-8 translate-y-2 rotate-[-2deg] z-0"
              />
              <img
                src={imagesproj2[2]}
                alt="Preview 3"
                className="absolute w-full h-full object-cover rounded-xl shadow-xl transform translate-x-8 translate-y-2 rotate-[2deg] z-10"
              />
              <img
                src={imagesproj2[0]}
                alt="Preview 1"
                className="absolute w-full h-full object-cover rounded-xl shadow-xl z-20"
              />
            </div>

            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              A published social app on both App Store and Play Store, where
              users interact through posts, communities, and video content. I
              worked as part of a remote team and contributed across UI
              components, feature logic, and backend integrations.
            </p>

            <ul className="text-sm text-gray-700 mb-4 list-disc list-inside space-y-1">
              <li>
                Built the fan's and influencer's feed and post creation UI with
                scheduling and image uploads
              </li>
              <li>
                Implemented tooltips and onboarding flows using
                react-native-walkthrough-tooltip
              </li>
              <li>
                Created screens for P-pop rooms, student orgs, and community
                layout using FlatList
              </li>
              <li>
                Developed YouTube video player integration and modals using
                react-native-youtube-iframe
              </li>
              <li>Handled form validations with react-hook-form and yup</li>
            </ul>

            <p className="text-sm text-gray-500 mb-2 leading-relaxed">
              Tech: React Native, JavaScript, AWS Amplify (GraphQL, Cognito,
              Storage), Firebase (Analytics), React Navigation, React Query,
              PubNub, Moment.js, Lodash, React Native Paper, react-hook-form,
              yup, and more
            </p>

            <p className="text-xs text-gray-400 italic mb-4">
              📌 Screenshots shown are from the live app. I contributed to
              select features listed above as part of a larger team.
            </p>
          </div>

          {/* Project 3 */}
          <div className="border rounded-2xl p-8 shadow-xl hover:shadow-2xl transition bg-white">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              FuelMate – “Track your trips. Split your gas. Drive smarter.”
            </h2>

            <div
              className="relative w-72 h-48 mx-auto my-10 cursor-pointer"
              onClick={() => {
                setActiveImages(imagesproj3);
                setCurrentIndex(0);
                setIsOpen(true);
              }}
            >
              <img
                src={imagesproj3[2]}
                alt="Preview 1"
                className="absolute w-full h-full object-cover rounded-xl shadow-xl transform -translate-x-8 translate-y-2 rotate-[-2deg] z-0"
              />
              <img
                src={imagesproj3[1]}
                alt="Preview 2"
                className="absolute w-full h-full object-cover rounded-xl shadow-xl transform translate-x-8 translate-y-2 rotate-[2deg] z-10"
              />
              <img
                src={imagesproj3[0]}
                alt="Preview 3"
                className="absolute w-full h-full object-cover rounded-xl shadow-xl z-20"
              />
            </div>

            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              FuelMate is a mobile app built to help carpoolers and drivers
              accurately track fuel expenses and trip distances. The app
              calculates each passenger’s share of gas costs by recording gas
              fill-ups and trip odometer logs, grouped chronologically. It
              ensures fair cost-splitting by computing distance-based shares
              between gas-up events. The project was built to solve a real-world
              problem for drivers who regularly share rides and split fuel costs
              with friends or coworkers. It automates manual computations and
              improves transparency and accountability in cost-sharing.
            </p>

            <ul className="text-sm text-gray-700 mb-4 list-disc list-inside space-y-1">
              <li>
                Logs gas fill-ups with date, time, liters, and price per liter
              </li>
              <li>
                Records trip odometer readings, people involved, and stopovers
              </li>
              <li>Automatically calculates distance traveled per trip</li>
              <li>Groups trips between gas-ups to compute total distance</li>
              <li>
                Splits gas cost fairly based on distance and number of people
              </li>
              <li>
                Displays per-person breakdown of distance and share per gas-up
              </li>
              <li>Sorts data chronologically with time precision</li>
              <li>Runs independently via Expo Go (no Metro dependency)</li>
              <li>
                Used for accurate and fair cost-sharing during carpooling or
                group trips
              </li>
            </ul>

            <p className="text-sm text-gray-500 mb-2 leading-relaxed">
              Tech: React Native with Expo, Firebase Firestore (NoSQL), React
              Native + custom styles, Expo EAS Update (for publishing without
              App Store/Play Store), Expo Go (for on-device live testing)
            </p>
          </div>
        </div>
      </div>
      <GalleryModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        images={activeImages}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />

      <Footer />
    </main>
  );
}
