import type { Reference } from "./types";

/**
 * Referans kurum listesi.
 *
 * TODO: Gerçek logolar /public/images/referanslar/<ad>.svg olarak eklendiğinde
 * her kayda `logo: "/images/referanslar/....svg"` alanı eklenecek. Logo
 * tanımlı olmayan kayıtlar arayüzde tipografik wordmark olarak gösterilir.
 */
export const references: Reference[] = [
  { name: "İstanbul Büyükşehir Belediyesi", sector: "Belediye", city: "İstanbul" },
  { name: "İzmir Büyükşehir Belediyesi", sector: "Belediye", city: "İzmir" },
  { name: "Ankara Büyükşehir Belediyesi", sector: "Belediye", city: "Ankara" },
  { name: "Kadıköy Belediyesi", sector: "Belediye", city: "İstanbul" },
  { name: "Nilüfer Belediyesi", sector: "Belediye", city: "Bursa" },
  { name: "Konyaaltı Belediyesi", sector: "Belediye", city: "Antalya" },
  { name: "Ortahisar Belediyesi", sector: "Belediye", city: "Trabzon" },
  { name: "Çankaya Belediyesi", sector: "Belediye", city: "Ankara" },
  { name: "Selçuklu Belediyesi", sector: "Belediye", city: "Konya" },
  { name: "Şahinbey Belediyesi", sector: "Belediye", city: "Gaziantep" },
  { name: "Gebze Organize Sanayi Bölgesi", sector: "Sanayi", city: "Kocaeli" },
  { name: "İTOSB", sector: "Sanayi", city: "İstanbul" },
  { name: "Mersin Uluslararası Limanı", sector: "Lojistik", city: "Mersin" },
  { name: "Panora Alışveriş Merkezi", sector: "Ticari", city: "Ankara" },
  { name: "Forum Marmara", sector: "Ticari", city: "İstanbul" },
  { name: "Anadolu Üniversitesi", sector: "Eğitim", city: "Eskişehir" },
  { name: "Ege Üniversitesi", sector: "Eğitim", city: "İzmir" },
  { name: "Acıbadem Sağlık Grubu", sector: "Sağlık", city: "İstanbul" },
  { name: "Medicana Hastaneleri", sector: "Sağlık", city: "İstanbul" },
  { name: "Rixos Hotels", sector: "Turizm", city: "Antalya" },
  { name: "Divan Grubu", sector: "Turizm", city: "İstanbul" },
  { name: "Migros Ticaret", sector: "Perakende", city: "İstanbul" },
  { name: "Ekol Lojistik", sector: "Lojistik", city: "İstanbul" },
  { name: "Çimsa Çimento", sector: "Sanayi", city: "Mersin" },
];

export const referenceSectors = Array.from(
  new Set(references.map((r) => r.sector)),
).sort((a, b) => a.localeCompare(b, "tr"));
