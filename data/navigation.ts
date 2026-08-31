import { categories } from "./categories";

export type NavLink = {
  label: string;
  href: string;
  children?: NavLink[];
};

/** Header ana menüsü. "Kurumsal" başlığı altında kurumsal sayfalar gruplanır. */
export const mainNav: NavLink[] = [
  { label: "Ana Sayfa", href: "/" },
  {
    label: "Kurumsal",
    href: "/hakkimizda",
    children: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "Belgelerimiz", href: "/belgelerimiz" },
      { label: "Referanslarımız", href: "/referanslarimiz" },
      { label: "Sıkça Sorulan Sorular", href: "/sss" },
    ],
  },
  {
    label: "Ürünler",
    href: "/urunler",
    children: [
      { label: "Tüm Ürünler", href: "/urunler" },
      ...categories.map((c) => ({ label: c.name, href: `/urunler/${c.slug}` })),
    ],
  },
  { label: "Projeler", href: "/projeler" },
  { label: "Foto Galeri", href: "/foto-galeri" },
  { label: "Haberler", href: "/haberler" },
  { label: "İletişim", href: "/iletisim" },
];

/** Footer site haritası kolonları. */
export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Kurumsal",
    links: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "Belgelerimiz", href: "/belgelerimiz" },
      { label: "Referanslarımız", href: "/referanslarimiz" },
      { label: "Sıkça Sorulan Sorular", href: "/sss" },
      { label: "İletişim", href: "/iletisim" },
    ],
  },
  {
    title: "Ürün Grupları",
    links: categories.map((c) => ({
      label: c.name,
      href: `/urunler/${c.slug}`,
    })),
  },
  {
    title: "Keşfet",
    links: [
      { label: "Tüm Ürünler", href: "/urunler" },
      { label: "Projeler", href: "/projeler" },
      { label: "Foto Galeri", href: "/foto-galeri" },
      { label: "Haberler", href: "/haberler" },
      { label: "Teklif Al", href: "/iletisim#teklif" },
    ],
  },
];
