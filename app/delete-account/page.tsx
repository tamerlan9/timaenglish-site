// app/delete-account/page.tsx
import LegalPage from "../legal/_components/LegalPage";

export const metadata = {
  title: "Account Deletion • Tima English",
};

const sectionCls =
  "pt-6 border-t border-black/10 dark:border-white/10 first:border-0 first:pt-0";

const h2Cls =
  "text-lg font-semibold tracking-tight text-black dark:text-white";

const ulCls =
  "mt-3 list-decimal pl-6 space-y-1 text-zinc-700 dark:text-zinc-300";

const pCls = "text-zinc-700 dark:text-zinc-300 leading-relaxed";

export default function DeleteAccountPage() {
  return (
    <LegalPage title="Account and Data Deletion" updatedAt="2026-01-08">
      {/* Intro */}
      <p className={pCls}>
        Users of <strong>Tima English</strong> can delete their account and all
        associated personal data at any time.
      </p>

      {/* Main method */}
      <section className={sectionCls}>
        <h2 className={h2Cls}>How to delete your account</h2>
        <ol className={ulCls}>
          <li>Open the Tima English app</li>
          <li>Go to <strong>Profile → Settings</strong></li>
          <li>Select <strong>Delete account</strong> and confirm</li>
        </ol>

        <p className="mt-4 text-zinc-700 dark:text-zinc-300">
          This action permanently deletes your account and learning data.
        </p>
      </section>

      {/* Fallback */}
      <section className={sectionCls}>
        <h2 className={h2Cls}>If you cannot access the app</h2>
        <p className={pCls}>
          If you are unable to access the app, contact our support team and provide
          your <strong>User ID</strong> (available in the app settings).
        </p>

        <div className="mt-3 font-semibold text-black dark:text-white">
          support@timaenglish.app
        </div>
      </section>

      {/* Data deleted */}
      <section className={sectionCls}>
        <h2 className={h2Cls}>Data we delete</h2>
        <ul className="mt-3 list-disc pl-6 space-y-1 text-zinc-700 dark:text-zinc-300">
          <li>Account identifier (user ID)</li>
          <li>Learning progress and statistics</li>
          <li>Account-related preferences</li>
        </ul>
      </section>

      {/* Retention */}
      <section className={sectionCls}>
        <h2 className={h2Cls}>Retention period</h2>
        <p className={pCls}>
          All personal data is permanently deleted within 30 days. Limited data
          may be retained for legal or security purposes during this period.
        </p>
      </section>
    </LegalPage>
  );
}
