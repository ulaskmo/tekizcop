import { siteConfig } from "@/data/site";

// Geçici iskele sayfası — 4. adımda tam ana sayfa ile değiştirilecek.
export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center bg-charcoal-950 bg-grid-fade bg-grid">
      <div className="container-page py-section">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
          Kurulum tamamlandı
        </p>
        <h1 className="max-w-3xl text-display-md text-white sm:text-display-lg">
          {siteConfig.name}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-charcoal-300">
          {siteConfig.description}
        </p>
      </div>
    </main>
  );
}
