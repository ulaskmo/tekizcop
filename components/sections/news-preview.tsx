import { ButtonLink } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icons";
import { NewsCard } from "@/components/ui/news-card";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getNewsMeta } from "@/lib/news";

export function NewsPreview() {
  const posts = getNewsMeta().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section className="bg-white py-section">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            label="Haberler"
            title="Sektörden notlar ve proje güncellemeleri"
            description="Mevzuat değişiklikleri, teknik karşılaştırmalar ve tamamladığımız projelerin saha sonuçları."
          />
          <ButtonLink href="/haberler" variant="outline" className="group shrink-0">
            Tüm haberler
            <ArrowRightIcon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
          </ButtonLink>
        </div>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <RevealItem key={post.slug} className="h-full">
              <NewsCard post={post} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
