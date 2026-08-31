import { references } from "@/data/references";

/**
 * Referans kurum adlarını yatay kayan bir şerit hâlinde gösterir.
 * Kesintisiz döngü için liste iki kez basılır; ikinci kopya ekran
 * okuyucudan gizlenir.
 *
 * TODO: Gerçek logolar eklendiğinde metin yerine <Image> kullanılacak.
 */
export function ReferenceMarquee() {
  const shown = references.slice(0, 12);

  return (
    <section className="border-b border-charcoal-200 bg-white py-10">
      <div className="container-page">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-charcoal-400">
          500&apos;ü aşkın projede tercih edildik
        </p>
      </div>

      <div className="relative mt-7 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-14 pr-14 motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className="flex items-center gap-14"
              aria-hidden={copy === 1}
            >
              {shown.map((ref) => (
                <li
                  key={`${copy}-${ref.name}`}
                  className="whitespace-nowrap font-display text-lg font-semibold text-charcoal-300 transition-colors hover:text-charcoal-500"
                >
                  {ref.name}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
