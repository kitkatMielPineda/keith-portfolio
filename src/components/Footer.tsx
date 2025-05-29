// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 px-6 border-t text-center text-gray-600">
      <p className="mb-2">Crafting code with intention.</p>
      <p className="text-sm text-gray-600 font-extrabold mb-2">
        Let’s connect — feel free to reach out anytime.
      </p>
      <div className="flex justify-center gap-6 text-xl">
        <Link
          href="https://github.com/kitkatMielPineda"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="w-6 h-6 hover:scale-110 transition"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.547-1.387-1.34-1.757-1.34-1.757-1.093-.747.083-.733.083-.733 1.21.085 1.845 1.242 1.845 1.242 1.07 1.833 2.807 1.304 3.492.996.108-.774.418-1.305.76-1.605-2.665-.304-5.466-1.333-5.466-5.931 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.403c1.018.005 2.044.138 3.003.403 2.29-1.552 3.295-1.23 3.295-1.23.656 1.653.244 2.873.12 3.176.77.84 1.236 1.912 1.236 3.222 0 4.61-2.805 5.624-5.475 5.921.43.37.823 1.102.823 2.222v3.293c0 .319.192.694.8.576C20.565 21.796 24 17.298 24 12c0-6.63-5.373-12-12-12z" />
          </svg>
        </Link>
        <Link
          href="https://www.linkedin.com/in/kitkat-pineda/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="w-6 h-6 hover:scale-110 transition"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.966 0-1.75-.79-1.75-1.76s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.76-1.75 1.76zm13.5 10.29h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-3v-9h3v1.28c.63-.83 1.67-1.28 2.7-1.28 1.93 0 3.5 1.57 3.5 3.5v5.5z" />
          </svg>
        </Link>
        <Link href="mailto:kitkat.miel.pineda@gmail.com">
          <svg
            className="w-6 h-6 hover:scale-110 transition"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </Link>
      </div>
      <p className="text-xs mt-4 text-gray-400">
        Crafted with care — © 2025 Keith / Kitkat
      </p>
    </footer>
  );
}
