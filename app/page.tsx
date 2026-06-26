// app/app-info/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "App Info • Tima English",
};

export default function AppInfoPage() {
  return (
    <main
      className="min-h-[100svh] flex flex-col items-center justify-center
                 px-6 py-10 sm:py-16
                 text-center bg-zinc-50 dark:bg-black"
    >
      <Image
        src="/logo.png"
        alt="Tima English logo"
        width={110}
        height={110}
        priority
        className="mb-6"
      />

      <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
        Tima English
      </h1>

      <div className="max-w-2xl space-y-6 text-zinc-600 dark:text-zinc-400">
        <section>
          <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">
            About the app
          </h2>
          <p className="text-lg leading-relaxed">
            Tima English is an English learning app for speaking practice.
            Users learn words and phrases through short interactive lessons,
            voice exercises, associations, and mini-games.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">
            Account and sign-in
          </h2>
          <p className="text-lg leading-relaxed">
            Users can create an account using email, Apple Sign-In, or Google
            Sign-In. If users choose Google Sign-In, Tima English uses their
            Google account information only for authentication and saving
            learning progress.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">
            User data
          </h2>
          <p className="text-lg leading-relaxed">
            Tima English uses account information, authentication identifiers,
            lesson progress, and app usage data only to provide the learning
            experience, save progress, and improve app performance.
          </p>
        </section>
      </div>

      <footer className="mt-12 text-sm text-zinc-500 dark:text-zinc-400">
        <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center">
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="/app-info">
            App Info
          </Link>
          <Link className="hover:underline" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="hover:underline" href="/terms">
            Terms of Use
          </Link>
          <Link className="hover:underline" href="/delete-account">
            Delete Account
          </Link>
        </div>

        <div className="mt-3">
          Contact me:{" "}
          <a
            href="mailto:timaenglish.app@gmail.com"
            className="hover:underline"
          >
            timaenglish.app@gmail.com
          </a>
        </div>

        <div className="mt-2">© {new Date().getFullYear()} Tima English</div>
      </footer>
    </main>
  );
}