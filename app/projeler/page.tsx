import type { Metadata } from "next";

import { ProjectGrid } from "@/components/projects/project-grid";
import { QuoteCta } from "@/components/sections/quote-cta";
import { PageHero } from "@/components/ui/page-hero";
import { projectsByDate } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projeler",
  description:
    "Belediyeler, organize sanayi bölgeleri, üniversite kampüsleri ve alışveriş merkezleri için tamamladığımız atık toplama projeleri ve saha sonuçları.",
  alternates: { canonical: "/projeler" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Referans Projeler"
        title="Sahada tamamladığımız işler"
        description="Belediyelerden organize sanayi bölgelerine, üniversite kampüslerinden alışveriş merkezlerine kadar 500'ü aşkın proje tamamladık. Aşağıdaki seçkide kapsam, süre ve ölçülebilir sonuçları paylaşıyoruz."
        breadcrumbs={[{ label: "Projeler" }]}
      />

      <section className="bg-white py-section">
        <div className="container-page">
          <ProjectGrid projects={projectsByDate} />
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
