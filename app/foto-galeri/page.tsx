import type { Metadata } from "next";

import { PhotoGrid } from "@/components/gallery/photo-grid";
import { QuoteCta } from "@/components/sections/quote-cta";
import { PageHero } from "@/components/ui/page-hero";
import { galleryPhotos } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Foto Galeri",
  description:
    "Hadımköy üretim tesisimizden, ürün gamımızdan ve saha kurulum çalışmalarımızdan fotoğraflar.",
  alternates: { canonical: "/foto-galeri" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        label="Galeri"
        title="Üretimden ve sahadan kareler"
        description="Sac kesim hattından galvaniz banyosuna, yeraltı konteyner kuyusu kazısından tamamlanmış kurulumlara kadar işimizin her aşaması."
        breadcrumbs={[{ label: "Foto Galeri" }]}
      />

      <section className="bg-white py-section">
        <div className="container-page">
          <PhotoGrid photos={galleryPhotos} />
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
