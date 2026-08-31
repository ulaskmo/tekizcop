import { placeholderImage } from "@/lib/utils";
import type { Certificate } from "./types";

/**
 * Kalite belgeleri ve sertifikalar.
 *
 * TODO: `image` alanları placeholder'dır. Belgelerin taranmış görselleri
 * /public/images/belgeler/<slug>.jpg olarak eklenecek.
 */
export const certificates: Certificate[] = [
  {
    slug: "iso-9001",
    title: "ISO 9001:2015 Kalite Yönetim Sistemi",
    issuer: "TÜRKAK akrediteli belgelendirme kuruluşu",
    year: "2023",
    image: placeholderImage("tekiz-belge-iso9001", 900, 1250),
    description:
      "Hammadde girişinden sevkiyata kadar tüm üretim süreçlerinin tanımlı, ölçülebilir ve izlenebilir olduğunu belgeler. Her partide kaynak dikişi ve galvaniz kalınlığı kaydı tutulur.",
  },
  {
    slug: "iso-14001",
    title: "ISO 14001:2015 Çevre Yönetim Sistemi",
    issuer: "TÜRKAK akrediteli belgelendirme kuruluşu",
    year: "2023",
    image: placeholderImage("tekiz-belge-iso14001", 900, 1250),
    description:
      "Üretim tesisinde su, enerji ve hammadde tüketiminin izlendiğini; sac fireleri ile galvaniz banyosu atıklarının lisanslı tesislere yönlendirildiğini gösterir.",
  },
  {
    slug: "iso-45001",
    title: "ISO 45001:2018 İş Sağlığı ve Güvenliği",
    issuer: "TÜRKAK akrediteli belgelendirme kuruluşu",
    year: "2023",
    image: placeholderImage("tekiz-belge-iso45001", 900, 1250),
    description:
      "Kaynak, pres ve galvaniz hatlarında risk değerlendirmelerinin yapıldığını, koruyucu donanım kullanımının ve periyodik sağlık taramalarının sistematik olarak yürütüldüğünü belgeler.",
  },
  {
    slug: "ce-uygunluk",
    title: "CE Uygunluk Beyanı",
    issuer: "Avrupa Birliği direktifleri",
    year: "2024",
    image: placeholderImage("tekiz-belge-ce", 900, 1250),
    description:
      "Sıkıştırmalı konteyner ve balya presi ürün gruplarının Makine Emniyeti Yönetmeliği ile Alçak Gerilim Yönetmeliği gerekliliklerini karşıladığını gösterir.",
  },
  {
    slug: "en-840",
    title: "EN 840 Ürün Uygunluk Raporu",
    issuer: "Akredite bağımsız test laboratuvarı",
    year: "2024",
    image: placeholderImage("tekiz-belge-en840", 900, 1250),
    description:
      "Tekerlekli konteyner serisinin boyut, kaldırma düzeneği uyumu, dayanım ve yükleme testlerini EN 840 standardına göre geçtiğini kayıt altına alır.",
  },
  {
    slug: "tse-hizmet-yeterlilik",
    title: "TSE Hizmet Yeterlilik Belgesi",
    issuer: "Türk Standardları Enstitüsü",
    year: "2024",
    image: placeholderImage("tekiz-belge-tse", 900, 1250),
    description:
      "Satış sonrası kurulum, bakım ve yedek parça hizmetlerinin TSE tarafından belirlenen yeterlilik kriterlerini karşıladığını belgeler.",
  },
  {
    slug: "sanayi-sicil",
    title: "Sanayi Sicil Belgesi",
    issuer: "T.C. Sanayi ve Teknoloji Bakanlığı",
    year: "2024",
    image: placeholderImage("tekiz-belge-sanayi-sicil", 900, 1250),
    description:
      "Firmanın kendi tesisinde imalat yaptığını resmî olarak tescil eder; kamu ihalelerinde yerli üretici statüsünün dayanağıdır.",
  },
  {
    slug: "yerli-mali-belgesi",
    title: "Yerli Malı Belgesi",
    issuer: "İstanbul Sanayi Odası",
    year: "2024",
    image: placeholderImage("tekiz-belge-yerli-mali", 900, 1250),
    description:
      "Ürünlerin yerli katkı oranının mevzuatta belirlenen eşiğin üzerinde olduğunu; kamu alımlarında yerli malı fiyat avantajından yararlanabildiğini gösterir.",
  },
];

export function getCertificate(slug: string) {
  return certificates.find((c) => c.slug === slug);
}
