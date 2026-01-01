// app/page.tsx
import Image from "next/image";
import Link from "next/link";

const INSTAGRAM_WEB = "https://instagram.com/tima_english";
const TELEGRAM_WEB = "https://t.me/tima_english";
const WHATSAPP_WEB = "https://chat.whatsapp.com/DxYYvx1BYpvHdSXaNMLpk5";

export default function Home() {
  return (
    <main
      className="min-h-[100svh] flex flex-col items-center justify-center
                 px-6 py-10 sm:py-16
                 text-center bg-zinc-50 dark:bg-black"
    >
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

      <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mb-8">
        <span className="block">
          Английский, который подстраивается под тебя
        </span>
        <span className="block mt-3">
          Ассоциации, мини-игры и живая речь
        </span>
      </p>

      {/* Store buttons (temporarily disabled) */}
      {/*
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
      */}

      {/* Coming soon */}
      <div className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        Скоро в App Store · Скоро в Google Play
      </div>

      {/* Socials */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <a
          href={TELEGRAM_WEB}
          target="_blank"
          rel="noreferrer"
          aria-label="Telegram"
          className="inline-flex items-center justify-center rounded-full p-3
                     bg-white/15 ring-1 ring-white/30
                     transition-transform duration-150
                     hover:scale-110 active:scale-95"
        >
          <img src="/telegram.svg" alt="Telegram" className="h-6 w-6" />
        </a>

        <a
          href={INSTAGRAM_WEB}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="inline-flex items-center justify-center rounded-full p-3
                     bg-white/15 ring-1 ring-white/30
                     transition-transform duration-150
                     hover:scale-110 active:scale-95"
        >
          <img src="/instagram.svg" alt="Instagram" className="h-6 w-6" />
        </a>

        <a
          href={WHATSAPP_WEB}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="inline-flex items-center justify-center rounded-full p-3
                     bg-white/15 ring-1 ring-white/30
                     transition-transform duration-150
                     hover:scale-110 active:scale-95"
        >
          <img src="/whatsapp.svg" alt="WhatsApp" className="h-6 w-6" />
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

        {/* Support email — важно для App Store / Google Play */}
        <div className="mt-3">
          Support:{" "}
          <a
            href="mailto:support@timaenglish.app"
            className="hover:underline"
          >
            support@timaenglish.app
          </a>
        </div>

        <div className="mt-2">
          © {new Date().getFullYear()} Tima English
        </div>
      </footer>
    </main>
  );
}
