// app/media/page.tsx
import LegalPage from "../legal/_components/LegalPage";

export const metadata = {
  title: "Media & Copyright • Tima English",
};

const sectionCls =
  "pt-6 border-t border-black/10 dark:border-white/10 first:border-0 first:pt-0";

const h2Cls =
  "text-lg font-semibold tracking-tight text-black dark:text-white";

const ulCls =
  "mt-3 list-disc pl-6 space-y-1 text-zinc-700 dark:text-zinc-300";

const pMutedCls = "text-zinc-700 dark:text-zinc-300 leading-relaxed";

export default function MediaCopyright() {
  return (
    <LegalPage title="Media & Copyright Policy" updatedAt="2025-12-23">
      {/* Intro */}
      <p className={pMutedCls}>
        This policy explains how media content is used in Tima English and how we
        ensure compliance with copyright and intellectual property regulations.
      </p>

      {/* Media usage */}
      <section className={sectionCls}>
        <h2 className={h2Cls}>Media usage</h2>
        <ul className={ulCls}>
          <li>All media content is used strictly for individual educational purposes.</li>
          <li>Media content is not user-generated.</li>
          <li>Media is not publicly shared or redistributed.</li>
          <li>
            Content is displayed only inside the app and is not accessible to
            other users or platforms.
          </li>
        </ul>
      </section>

      {/* Copyright */}
      <section className={sectionCls}>
        <h2 className={h2Cls}>Copyright compliance</h2>
        <ul className={ulCls}>
          <li>Media clips are shortened and transformed for educational use.</li>
          <li>
            If any content is reported or identified as problematic, it will be
            reviewed and removed promptly when necessary.
          </li>
        </ul>
      </section>

      {/* Reporting */}
      <section className={sectionCls}>
        <h2 className={h2Cls}>Content reporting</h2>
        <p className={pMutedCls}>
          The app includes a built-in content reporting feature. Reported media
          items can be hidden immediately and reviewed for potential removal.
        </p>
      </section>

      {/* Rights holders */}
      <section className={sectionCls}>
        <h2 className={h2Cls}>Rights holders</h2>
        <p className={pMutedCls}>
          Requests from copyright holders are taken seriously and will result in
          prompt review and removal of the requested material when appropriate.
        </p>

        <div className="mt-5 rounded-xl border border-black/10 bg-black/5 p-4 dark:border-white/10 dark:bg-white/5">
          <div className="text-sm text-zinc-600 dark:text-zinc-400">Contact</div>
          <div className="mt-1 font-semibold text-black dark:text-white">
            support@timaenglish.app
          </div>
        </div>
      </section>
    </LegalPage>
  );
}
