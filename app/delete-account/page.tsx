// app/delete-account/page.tsx
import Link from "next/link";

export default function DeleteAccountPage() {
  return (
    <main className="min-h-[100svh] bg-zinc-50 dark:bg-black px-6 py-10 sm:py-16">
      <div className="mx-auto max-w-2xl text-zinc-900 dark:text-zinc-100">
        <h1 className="text-3xl font-bold">Account and Data Deletion</h1>

        <p className="mt-4 text-zinc-700 dark:text-zinc-300">
          To request deletion of your Tima English account and associated data,
          please contact us:
        </p>

        <p className="mt-3">
          <a
            className="font-medium underline"
            href="mailto:support@timaenglish.app?subject=Account%20deletion%20request"
          >
            support@timaenglish.app
          </a>
        </p>

        <div className="mt-6 rounded-xl border border-zinc-200 dark:border-zinc-800 p-5">
          <h2 className="text-lg font-semibold">What to include</h2>
          <ul className="mt-3 list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
            <li>The email address used to sign in</li>
            <li>(Optional) Your user ID, if shown in the app</li>
          </ul>

          <h2 className="mt-5 text-lg font-semibold">Data we delete</h2>
          <ul className="mt-3 list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
            <li>Account information (email, user ID)</li>
            <li>Learning progress and preferences</li>
          </ul>

          <h2 className="mt-5 text-lg font-semibold">Retention</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300">
            Some data may be retained for legal, security, or accounting purposes
            for up to 30 days.
          </p>
        </div>

        <div className="mt-8">
          <Link className="underline text-zinc-700 dark:text-zinc-300" href="/">
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
