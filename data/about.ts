import type { Stat, TimelineEntry, ValueItem } from "./types";

/**
 * Hakkımızda sayfası ve ana sayfa özet bloğu içeriği.
 *
 * TODO: 1985 kuruluş yılı ve tüm kilometre taşları PLACEHOLDER'dır;
 * gerçek şirket geçmişi ile değiştirilecek.
 */

export const stats: Stat[] = [
  { value: 1985, suffix: "", label: "Kuruluş yılı" },
  { value: 500, suffix: "+", label: "Tamamlanan proje" },
  { value: 81, suffix: " il", label: "Sevkiyat ağı" },
  { value: 40, suffix: "+", label: "Yıllık üretim deneyimi" },
];

export const aboutParagraphs = [
  "Tekiz Çöp Konteyner, 1985 yılında İstanbul'da küçük bir sac işleme atölyesi olarak kuruldu. İlk yıllarda belediyelerin talebiyle ürettiğimiz galvaniz çöp konteynerleri, kısa sürede firmanın ana faaliyet alanına dönüştü.",
  "Bugün Hadımköy'deki 12.000 m² kapalı alana sahip tesisimizde; sac kesim, CNC büküm, robotik kaynak, sıcak daldırma galvaniz ve elektrostatik toz boya süreçlerinin tamamını kendi bünyemizde yürütüyoruz. Üretimin tek çatı altında toplanması, hem teslim sürelerini kısaltıyor hem de her partide aynı kalite seviyesini korumamızı sağlıyor.",
  "Galvaniz ve plastik tekerlekli konteynerlerin yanı sıra yeraltı toplama sistemleri, sıkıştırmalı üniteler, geri dönüşüm istasyonları ve moloz konteynerleri üretiyoruz. 81 ilde belediyeler, organize sanayi bölgeleri, üniversiteler, hastaneler ve alışveriş merkezleri için 500'ü aşkın proje tamamladık.",
];

export const missionStatement =
  "Atığın toplandığı noktada dayanıklı, hijyenik ve kent estetiğiyle uyumlu çözümler üretmek; belediyelerin ve işletmelerin atık yönetimi maliyetini kalıcı olarak düşürmek.";

export const visionStatement =
  "Türkiye'nin atık toplama ekipmanlarında ilk akla gelen üreticisi olmak ve ürettiğimiz her ürünün ömrü sonunda tamamen geri kazanılabildiği bir üretim modelini standart hâline getirmek.";

export const values: ValueItem[] = [
  {
    title: "Kendi tesisimizde üretim",
    description:
      "Sac kesimden galvaniz banyosuna kadar tüm süreç kendi hattımızda yürür. Fason üretim yapmadığımız için kaliteyi ve teslim tarihini biz kontrol ederiz.",
    icon: "gear",
  },
  {
    title: "Ömür boyu dayanım",
    description:
      "Sıcak daldırma galvaniz ve UV katkılı HDPE tercihimiz tesadüf değil. Ürünün ilk maliyeti değil, on yıllık toplam maliyeti önemlidir.",
    icon: "shield",
  },
  {
    title: "Çevresel sorumluluk",
    description:
      "Sac firelerimiz ve galvaniz banyosu atıklarımız lisanslı tesislere gider. Plastik ürünlerimiz ömrü sonunda %100 geri dönüştürülebilir.",
    icon: "leaf",
  },
  {
    title: "Sahada birlikte çalışma",
    description:
      "Yeraltı sistemi kurulumundan envanter kodlamasına kadar projeyi sahada sizinle yürütürüz. Teslimat, işin bitişi değil başlangıcıdır.",
    icon: "handshake",
  },
  {
    title: "Mühendislik esnekliği",
    description:
      "Kendi kalıp ve kaynak hattımız olduğu için ölçü, hacim, kapak tipi ve renk değişikliklerini katalog dışı da olsa üretebiliriz.",
    icon: "spark",
  },
  {
    title: "Ölçülebilir sonuç",
    description:
      "Projeleri sefer sayısı, geri kazanım oranı ve bakım maliyeti gibi somut göstergelerle raporlarız. İyileşmeyi tahmin etmeyiz, ölçeriz.",
    icon: "target",
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: "1985",
    title: "Kuruluş",
    description:
      "İstanbul Topkapı'da 200 m² kapalı alanlı bir sac işleme atölyesi olarak faaliyete başladık. İlk siparişimiz bir ilçe belediyesi için 40 adet galvaniz çöp konteyneri oldu.",
  },
  {
    year: "1994",
    title: "İlk büyük belediye ihalesi",
    description:
      "Bir büyükşehir belediyesinin 600 adetlik konteyner ihalesini kazandık. Bu proje, üretimi atölye ölçeğinden fabrika ölçeğine taşıma kararımızın başlangıcı oldu.",
  },
  {
    year: "2001",
    title: "Hadımköy tesisine taşınma",
    description:
      "Üretimi Hadımköy Organize Sanayi Bölgesi'ndeki 4.000 m² kapalı alanlı yeni tesise taşıdık. İlk CNC büküm presimizi devreye aldık.",
  },
  {
    year: "2008",
    title: "Sıcak daldırma galvaniz hattı",
    description:
      "Galvaniz işlemini dışarıdan almayı bırakıp kendi sıcak daldırma hattımızı kurduk. Kaplama kalınlığı artık her partide ölçülüp kayıt altına alınıyor.",
  },
  {
    year: "2013",
    title: "Plastik konteyner üretimi",
    description:
      "HDPE enjeksiyon kalıp yatırımı ile plastik konteyner serisini ürün gamımıza ekledik. EN 840 uygunluk testlerini ilk yıl içinde tamamladık.",
  },
  {
    year: "2017",
    title: "Yeraltı konteyner sistemleri",
    description:
      "Kent estetiğini önceleyen belediyelerin talebi üzerine yeraltı toplama sistemleri geliştirdik. İlk uygulamayı bir sahil bandı projesinde hayata geçirdik.",
  },
  {
    year: "2021",
    title: "Sıfır Atık uyumlu ürün gamı",
    description:
      "Sıfır Atık Yönetmeliği ile birlikte renk kodlu ayrıştırma istasyonları ve yeraltı geri dönüşüm adalarını seri üretime aldık.",
  },
  {
    year: "2024",
    title: "12.000 m² kapalı alan",
    description:
      "Robotik kaynak hattı yatırımı ve tesis genişlemesiyle kapalı üretim alanımız 12.000 m²'ye ulaştı. 500'üncü projemizi tamamladık.",
  },
];
