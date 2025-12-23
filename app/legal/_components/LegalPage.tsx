// app/legal/_components/LegalPage.tsx
import Link from "next/link";

type Props = {
  title: string;
  updatedAt?: string;
  children: React.ReactNode;
};

export default function LegalPage({ title, updatedAt, children }: Props) {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-12 dark:bg-black">
      <div className="mx-auto w-full max-w-3xl">
        {/* Top bar */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm text-zinc-600 hover:underline dark:text-zinc-400"
          >
            ← Back
          </Link>

          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              href="/privacy"
              className="text-zinc-600 hover:underline dark:text-zinc-400"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-zinc-600 hover:underline dark:text-zinc-400"
            >
              Terms
            </Link>
            <Link
              href="/media"
              className="text-zinc-600 hover:underline dark:text-zinc-400"
            >
              Media
            </Link>
          </div>
        </div>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-black dark:text-white">
            {title}
          </h1>
          {updatedAt && (
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Last updated: {updatedAt}
            </p>
          )}
        </header>

        {/* Content */}
        <article className="space-y-6 text-zinc-700 dark:text-zinc-300">
          {children}
        </article>

        {/* Footer */}
        <footer className="mt-12 text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Tima English
        </footer>
      </div>
    </main>
  );
}
