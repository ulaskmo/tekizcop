/**
 * Sitenin tek kaynaklı yapılandırması.
 *
 * TODO: Aşağıdaki tüm değerler PLACEHOLDER'dır. Gerçek firma bilgileri
 * geldiğinde yalnızca bu dosyayı güncellemek yeterlidir.
 */

export const siteConfig = {
  name: "Tekiz Çöp Konteyner",
  legalName: "Tekiz Çöp Konteyner San. ve Tic. Ltd. Şti.",
  shortName: "Tekiz",
  tagline: "Galvaniz ve plastik çöp konteyneri üretimi",
  description:
    "1985'ten bu yana galvaniz, plastik ve yeraltı çöp konteyneri üretiyoruz. Belediyeler, siteler ve sanayi tesisleri için dayanıklı atık toplama çözümleri.",

  // TODO: Yayına almadan önce gerçek alan adı ile değiştirin.
  url: "https://www.tekizcopkonteyner.com.tr",
  locale: "tr_TR",

  // TODO: Gerçek iletişim bilgilerini girin.
  phone: "+90 212 000 00 00",
  phoneHref: "tel:+902120000000",
  whatsapp: "905000000000",
  whatsappHref: "https://wa.me/905000000000",
  email: "info@tekizcopkonteyner.com.tr",
  emailHref: "mailto:info@tekizcopkonteyner.com.tr",

  address: {
    street: "Organize Sanayi Bölgesi, 5. Cadde No: 12",
    district: "Hadımköy / Arnavutköy",
    city: "İstanbul",
    postalCode: "34555",
    country: "Türkiye",
    // TODO: Gerçek koordinatlar ile güncelleyin (Google Maps embed için kullanılıyor).
    lat: 41.1533,
    lng: 28.6742,
  },

  workingHours: [
    { days: "Pazartesi – Cuma", hours: "08:30 – 18:00" },
    { days: "Cumartesi", hours: "09:00 – 14:00" },
    { days: "Pazar", hours: "Kapalı" },
  ],

  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/",
    youtube: "https://youtube.com/",
  },

  founded: 1985,

  /**
   * TODO: Web3Forms access key'inizi .env.local dosyasına ekleyin:
   *   NEXT_PUBLIC_WEB3FORMS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   * Anahtar tanımlı değilse iletişim formu demo modunda çalışır (istek gönderilmez).
   */
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
} as const;

export type SiteConfig = typeof siteConfig;

export const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.district}, ${siteConfig.address.city}`;
