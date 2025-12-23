// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-zinc-50 dark:bg-black">
      <Image
        src="/logo.png"
        alt="Tima English logo"
        width={120}
        height={120}
        priority
        className="mb-6"
      />

      <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
        Tima English
      </h1>

      <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mb-10">
        <span className="block">
          Английский, который подстраивается под тебя
        </span>
        <span className="block mt-3">
          Умный обучающий движок, мини-игры и практика речи
        </span>
      </p>

      <div className="flex gap-4 flex-wrap justify-center items-center">
        <a href="#" aria-label="Download on the App Store">
          <img
            src="/appstore.svg"
            alt="Download on the App Store"
            style={{ height: 60, width: "auto" }}
          />
        </a>

        <a href="#" aria-label="Get it on Google Play">
          <img
            src="/googleplay.svg"
            alt="Get it on Google Play"
            style={{ height: 60, width: "auto" }}
          />
        </a>
      </div>

      <footer className="mt-12 text-sm text-zinc-500 dark:text-zinc-400">
        <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center">
          <Link className="hover:underline" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="hover:underline" href="/terms">
            Terms of Use
          </Link>
          <Link className="hover:underline" href="/media">
            Media & Copyright
          </Link>
        </div>
        <div className="mt-3">
          © {new Date().getFullYear()} Tima English
        </div>
      </footer>
    </main>
  );
}
