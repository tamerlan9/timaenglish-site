// app/app-info/page.tsx
import LegalPage from "../legal/_components/LegalPage";
import Link from "next/link";

export const metadata = {
  title: "App Info • Tima English",
};

const sectionCls =
  "pt-6 border-t border-black/10 dark:border-white/10 first:border-0 first:pt-0";

const h2Cls =
  "text-lg font-semibold tracking-tight text-black dark:text-white";

const pCls = "text-zinc-700 dark:text-zinc-300 leading-relaxed";

export default function AppInfoPage() {
  return (
    <LegalPage title="App Info" updatedAt="2026-06-27">
      <p className={pCls}>
        Tima English is an English learning app for speaking practice.
      </p>

      <section className={sectionCls}>
        <h2 className={h2Cls}>About the app</h2>
        <p className={pCls}>
          Users learn words and phrases through short interactive lessons, voice
          exercises, associations, and mini-games.
        </p>
      </section>

      <section className={sectionCls}>
        <h2 className={h2Cls}>Account and sign-in</h2>
        <p className={pCls}>
          Users can create an account using email, Apple Sign-In, or Google
          Sign-In. If users choose Google Sign-In, Tima English uses their
          Google account information only for authentication and saving learning
          progress.
        </p>
      </section>

      <section className={sectionCls}>
        <h2 className={h2Cls}>User data</h2>
        <p className={pCls}>
          Tima English uses account information, authentication identifiers,
          lesson progress, and app usage data only to provide the learning
          experience, save progress, and improve app performance.
        </p>
      </section>

      <section className={sectionCls}>
        <h2 className={h2Cls}>Legal</h2>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-zinc-700 dark:text-zinc-300">
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
      </section>
    </LegalPage>
  );
}