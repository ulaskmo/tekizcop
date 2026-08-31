import { placeholderImage } from "@/lib/utils";
import type { Project } from "./types";

/**
 * Tamamlanan projeler.
 *
 * TODO: `images` alanları placeholder'dır. Gerçek saha fotoğrafları
 * /public/images/projeler/<slug>-1.jpg biçiminde eklenecek.
 */
const gallery = (slug: string, count = 4) =>
  Array.from({ length: count }, (_, i) =>
    placeholderImage(`tekiz-proje-${slug}-${i + 1}`, 1400, 1000),
  );

export const projects: Project[] = [
  {
    slug: "kadikoy-belediyesi-yeralti-konteyner-projesi",
    title: "Kadıköy Sahil Bandı Yeraltı Konteyner Projesi",
    client: "Kadıköy Belediyesi",
    location: "İstanbul",
    date: "2024-09-15",
    category: "Belediye",
    images: gallery("kadikoy-yeralti", 5),
    description:
      "Kadıköy sahil bandı boyunca 42 noktada yeraltı çöp konteyneri sistemi kuruldu. Proje kapsamında her noktaya evsel atık, cam, kâğıt ve plastik için ayrı hazneler yerleştirilerek kaynakta ayrıştırma altyapısı oluşturuldu. Yürüyüş yolu bütünlüğünü bozmamak için platform yüzeyleri mevcut granit kaplama ile uyumlu üretildi. Kurulum, sahil bandındaki yaz sezonu yoğunluğu dikkate alınarak gece vardiyalarında tamamlandı.",
    stats: [
      { label: "Kurulum noktası", value: "42 nokta" },
      { label: "Toplam hacim", value: "504.000 litre" },
      { label: "Süre", value: "5 ay" },
    ],
  },
  {
    slug: "gebze-organize-sanayi-sikistirmali-sistem",
    title: "Gebze OSB Sıkıştırmalı Atık Yönetim Sistemi",
    client: "Gebze Organize Sanayi Bölgesi",
    location: "Kocaeli",
    date: "2024-05-20",
    category: "Sanayi",
    images: gallery("gebze-osb", 4),
    description:
      "Gebze Organize Sanayi Bölgesi'nde faaliyet gösteren 180 tesisin atık yönetimi için 14 adet 13 m³ sıkıştırmalı konteyner devreye alındı. Sistemlere entegre edilen GSM doluluk sensörleri, bölge yönetiminin toplama rotalarını doluluk verisine göre planlamasına imkân verdi. Devreye alma sonrası ilk altı ayda toplama sefer sayısı %58 azaldı.",
    stats: [
      { label: "Sıkıştırmalı ünite", value: "14 adet" },
      { label: "Sefer azalması", value: "%58" },
      { label: "Hizmet verilen tesis", value: "180" },
    ],
  },
  {
    slug: "antalya-konyaalti-park-cop-kovasi",
    title: "Konyaaltı Sahil Parkı Çöp Kovası Yenileme",
    client: "Konyaaltı Belediyesi",
    location: "Antalya",
    date: "2024-03-08",
    category: "Belediye",
    images: gallery("antalya-konyaalti", 4),
    description:
      "Konyaaltı sahil parkı ve yürüyüş yolları boyunca 320 adet ahşap kaplamalı park çöp kovası ile 80 adet ikili geri dönüşüm istasyonu kuruldu. Deniz iklimindeki tuzlu havaya dayanım için iç gövdelerde sıcak daldırma galvaniz, ahşap yüzeylerde deniz tipi emprenye tercih edildi.",
    stats: [
      { label: "Park çöp kovası", value: "320 adet" },
      { label: "Geri dönüşüm istasyonu", value: "80 adet" },
      { label: "Süre", value: "3 ay" },
    ],
  },
  {
    slug: "izmir-buyuksehir-galvaniz-konteyner-tedariki",
    title: "İzmir Büyükşehir Galvaniz Konteyner Tedariki",
    client: "İzmir Büyükşehir Belediyesi",
    location: "İzmir",
    date: "2023-11-30",
    category: "Belediye",
    images: gallery("izmir-galvaniz", 4),
    description:
      "İzmir'in 11 ilçesine dağıtılmak üzere 2.400 adet 800 litre ve 1.100 litre sıcak daldırma galvaniz çöp konteyneri üretildi. Her konteyner üzerine ilçe kodu ve envanter numarası lazer kesim ile işlendi; belediyenin varlık takip sistemine entegre QR etiketleri uygulandı.",
    stats: [
      { label: "Konteyner", value: "2.400 adet" },
      { label: "İlçe", value: "11" },
      { label: "Teslim süresi", value: "4 ay" },
    ],
  },
  {
    slug: "bursa-nilufer-sifir-atik-istasyonlari",
    title: "Nilüfer Sıfır Atık Ayrıştırma İstasyonları",
    client: "Nilüfer Belediyesi",
    location: "Bursa",
    date: "2023-09-12",
    category: "Sıfır Atık",
    images: gallery("bursa-nilufer", 4),
    description:
      "Sıfır Atık Yönetmeliği kapsamında Nilüfer ilçesindeki 64 kamu binası, okul ve kültür merkezine 4'lü geri dönüşüm kutusu seti yerleştirildi. Uygulama öncesinde kurum personeline ayrıştırma eğitimi verildi, her istasyona görsel yönlendirme panoları eklendi.",
    stats: [
      { label: "İstasyon", value: "256 adet" },
      { label: "Bina", value: "64" },
      { label: "Geri kazanım artışı", value: "%37" },
    ],
  },
  {
    slug: "ankara-avm-atik-yonetimi",
    title: "Ankara AVM Atık Yönetimi Kurulumu",
    client: "Panora Alışveriş Merkezi",
    location: "Ankara",
    date: "2023-06-25",
    category: "Ticari",
    images: gallery("ankara-avm", 4),
    description:
      "Alışveriş merkezinin bodrum kat atık toplama alanına 2 adet 8 m³ sıkıştırmalı konteyner ve 3 adet dikey karton presi kuruldu. Karton ve streç film atıklarının balyalanması sayesinde AVM, daha önce maliyet kalemi olan atığı gelir kalemine dönüştürdü.",
    stats: [
      { label: "Sıkıştırmalı ünite", value: "2 adet" },
      { label: "Karton presi", value: "3 adet" },
      { label: "Hacim kazancı", value: "%80" },
    ],
  },
  {
    slug: "trabzon-ortahisar-plastik-konteyner",
    title: "Ortahisar Plastik Konteyner Dağıtımı",
    client: "Ortahisar Belediyesi",
    location: "Trabzon",
    date: "2023-04-18",
    category: "Belediye",
    images: gallery("trabzon-ortahisar", 4),
    description:
      "Yoğun yağış alan bölgenin iklim koşullarına uygun olarak 1.150 adet UV katkılı HDPE plastik çöp konteyneri üretildi ve mahalle bazlı dağıtımı yapıldı. Plastik gövde tercihi, yüksek nem oranı nedeniyle metal konteynerlerde görülen korozyon sorununu ortadan kaldırdı.",
    stats: [
      { label: "Plastik konteyner", value: "1.150 adet" },
      { label: "Mahalle", value: "28" },
      { label: "Teslim süresi", value: "2 ay" },
    ],
  },
  {
    slug: "eskisehir-universite-kampus-projesi",
    title: "Anadolu Üniversitesi Kampüs Atık Projesi",
    client: "Anadolu Üniversitesi",
    location: "Eskişehir",
    date: "2022-10-05",
    category: "Kampüs",
    images: gallery("eskisehir-kampus", 4),
    description:
      "Kampüs genelinde 18 fakülte binası ve 6 yurt için bütünleşik atık toplama altyapısı kuruldu. Bina içlerine paslanmaz pedallı kovalar, dış alanlara ahşap kaplamalı park kovaları, toplama noktalarına 1.100 litre galvaniz konteynerler yerleştirildi.",
    stats: [
      { label: "Bina", value: "24" },
      { label: "Toplam ünite", value: "740 adet" },
      { label: "Süre", value: "6 ay" },
    ],
  },
  {
    slug: "mersin-liman-hurda-konteyner",
    title: "Mersin Limanı Hurda Konteyner Tedariki",
    client: "Mersin Uluslararası Limanı",
    location: "Mersin",
    date: "2022-07-14",
    category: "Sanayi",
    images: gallery("mersin-liman", 4),
    description:
      "Liman sahasındaki bakım atölyeleri ve yükleme alanları için 60 adet devirmeli hurda konteyneri ile 8 adet 12 m³ kancalı moloz konteyneri üretildi. Deniz kenarı korozyon koşulları nedeniyle tüm ünitelerde kumlama sonrası çift kat epoksi astar uygulandı.",
    stats: [
      { label: "Devirmeli konteyner", value: "60 adet" },
      { label: "Kancalı konteyner", value: "8 adet" },
      { label: "Süre", value: "3 ay" },
    ],
  },
];

export const projectMap = new Map(projects.map((p) => [p.slug, p]));

export function getProject(slug: string) {
  return projectMap.get(slug);
}

export const projectCategories = Array.from(
  new Set(projects.map((p) => p.category)),
).sort((a, b) => a.localeCompare(b, "tr"));

/** Projeleri tarihe göre yeniden eskiye sıralar. */
export const projectsByDate = [...projects].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);
