# Tekiz Çöp Konteyner — Kurumsal Web Sitesi

Galvaniz, plastik ve yeraltı çöp konteyneri üreticisi için statik kurumsal
katalog ve teklif toplama sitesi. Sepet/ödeme yoktur; amaç ürünleri sergilemek
ve iletişim formu ile WhatsApp üzerinden teklif talebi toplamaktır.

## Teknolojiler

| Katman     | Seçim                                  |
| ---------- | -------------------------------------- |
| Framework  | Next.js 14 (App Router)                |
| Dil        | TypeScript                             |
| Stil       | Tailwind CSS                           |
| Animasyon  | Framer Motion (viewport tetiklemeli)   |
| İçerik     | Yerel TS veri dosyaları + Markdown     |
| Form       | Web3Forms                              |
| Dağıtım    | Vercel                                 |

Veritabanı, CMS veya backend yoktur. Tüm içerik `data/` ve `content/`
altındaki dosyalarda tutulur; güncelleme = dosyayı düzenle + yeniden dağıt.

## Geliştirme

```bash
npm install
cp .env.example .env.local   # Web3Forms anahtarını girin (opsiyonel)
npm run dev                  # http://localhost:3000
```

```bash
npm run build   # üretim derlemesi
npm run lint    # ESLint
```

## Klasör yapısı

```
app/                 App Router sayfaları ve layout
components/
  layout/            Header, Footer, mobil menü, WhatsApp butonu
  sections/          Sayfa bölümleri (hero, istatistikler, vb.)
  ui/                Yeniden kullanılabilir parçalar (kart, başlık, lightbox)
data/                Ürün, kategori, proje, referans, belge verileri
content/news/        Markdown haber/blog yazıları
lib/                 Yardımcı fonksiyonlar
public/images/       Gerçek görseller (şu an placeholder kullanılıyor)
```

## Yapılandırma

Firma bilgileri (telefon, WhatsApp, adres, çalışma saatleri, sosyal medya,
alan adı) tek bir dosyada toplanmıştır: **`data/site.ts`**. Gerçek bilgiler
geldiğinde yalnızca bu dosyayı güncellemek yeterlidir.

## Sayfalar

| Rota                  | İçerik                                             |
| --------------------- | -------------------------------------------------- |
| `/`                   | Hero, istatistikler, öne çıkan ürünler, referanslar |
| `/urunler`            | Tüm katalog + kategori filtresi ve arama            |
| `/urunler/[category]` | Kategori bazlı ürün listesi (statik üretilir)        |
| `/urun/[slug]`        | Ürün detayı, galeri, teknik tablo, Product şeması    |
| `/projeler`           | Proje portföyü, modal + lightbox                    |
| `/foto-galeri`        | Fotoğraf galerisi, kategori filtresi, lightbox       |
| `/haberler`           | Haber listesi                                       |
| `/haber/[slug]`       | Markdown gövdeli haber detayı                        |
| `/hakkimizda`         | Şirket profili, misyon/vizyon, değerler, zaman çizelgesi |
| `/belgelerimiz`       | Kalite belgeleri                                    |
| `/referanslarimiz`    | Sektöre göre referans kurumlar                       |
| `/sss`                | Konu bazlı akordiyon + FAQPage şeması                |
| `/iletisim`           | Teklif formu, harita, LocalBusiness şeması           |

`sitemap.xml` ve `robots.txt` veri dosyalarından otomatik üretilir; yeni ürün
veya haber eklendiğinde ek bir işlem gerekmez.

## Görseller

Şu anda tüm görseller `picsum.photos` üzerinden üretilen placeholder'lardır
(`lib/utils.ts` içindeki `placeholderImage`). Gerçek fotoğraflar
`public/images/` altına eklendiğinde veri dosyalarındaki `images` alanları
yerel yollarla değiştirilir. İlgili yerlerde `TODO` notları bırakılmıştır.
