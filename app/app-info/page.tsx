// app/app-info/page.tsx
import Link from "next/link";
import LegalPage from "../legal/_components/LegalPage";

export const metadata = {
  title: "App Info • Tima English",
};

const sectionCls =
  "pt-6 border-t border-black/10 dark:border-white/10 first:border-0 first:pt-0";

const h2Cls =
  "text-lg font-semibold tracking-tight text-black dark:text-white";

const pCls = "text-zinc-700 dark:text-zinc-300 leading-relaxed";

const ulCls =
  "list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-300 leading-relaxed";

const linkCls = "underline hover:no-underline";

export default function AppInfoPage() {
  return (
    <LegalPage title="App Info" updatedAt="2026-06-27">
      <p className={pCls}>
        Tima English is an English learning app focused on speaking practice,
        vocabulary, pronunciation, and real conversational English.
      </p>

      <section className={sectionCls}>
        <h2 className={h2Cls}>About the app</h2>
        <p className={pCls}>
          Tima English helps users practice English through short interactive
          lessons, voice exercises, associations, examples, and mini-games. The
          app adapts practice to the learner&apos;s progress and is designed for
          both beginners and more advanced learners.
        </p>
      </section>

      <section className={sectionCls}>
        <h2 className={h2Cls}>Main features</h2>
        <ul className={ulCls}>
          <li>Personalized speaking lessons and voice exercises.</li>
          <li>Associations with images and phrases to help users remember words.</li>
          <li>Automatic repetition of words and phrases that need more practice.</li>
          <li>Lesson progress tracking, including spoken words and speaking speed.</li>
          <li>A large learning base with words, phrases, and real-life examples.</li>
        </ul>
      </section>

      <section className={sectionCls}>
        <h2 className={h2Cls}>Account and sign-in</h2>
        <p className={pCls}>
          Users can create an account using email, Apple Sign-In, or Google
          Sign-In. Account information is used only for authentication, account
          access, saving learning progress, and providing the app experience. If
          users choose Google Sign-In, Tima English uses their Google account
          information only for sign-in, account identification, and saving
          learning progress.
        </p>
      </section>

      <section className={sectionCls}>
        <h2 className={h2Cls}>User data</h2>
        <p className={pCls}>
          Tima English may use account information, authentication identifiers,
          lesson progress, learning statistics, and app
          usage data to provide the learning experience, save progress, improve
          app performance, and maintain account access.
        </p>
      </section>

      <section className={sectionCls}>
        <h2 className={h2Cls}>Privacy, terms, and deletion</h2>
        <p className={pCls}>
          More information is available in the{" "}
          <Link className={linkCls} href="/privacy">
            Privacy Policy
          </Link>
          ,{" "}
          <Link className={linkCls} href="/terms">
            Terms of Use
          </Link>
          , and{" "}
          <Link className={linkCls} href="/delete-account">
            Delete Account
          </Link>{" "}
          page.
        </p>
      </section>
    </LegalPage>
  );
}