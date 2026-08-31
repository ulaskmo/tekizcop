export type Spec = {
  label: string;
  value: string;
};

export type Category = {
  slug: string;
  name: string;
  /** Menü ve kart başlıklarında kullanılan kısa ad. */
  shortName: string;
  description: string;
  image: string;
};

export type Product = {
  slug: string;
  name: string;
  /** Katalog/stok kodu, ör. "TK-GLV-800". */
  code: string;
  /** `Category.slug` referansı. */
  category: string;
  /** Hacim (litre). Hacmi olmayan ürünlerde `null`. */
  litre: number | null;
  material: string;
  images: string[];
  /** Kart ve liste görünümlerinde kullanılan tek satırlık özet. */
  excerpt: string;
  /** Ürün detay sayfası açıklaması (paragraflara bölünmüş). */
  description: string[];
  features: string[];
  specs: Spec[];
  featured?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  location: string;
  /** ISO 8601 tarih, ör. "2024-06-01". */
  date: string;
  category: string;
  images: string[];
  description: string;
  stats?: Spec[];
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
};

export type Certificate = {
  slug: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
  description: string;
};

export type Reference = {
  name: string;
  sector: string;
  city: string;
  /**
   * Logo görseli yolu. Tanımlı değilse arayüz firma adını tipografik
   * wordmark olarak gösterir.
   * TODO: gerçek logolar /public/images/referanslar altına eklenecek.
   */
  logo?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
  /** Gruplama için konu başlığı. */
  topic: string;
};

export type GalleryPhoto = {
  id: string;
  title: string;
  category: string;
  image: string;
};

export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
};

export type ValueItem = {
  title: string;
  description: string;
  icon: "leaf" | "shield" | "gear" | "handshake" | "spark" | "target";
};

export type Stat = {
  /** Sayaç animasyonunun hedef değeri. */
  value: number;
  /** Sayının önüne eklenen metin, ör. "" veya "%". */
  prefix?: string;
  /** Sayının sonuna eklenen metin, ör. "+" veya "'ten beri". */
  suffix?: string;
  /** Binlik ayırıcı uygulanmaz — yıl gibi değerler için. */
  plain?: boolean;
  label: string;
};

export type NewsMeta = {
  slug: string;
  title: string;
  /** ISO 8601 tarih. */
  date: string;
  coverImage: string;
  excerpt: string;
  author: string;
  category: string;
  readingTime: number;
};

export type NewsPost = NewsMeta & {
  /** Markdown gövde. */
  body: string;
};
