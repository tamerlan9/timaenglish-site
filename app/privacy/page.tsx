// app/privacy/page.tsx
import LegalPage from "../legal/_components/LegalPage";

export const metadata = {
  title: "Privacy Policy • Tima English",
};

const sectionCls =
  "pt-6 border-t border-black/10 dark:border-white/10 first:border-0 first:pt-0";

const h2Cls =
  "text-lg font-semibold tracking-tight text-black dark:text-white";

const ulCls =
  "mt-3 list-disc pl-6 space-y-1 text-zinc-700 dark:text-zinc-300";

const pCls = "text-zinc-700 dark:text-zinc-300 leading-relaxed";

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updatedAt="2025-12-23">
      {/* Intro */}
      <p className={pCls}>
        Tima English respects user privacy and collects only the data required to
        provide the learning experience.
      </p>

      {/* Data collection */}
      <section className={sectionCls}>
        <h2 className={h2Cls}>What data we collect</h2>
        <ul className={ulCls}>
          <li>Email address (for account creation and login)</li>
          <li>Authentication identifiers</li>
          <li>Learning progress and lesson statistics</li>
          <li>App usage data (to improve app performance and stability)</li>
        </ul>
      </section>

      {/* Data not collected */}
      <section className={sectionCls}>
        <h2 className={h2Cls}>What we do NOT collect</h2>
        <ul className={ulCls}>
          <li>No personal media uploads</li>
          <li>No contacts, photos, or files from your device</li>
          <li>No biometric data (Face ID / Touch ID is handled by the OS)</li>
        </ul>
      </section>

      {/* Authentication */}
      <section className={sectionCls}>
        <h2 className={h2Cls}>Authentication</h2>
        <p className={pCls}>
          Authentication is handled securely via email login and trusted
          third-party authentication providers when enabled. Biometric
          authentication (Face ID / Touch ID) is used only locally on the device
          to unlock the app and is never transmitted or stored by Tima English.
        </p>
      </section>

      {/* Data usage */}
      <section className={sectionCls}>
        <h2 className={h2Cls}>Data usage</h2>
        <p className={pCls}>Collected data is used exclusively to:</p>
        <ul className={ulCls}>
          <li>Provide personalized learning</li>
          <li>Save progress across devices (if enabled)</li>
          <li>Improve app performance, stability, and learning quality</li>
        </ul>
      </section>

      {/* Data sharing */}
      <section className={sectionCls}>
        <h2 className={h2Cls}>Data sharing</h2>
        <p className={pCls}>
          We do not sell, rent, or publicly share user data. User data is not
          visible to other users.
        </p>
      </section>

      {/* Data removal */}
      <section className={sectionCls}>
        <h2 className={h2Cls}>Data removal</h2>
        <div className="mt-3 rounded-xl border border-black/10 bg-black/5 p-4 dark:border-white/10 dark:bg-white/5">
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            You can request account and data deletion at any time by contacting:
          </p>
          <div className="mt-1 font-semibold text-black dark:text-white">
            support@timaenglish.app
          </div>
        </div>
      </section>
    </LegalPage>
  );
}
