// app/terms/page.tsx
import LegalPage from "../legal/_components/LegalPage";

export const metadata = {
  title: "Terms of Use • Tima English",
};

const sectionCls =
  "pt-6 border-t border-black/10 dark:border-white/10 first:border-0 first:pt-0";

const h2Cls =
  "text-lg font-semibold tracking-tight text-black dark:text-white";

const ulCls =
  "mt-3 list-disc pl-6 space-y-1 text-zinc-700 dark:text-zinc-300";

const pCls = "text-zinc-700 dark:text-zinc-300 leading-relaxed";

export default function TermsOfUse() {
  return (
    <LegalPage title="Terms of Use" updatedAt="2025-12-23">
      {/* Intro */}
      <p className={pCls}>
        By using Tima English, you agree to these Terms of Use. If you do not
        agree, please do not use the app.
      </p>

      {/* Use of service */}
      <section className={sectionCls}>
        <h2 className={h2Cls}>Use of the service</h2>
        <ul className={ulCls}>
          <li>You must provide accurate account information.</li>
          <li>You are responsible for maintaining the security of your account.</li>
          <li>
            You may not misuse the app, attempt to disrupt it, or access it in an
            unauthorized way.
          </li>
        </ul>
      </section>

      {/* Educational purpose */}
      <section className={sectionCls}>
        <h2 className={h2Cls}>Educational purpose</h2>
        <p className={pCls}>
          Tima English is provided for individual educational use. The app
          content and features may change over time as we improve the product.
        </p>
      </section>

      {/* Subscriptions */}
      <section className={sectionCls}>
        <h2 className={h2Cls}>Subscriptions and payments</h2>
        <p className={pCls}>
          If the app offers paid subscriptions, billing and cancellations are
          handled by the App Store / Google Play under their rules. Pricing and
          availability may vary by region.
        </p>
      </section>

      {/* Intellectual property */}
      <section className={sectionCls}>
        <h2 className={h2Cls}>Intellectual property</h2>
        <p className={pCls}>
          The app, its design, text, and educational materials are owned by Tima
          English or licensed for use. You may not copy, redistribute, or resell
          app content without permission.
        </p>
      </section>

      {/* Disclaimer */}
      <section className={sectionCls}>
        <h2 className={h2Cls}>Disclaimer</h2>
        <p className={pCls}>
          The service is provided “as is” without warranties. We are not liable
          for indirect or consequential damages arising from use of the app, to
          the extent permitted by law.
        </p>
      </section>

      {/* Contact */}
      <section className={sectionCls}>
        <h2 className={h2Cls}>Contact</h2>
        <div className="mt-3 rounded-xl border border-black/10 bg-black/5 p-4 dark:border-white/10 dark:bg-white/5">
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Questions about these Terms:
          </p>
          <div className="mt-1 font-semibold text-black dark:text-white">
            support@timaenglish.app
          </div>
        </div>
      </section>
    </LegalPage>
  );
}
