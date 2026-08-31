import { placeholderImage } from "@/lib/utils";
import type { GalleryPhoto } from "./types";

/**
 * Foto galeri içeriği. (Video galeri bölümü bilinçli olarak yoktur.)
 *
 * TODO: Tüm görseller placeholder'dır. Gerçek fotoğraflar
 * /public/images/galeri/<id>.jpg olarak eklenecek.
 */
const photo = (id: string, title: string, category: string): GalleryPhoto => ({
  id,
  title,
  category,
  image: placeholderImage(`tekiz-galeri-${id}`, 1400, 1050),
});

export const galleryPhotos: GalleryPhoto[] = [
  photo("uretim-01", "Sac kesim hattı", "Üretim"),
  photo("uretim-02", "CNC büküm presi", "Üretim"),
  photo("uretim-03", "Robotik kaynak istasyonu", "Üretim"),
  photo("uretim-04", "Sıcak daldırma galvaniz banyosu", "Üretim"),
  photo("uretim-05", "Elektrostatik toz boya kabini", "Üretim"),
  photo("uretim-06", "Kalite kontrol ve ölçüm", "Üretim"),
  photo("uretim-07", "HDPE enjeksiyon kalıp hattı", "Üretim"),
  photo("uretim-08", "Montaj ve tekerlek hattı", "Üretim"),
  photo("urun-01", "800 litre galvaniz konteyner", "Ürünler"),
  photo("urun-02", "1100 litre plastik konteyner serisi", "Ürünler"),
  photo("urun-03", "4'lü geri dönüşüm istasyonu", "Ürünler"),
  photo("urun-04", "Ahşap kaplamalı park çöp kovası", "Ürünler"),
  photo("urun-05", "Yeraltı konteyner atma kolonu", "Ürünler"),
  photo("urun-06", "Sıkıştırmalı ünite hidrolik grubu", "Ürünler"),
  photo("saha-01", "Yeraltı konteyner kuyu kazısı", "Saha"),
  photo("saha-02", "Vinçli araç ile hazne yerleştirme", "Saha"),
  photo("saha-03", "Platform granit kaplama uygulaması", "Saha"),
  photo("saha-04", "Sahil bandı kurulum çalışması", "Saha"),
  photo("saha-05", "Sıkıştırmalı ünite devreye alma", "Saha"),
  photo("saha-06", "Park kovası zemin sabitleme", "Saha"),
  photo("tesis-01", "Hadımköy üretim tesisi girişi", "Tesis"),
  photo("tesis-02", "Hammadde sac stok sahası", "Tesis"),
  photo("tesis-03", "Sevkiyat ve yükleme alanı", "Tesis"),
  photo("tesis-04", "Ürün teşhir alanı", "Tesis"),
];

export const galleryCategories = Array.from(
  new Set(galleryPhotos.map((p) => p.category)),
);
