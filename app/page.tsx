import { AboutSummary } from "@/components/sections/about-summary";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { Hero } from "@/components/sections/hero";
import { NewsPreview } from "@/components/sections/news-preview";
import { QuoteCta } from "@/components/sections/quote-cta";
import { ReferenceMarquee } from "@/components/sections/reference-marquee";
import { StatsBar } from "@/components/sections/stats-bar";
import { Testimonials } from "@/components/sections/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ReferenceMarquee />
      <FeaturedProducts />
      <AboutSummary />
      <Testimonials />
      <NewsPreview />
      <QuoteCta />
    </>
  );
}
