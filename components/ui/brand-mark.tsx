import brandMark from "@/lib/brand-mark.json";
import { cn } from "@/lib/utils";

type BrandPath = (typeof brandMark.paths)[number];

/**
 * Tekiz logo sembolü: izometrik galvaniz konteyner.
 * Geometri lib/brand-mark.json içinde tanımlıdır; favicon üreteci de aynı
 * dosyayı kullanır. Opaklık farkları 3B hacmi küçük boyutta bile okutur.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox={brandMark.viewBox}
      fill="currentColor"
      className={cn("h-6 w-6", className)}
      aria-hidden
    >
      {brandMark.paths.map((path: BrandPath) => (
        <path
          key={path.d}
          d={path.d}
          opacity={"opacity" in path ? path.opacity : 1}
          fillRule={path.fillRule === "evenodd" ? "evenodd" : "nonzero"}
          clipRule={path.fillRule === "evenodd" ? "evenodd" : undefined}
        />
      ))}
    </svg>
  );
}
