import { placeholderImage } from "@/lib/utils";
import type { Product } from "./types";

/**
 * Ürün kataloğu.
 *
 * TODO: `images` alanlarındaki placeholderImage() çağrıları geçicidir.
 * Gerçek ürün fotoğrafları /public/images/urunler/<slug>-1.jpg biçiminde
 * eklendiğinde bu diziler yerel yollarla değiştirilecek, ör:
 *   images: ["/images/urunler/800-litre-galvaniz-cop-konteyneri-1.jpg", ...]
 */

/** Her ürün için tutarlı 3'lü placeholder görsel seti üretir. */
const gallery = (slug: string) => [
  placeholderImage(`tekiz-${slug}-1`, 1200, 900),
  placeholderImage(`tekiz-${slug}-2`, 1200, 900),
  placeholderImage(`tekiz-${slug}-3`, 1200, 900),
];

export const products: Product[] = [
  // ─────────────────────────── Metal Galvaniz ───────────────────────────
  {
    slug: "800-litre-galvaniz-cop-konteyneri",
    name: "800 Litre Galvaniz Çöp Konteyneri",
    code: "TK-GLV-800",
    category: "metal-galvaniz-cop-konteyneri",
    litre: 800,
    material: "Sıcak daldırma galvaniz DKP sac",
    images: gallery("800-litre-galvaniz-cop-konteyneri"),
    excerpt:
      "Belediyelerin en çok tercih ettiği standart hacim. 2 mm gövde sacı ve sıcak daldırma galvaniz kaplama ile 10 yılı aşan kullanım ömrü.",
    description: [
      "800 litre galvaniz çöp konteyneri, yoğun nüfuslu cadde ve sokaklarda günlük atık toplama için geliştirilmiş, sektörün en yaygın kullanılan modelidir. Gövdesi 2 mm kalınlığında DKP sacdan tek parça olarak preslenir; köşe birleşimleri robotik kaynak hattında sürekli kaynak ile kapatılır.",
      "Üretim sonrası konteynerin tamamı 450 °C sıcak daldırma galvaniz banyosundan geçirilir. Bu işlem, iç yüzey dâhil tüm metal aksamı ortalama 80 mikron çinko tabakası ile kaplayarak atık sızıntısı ve yağmur suyunun yol açtığı korozyonu engeller.",
      "Kapak mekanizması tek elle açılabilecek şekilde dengelenmiştir; menteşeler galvaniz pimli ve yağlamasız çalışır. Konteyner, Türkiye'de kullanılan tüm standart hidrolik kaldırma düzenekleriyle (DIN 30700 tırnak sistemi) sorunsuz çalışır.",
    ],
    features: [
      "2 mm DKP sac gövde, sürekli robotik kaynak",
      "450 °C sıcak daldırma galvaniz, ~80 mikron kaplama",
      "DIN 30700 standardı kaldırma tırnağı",
      "4 adet 200 mm çaplı, 2'si frenli poliüretan tekerlek",
      "Tek elle açılabilen dengeli galvaniz kapak",
      "Tabanda tapalı tahliye deliği",
    ],
    specs: [
      { label: "Hacim", value: "800 litre" },
      { label: "Dış ölçüler (G × D × Y)", value: "1370 × 1080 × 1250 mm" },
      { label: "Gövde sac kalınlığı", value: "2,00 mm" },
      { label: "Kapak sac kalınlığı", value: "1,20 mm" },
      { label: "Boş ağırlık", value: "108 kg" },
      { label: "Taşıma kapasitesi", value: "440 kg" },
      { label: "Yüzey işlemi", value: "Sıcak daldırma galvaniz" },
      { label: "Tekerlek", value: "4 × 200 mm poliüretan" },
      { label: "Garanti", value: "2 yıl" },
    ],
    featured: true,
  },
  {
    slug: "400-litre-galvaniz-cop-konteyneri",
    name: "400 Litre Galvaniz Çöp Konteyneri",
    code: "TK-GLV-400",
    category: "metal-galvaniz-cop-konteyneri",
    litre: 400,
    material: "Sıcak daldırma galvaniz DKP sac",
    images: gallery("400-litre-galvaniz-cop-konteyneri"),
    excerpt:
      "Dar sokaklar ve apartman girişleri için kompakt galvaniz konteyner. Az yer kaplar, 2 tekerlekli yapısıyla kolay manevra sağlar.",
    description: [
      "400 litre galvaniz çöp konteyneri, toplama aracının manevra alanının kısıtlı olduğu dar sokaklar, tarihi doku içindeki mahalleler ve orta ölçekli apartmanlar için tasarlanmıştır. 800 litre modelin dayanıklılığını daha küçük bir hacimde sunar.",
      "1,5 mm gövde sacı ve sıcak daldırma galvaniz kaplama, konteyneri dış hava koşullarına ve atık kaynaklı kimyasal etkilere karşı korur. İki tekerlekli yapısı sayesinde tek kişi tarafından kolayca yönlendirilebilir.",
    ],
    features: [
      "1,5 mm DKP sac gövde",
      "Sıcak daldırma galvaniz kaplama",
      "2 × 200 mm sabit tekerlek",
      "Dar sokaklara uygun kompakt gövde",
      "Tabanda tahliye tapası",
    ],
    specs: [
      { label: "Hacim", value: "400 litre" },
      { label: "Dış ölçüler (G × D × Y)", value: "1080 × 780 × 1030 mm" },
      { label: "Gövde sac kalınlığı", value: "1,50 mm" },
      { label: "Boş ağırlık", value: "62 kg" },
      { label: "Taşıma kapasitesi", value: "220 kg" },
      { label: "Yüzey işlemi", value: "Sıcak daldırma galvaniz" },
      { label: "Tekerlek", value: "2 × 200 mm" },
      { label: "Garanti", value: "2 yıl" },
    ],
    featured: true,
  },
  {
    slug: "1100-litre-galvaniz-cop-konteyneri",
    name: "1100 Litre Galvaniz Çöp Konteyneri",
    code: "TK-GLV-1100",
    category: "metal-galvaniz-cop-konteyneri",
    litre: 1100,
    material: "Sıcak daldırma galvaniz DKP sac",
    images: gallery("1100-litre-galvaniz-cop-konteyneri"),
    excerpt:
      "Yüksek atık hacmi olan siteler, pazar yerleri ve sanayi tesisleri için en büyük tekerlekli galvaniz model.",
    description: [
      "1100 litre galvaniz çöp konteyneri, günlük atık üretimi yüksek olan toplu konut siteleri, semt pazarları, hastane ve okul kampüsleri ile sanayi tesisleri için üretilir. Tekerlekli konteyner sınıfında en yüksek hacmi sunar.",
      "Geniş hacme rağmen taşıma güvenliği için gövde 2 mm sacdan üretilir ve alt şasi profil takviyeli olarak imal edilir. Dört tekerleğin ikisi frenli olduğundan eğimli zeminlerde kayma riski ortadan kalkar.",
      "Kapak, yağmur suyunun içeri girmesini engelleyen bindirmeli kenar tasarımına sahiptir. Talep edilmesi hâlinde gövde üzerine belediye logosu ve mahalle kodu serigrafi veya lazer kesim ile uygulanabilir.",
    ],
    features: [
      "2 mm DKP sac gövde, profil takviyeli şasi",
      "Sıcak daldırma galvaniz kaplama",
      "4 × 200 mm tekerlek (2 frenli)",
      "Bindirmeli kenarlı yağmur korumalı kapak",
      "Opsiyonel logo ve kodlama uygulaması",
      "DIN 30700 kaldırma tırnağı",
    ],
    specs: [
      { label: "Hacim", value: "1100 litre" },
      { label: "Dış ölçüler (G × D × Y)", value: "1370 × 1200 × 1450 mm" },
      { label: "Gövde sac kalınlığı", value: "2,00 mm" },
      { label: "Boş ağırlık", value: "132 kg" },
      { label: "Taşıma kapasitesi", value: "510 kg" },
      { label: "Yüzey işlemi", value: "Sıcak daldırma galvaniz" },
      { label: "Tekerlek", value: "4 × 200 mm (2 frenli)" },
      { label: "Garanti", value: "2 yıl" },
    ],
    featured: true,
  },
  {
    slug: "800-litre-boyali-cop-konteyneri",
    name: "800 Litre Boyalı Çöp Konteyneri",
    code: "TK-BYL-800",
    category: "metal-galvaniz-cop-konteyneri",
    litre: 800,
    material: "Elektrostatik toz boyalı DKP sac",
    images: gallery("800-litre-boyali-cop-konteyneri"),
    excerpt:
      "Kurumsal renk kimliğine uyum gerektiren projeler için RAL kataloğundaki her tonda elektrostatik toz boyalı konteyner.",
    description: [
      "800 litre boyalı çöp konteyneri, belediye kurumsal kimliği veya site yönetimi renk şeması ile uyumlu görünüm gerektiren projeler için üretilir. Gövde önce fosfat banyosunda yüzey hazırlığından geçirilir, ardından elektrostatik toz boya uygulanıp 200 °C fırında kürlenir.",
      "RAL kataloğundaki tüm tonlarda üretim yapılabilir. Geri dönüşüm ayrıştırma projelerinde mavi (kâğıt), yeşil (cam), sarı (plastik-metal) ve gri (evsel) renk kodlaması standart olarak sunulur.",
    ],
    features: [
      "2 mm DKP sac gövde",
      "Fosfat ön işlem + elektrostatik toz boya",
      "RAL kataloğundaki tüm renkler",
      "Renk kodlu geri dönüşüm seti uyumlu",
      "4 × 200 mm tekerlek (2 frenli)",
    ],
    specs: [
      { label: "Hacim", value: "800 litre" },
      { label: "Dış ölçüler (G × D × Y)", value: "1370 × 1080 × 1250 mm" },
      { label: "Gövde sac kalınlığı", value: "2,00 mm" },
      { label: "Boş ağırlık", value: "105 kg" },
      { label: "Taşıma kapasitesi", value: "440 kg" },
      { label: "Yüzey işlemi", value: "Elektrostatik toz boya (RAL)" },
      { label: "Tekerlek", value: "4 × 200 mm (2 frenli)" },
      { label: "Garanti", value: "2 yıl" },
    ],
  },
  {
    slug: "sicak-daldirma-galvaniz-cop-konteyneri-kapakli",
    name: "Galvaniz Çöp Konteyneri — Pedallı Kapak",
    code: "TK-GLV-800P",
    category: "metal-galvaniz-cop-konteyneri",
    litre: 800,
    material: "Sıcak daldırma galvaniz DKP sac",
    images: gallery("sicak-daldirma-galvaniz-cop-konteyneri-kapakli"),
    excerpt:
      "Hijyen önceliği olan hastane, okul ve gıda tesisleri için ayak pedalı ile temassız açılan galvaniz konteyner.",
    description: [
      "Pedallı kapak mekanizmasına sahip galvaniz çöp konteyneri, kullanıcının kapağa elle temas etmesine gerek kalmadan atık atmasını sağlar. Hastane, okul, kreş ve gıda üretim tesisleri gibi hijyen standardı yüksek alanlar için geliştirilmiştir.",
      "Pedal kolu galvaniz kaplı çelik profilden imal edilir ve 200.000 açma-kapama çevrimi test edilmiştir. Kapak yay dönüşlü olduğundan pedal bırakıldığında kendiliğinden kapanır, koku yayılımı engellenir.",
    ],
    features: [
      "Ayak pedalı ile temassız kapak açma",
      "200.000 çevrim test edilmiş mekanizma",
      "Yay dönüşlü otomatik kapanma",
      "Sıcak daldırma galvaniz kaplama",
      "Hastane ve gıda tesisi hijyen uyumu",
    ],
    specs: [
      { label: "Hacim", value: "800 litre" },
      { label: "Dış ölçüler (G × D × Y)", value: "1370 × 1180 × 1290 mm" },
      { label: "Gövde sac kalınlığı", value: "2,00 mm" },
      { label: "Boş ağırlık", value: "118 kg" },
      { label: "Mekanizma", value: "Ayak pedallı, yay dönüşlü" },
      { label: "Yüzey işlemi", value: "Sıcak daldırma galvaniz" },
      { label: "Garanti", value: "2 yıl" },
    ],
  },

  // ─────────────────────────────── Plastik ───────────────────────────────
  {
    slug: "1100-litre-plastik-cop-konteyneri",
    name: "1100 Litre Plastik Çöp Konteyneri",
    code: "TK-PLS-1100",
    category: "plastik-cop-konteyneri",
    litre: 1100,
    material: "UV katkılı HDPE",
    images: gallery("1100-litre-plastik-cop-konteyneri"),
    excerpt:
      "EN 840 sertifikalı, tek parça enjeksiyon HDPE gövde. Paslanmaz, kokuyu tutmaz ve ömrü sonunda %100 geri dönüştürülebilir.",
    description: [
      "1100 litre plastik çöp konteyneri, yüksek yoğunluklu polietilen (HDPE) hammaddenin tek seferde enjeksiyon kalıba basılmasıyla üretilir. Gövdede kaynak veya birleşim noktası bulunmadığından çatlama ve sızdırma riski ortadan kalkar.",
      "Hammaddeye eklenen UV stabilizatör, konteynerin yıllarca doğrudan güneş altında kalmasına rağmen renginin solmasını ve yapısının kırılganlaşmasını engeller. Malzeme −30 °C ile +80 °C arasında esnekliğini korur.",
      "Konteyner EN 840 standardına uygun olarak üretilir; hem tırnaklı hem tarak tipi kaldırma düzenekleriyle çalışır. Metal aksam kullanılmadığı için paslanma yaşanmaz ve konteyner basınçlı su ile kolayca yıkanabilir.",
    ],
    features: [
      "EN 840 standardına uygun üretim",
      "Tek parça enjeksiyon HDPE gövde, kaynaksız",
      "UV stabilizatör katkılı, solmaya dirençli",
      "−30 °C / +80 °C çalışma aralığı",
      "4 × 200 mm frenli tekerlek",
      "%100 geri dönüştürülebilir",
    ],
    specs: [
      { label: "Hacim", value: "1100 litre" },
      { label: "Dış ölçüler (G × D × Y)", value: "1370 × 1200 × 1470 mm" },
      { label: "Malzeme", value: "UV katkılı HDPE" },
      { label: "Boş ağırlık", value: "58 kg" },
      { label: "Taşıma kapasitesi", value: "510 kg" },
      { label: "Standart", value: "EN 840-3" },
      { label: "Tekerlek", value: "4 × 200 mm (2 frenli)" },
      { label: "Renk seçenekleri", value: "Yeşil, mavi, sarı, gri, kırmızı" },
      { label: "Garanti", value: "3 yıl" },
    ],
    featured: true,
  },
  {
    slug: "770-litre-plastik-cop-konteyneri",
    name: "770 Litre Plastik Çöp Konteyneri",
    code: "TK-PLS-770",
    category: "plastik-cop-konteyneri",
    litre: 770,
    material: "UV katkılı HDPE",
    images: gallery("770-litre-plastik-cop-konteyneri"),
    excerpt:
      "Yuvarlak kapaklı, hafif ve sessiz çalışan orta hacimli plastik konteyner. Site içi kullanım için ideal.",
    description: [
      "770 litre plastik çöp konteyneri, hacim ile manevra kolaylığı arasında dengeyi arayan toplu konut siteleri, otel ve iş merkezleri için tercih edilir. Boş ağırlığı 48 kg olduğundan tek kişi tarafından rahatça hareket ettirilebilir.",
      "Plastik gövde ve poliüretan tekerlek kombinasyonu, metal konteynerlere kıyasla belirgin şekilde sessiz çalışır; bu sayede gece yapılan toplama seferlerinde gürültü şikâyeti oluşmaz.",
    ],
    features: [
      "EN 840 uyumlu gövde",
      "Sessiz çalışan poliüretan tekerlekler",
      "Yuvarlak profilli, kolay temizlenen kapak",
      "48 kg boş ağırlık ile kolay manevra",
      "5 farklı renk seçeneği",
    ],
    specs: [
      { label: "Hacim", value: "770 litre" },
      { label: "Dış ölçüler (G × D × Y)", value: "1265 × 1075 × 1300 mm" },
      { label: "Malzeme", value: "UV katkılı HDPE" },
      { label: "Boş ağırlık", value: "48 kg" },
      { label: "Taşıma kapasitesi", value: "380 kg" },
      { label: "Standart", value: "EN 840-2" },
      { label: "Tekerlek", value: "4 × 200 mm (2 frenli)" },
      { label: "Garanti", value: "3 yıl" },
    ],
  },
  {
    slug: "240-litre-plastik-cop-konteyneri",
    name: "240 Litre Plastik Çöp Konteyneri",
    code: "TK-PLS-240",
    category: "plastik-cop-konteyneri",
    litre: 240,
    material: "UV katkılı HDPE",
    images: gallery("240-litre-plastik-cop-konteyneri"),
    excerpt:
      "Apartman, villa ve küçük işletmeler için iki tekerlekli standart kapaklı plastik konteyner.",
    description: [
      "240 litre plastik çöp konteyneri, müstakil konutlar, villa siteleri, küçük ölçekli kafe ve marketler için en yaygın kullanılan hacimdir. İki tekerlekli ve kulplu yapısı sayesinde tek elle çekilerek taşınabilir.",
      "Kapak, gövdeye tam oturan sızdırmaz profil ile üretilir; böylece koku yayılımı ve kedi-köpek müdahalesi engellenir. Tarak tipi (kam) kaldırma düzeneğine sahip toplama araçlarıyla tam uyumludur.",
    ],
    features: [
      "EN 840-1 standardına uygun",
      "2 × 200 mm kauçuk tekerlek",
      "Sızdırmaz oturan kapak profili",
      "Tarak tipi kaldırma uyumu",
      "İstiflenebilir gövde tasarımı",
    ],
    specs: [
      { label: "Hacim", value: "240 litre" },
      { label: "Dış ölçüler (G × D × Y)", value: "580 × 730 × 1080 mm" },
      { label: "Malzeme", value: "UV katkılı HDPE" },
      { label: "Boş ağırlık", value: "14 kg" },
      { label: "Taşıma kapasitesi", value: "110 kg" },
      { label: "Standart", value: "EN 840-1" },
      { label: "Tekerlek", value: "2 × 200 mm" },
      { label: "Garanti", value: "3 yıl" },
    ],
    featured: true,
  },
  {
    slug: "120-litre-plastik-cop-konteyneri",
    name: "120 Litre Plastik Çöp Konteyneri",
    code: "TK-PLS-120",
    category: "plastik-cop-konteyneri",
    litre: 120,
    material: "UV katkılı HDPE",
    images: gallery("120-litre-plastik-cop-konteyneri"),
    excerpt:
      "Tek hane ve küçük ofisler için en kompakt tekerlekli model. Dar bahçe girişlerine ve merdiven altlarına sığar.",
    description: [
      "120 litre plastik çöp konteyneri, tek haneli konutlar, küçük ofisler ve butik işletmeler için üretilen en kompakt tekerlekli modeldir. Dar bahçe kapılarından geçebilir, merdiven altı gibi kısıtlı alanlarda saklanabilir.",
      "Hafif yapısına rağmen gövde et kalınlığı yüksek tutulmuştur; dolu hâlde kaldırıldığında deformasyon yaşanmaz. Kapak menteşesi plastik gövde ile tek parça üretilir, kırılma riski minimuma indirilir.",
    ],
    features: [
      "EN 840-1 standardına uygun",
      "Dar geçitlere uygun kompakt gövde",
      "Tek parça plastik menteşe",
      "2 × 160 mm kauçuk tekerlek",
      "İstiflenebilir",
    ],
    specs: [
      { label: "Hacim", value: "120 litre" },
      { label: "Dış ölçüler (G × D × Y)", value: "480 × 550 × 940 mm" },
      { label: "Malzeme", value: "UV katkılı HDPE" },
      { label: "Boş ağırlık", value: "9 kg" },
      { label: "Taşıma kapasitesi", value: "60 kg" },
      { label: "Standart", value: "EN 840-1" },
      { label: "Tekerlek", value: "2 × 160 mm" },
      { label: "Garanti", value: "3 yıl" },
    ],
  },
  {
    slug: "400-litre-plastik-cop-konteyneri",
    name: "400 Litre Plastik Çöp Konteyneri",
    code: "TK-PLS-400",
    category: "plastik-cop-konteyneri",
    litre: 400,
    material: "UV katkılı HDPE",
    images: gallery("400-litre-plastik-cop-konteyneri"),
    excerpt:
      "Orta ölçekli apartman ve iş yerleri için dört tekerlekli, kolay yıkanabilir plastik konteyner.",
    description: [
      "400 litre plastik çöp konteyneri, 240 litrenin yetersiz kaldığı ancak 770 litrenin fazla yer kapladığı ara ihtiyaçları karşılar. Dört tekerlekli yapısı, dolu hâldeyken bile dengeli hareket sağlar.",
      "Gövde iç yüzeyinde köşe kalmayacak şekilde radyuslu üretilir; bu sayede atık artığı birikmez ve konteyner basınçlı su ile kısa sürede temizlenir.",
    ],
    features: [
      "Radyuslu iç yüzey, kolay temizlik",
      "4 tekerlekli dengeli şasi",
      "UV katkılı HDPE gövde",
      "Renk kodlu ayrıştırma uyumu",
      "%100 geri dönüştürülebilir",
    ],
    specs: [
      { label: "Hacim", value: "400 litre" },
      { label: "Dış ölçüler (G × D × Y)", value: "1070 × 720 × 1030 mm" },
      { label: "Malzeme", value: "UV katkılı HDPE" },
      { label: "Boş ağırlık", value: "27 kg" },
      { label: "Taşıma kapasitesi", value: "180 kg" },
      { label: "Standart", value: "EN 840-2" },
      { label: "Tekerlek", value: "4 × 160 mm" },
      { label: "Garanti", value: "3 yıl" },
    ],
  },

  // ─────────────────────────────── Yeraltı ───────────────────────────────
  {
    slug: "5000-litre-yeralti-cop-konteyneri",
    name: "5000 Litre Yeraltı Çöp Konteyneri",
    code: "TK-YRA-5000",
    category: "yeralti-cop-konteyneri",
    litre: 5000,
    material: "Galvaniz çelik gövde + beton kuyu",
    images: gallery("5000-litre-yeralti-cop-konteyneri"),
    excerpt:
      "Atığın %90'ı zeminin altında. Kent estetiğini korur, koku ve görüntü kirliliğini ortadan kaldırır.",
    description: [
      "5000 litre yeraltı çöp konteyneri sistemi, atık haznesinin neredeyse tamamını zemin altında konumlandırarak cadde ve meydanlarda görüntü kirliliğini ortadan kaldırır. Yüzeyde yalnızca atık atma kolonu ve platform görünür.",
      "Hazne, sıcak daldırma galvaniz çelik iskelet üzerine monte edilir ve sızdırmaz bir beton kuyu içinde çalışır. Yer altındaki sabit sıcaklık, atığın yazın hızla bozulmasını yavaşlatarak koku oluşumunu belirgin şekilde azaltır.",
      "Boşaltma işlemi vinçli araç ile yapılır: kolon hidrolik olarak yükseltilir, hazne kancadan kaldırılarak araç kasasına boşaltılır. Tek noktada 5000 litre kapasite sağlandığı için toplama sefer sayısı ve buna bağlı yakıt maliyeti düşer.",
      "Platform yüzeyi kaymaz desenli olarak üretilir; talep edilmesi hâlinde çevredeki zemin kaplaması ile uyumlu granit veya doğal taş uygulaması yapılabilir.",
    ],
    features: [
      "Atık hacminin %90'ı zemin altında",
      "Sızdırmaz beton kuyu + galvaniz iskelet",
      "Vinçli araç ile hidrolik boşaltma",
      "Kaymaz desenli yürüme platformu",
      "Opsiyonel granit/doğal taş kaplama",
      "Pedallı veya kollu atık atma kolonu",
    ],
    specs: [
      { label: "Hacim", value: "5000 litre" },
      { label: "Kuyu ölçüleri (Ø × Derinlik)", value: "2100 × 2400 mm" },
      { label: "Yüzey platformu", value: "2300 × 2300 mm" },
      { label: "Gövde malzemesi", value: "Sıcak daldırma galvaniz çelik" },
      { label: "Boşaltma", value: "Vinçli araç, hidrolik kolon" },
      { label: "Atık atma yüksekliği", value: "1150 mm" },
      { label: "Garanti", value: "3 yıl" },
    ],
    featured: true,
  },
  {
    slug: "3000-litre-yeralti-cop-konteyneri",
    name: "3000 Litre Yeraltı Çöp Konteyneri",
    code: "TK-YRA-3000",
    category: "yeralti-cop-konteyneri",
    litre: 3000,
    material: "Galvaniz çelik gövde + beton kuyu",
    images: gallery("3000-litre-yeralti-cop-konteyneri"),
    excerpt:
      "Sokak ve park içi uygulamalar için daha küçük kuyu hacmi gerektiren yeraltı sistemi.",
    description: [
      "3000 litre yeraltı çöp konteyneri, kazı derinliğinin altyapı hatları nedeniyle sınırlı olduğu sokaklarda ve orta ölçekli park alanlarında tercih edilir. 5000 litre modelin tüm avantajlarını daha küçük bir kuyu hacminde sunar.",
      "Sistem modülerdir: aynı platform hattı üzerinde evsel atık, cam, kâğıt ve plastik için ayrı ayrı 3000 litre haznelerden oluşan bir ayrıştırma adası kurulabilir.",
    ],
    features: [
      "Sığ kazı derinliği ile uygulanabilir",
      "Modüler ayrıştırma adası kurulumu",
      "Sızdırmaz beton kuyu",
      "Galvaniz çelik iskelet",
      "Vinçli araç ile boşaltma",
    ],
    specs: [
      { label: "Hacim", value: "3000 litre" },
      { label: "Kuyu ölçüleri (Ø × Derinlik)", value: "1800 × 1900 mm" },
      { label: "Yüzey platformu", value: "2000 × 2000 mm" },
      { label: "Gövde malzemesi", value: "Sıcak daldırma galvaniz çelik" },
      { label: "Boşaltma", value: "Vinçli araç, hidrolik kolon" },
      { label: "Garanti", value: "3 yıl" },
    ],
  },
  {
    slug: "yeralti-geri-donusum-adasi",
    name: "Yeraltı Geri Dönüşüm Adası (4'lü)",
    code: "TK-YRA-ADA4",
    category: "yeralti-cop-konteyneri",
    litre: 12000,
    material: "Galvaniz çelik gövde + beton kuyu",
    images: gallery("yeralti-geri-donusum-adasi"),
    excerpt:
      "Evsel atık, cam, kâğıt ve plastik için tek platformda dört ayrı yeraltı haznesi. Sıfır Atık projeleri için hazır çözüm.",
    description: [
      "Yeraltı geri dönüşüm adası, Sıfır Atık Yönetmeliği kapsamında kaynakta ayrıştırma hedefi bulunan belediyeler için geliştirilmiş tümleşik bir çözümdür. Tek bir platform hattı üzerinde evsel atık, cam, kâğıt ve plastik-metal için dört ayrı hazne bulunur.",
      "Her hazne, atık türüne göre renk kodlu kolon ve farklı geometride atma ağzı ile ayrılır: cam için yuvarlak, kâğıt için yatay yarık, plastik için geniş ağız. Bu tasarım, yanlış atık atılmasını fiziksel olarak zorlaştırır.",
      "Kolonlar üzerine atık türünü anlatan bilgilendirme grafikleri UV dayanımlı folyo ile uygulanır. Belediye kurumsal kimliği talep doğrultusunda entegre edilir.",
    ],
    features: [
      "4 × 3000 litre ayrı hazne",
      "Atık türüne göre renk kodlu kolonlar",
      "Farklı geometride atma ağızları",
      "UV dayanımlı bilgilendirme grafikleri",
      "Sıfır Atık Yönetmeliği uyumlu",
      "Tek platformda tümleşik kurulum",
    ],
    specs: [
      { label: "Toplam hacim", value: "12.000 litre (4 × 3000)" },
      { label: "Platform ölçüleri", value: "7800 × 2000 mm" },
      { label: "Kuyu derinliği", value: "1900 mm" },
      { label: "Atık türü sayısı", value: "4 (evsel, cam, kâğıt, plastik-metal)" },
      { label: "Gövde malzemesi", value: "Sıcak daldırma galvaniz çelik" },
      { label: "Garanti", value: "3 yıl" },
    ],
    featured: true,
  },

  // ───────────────────────────── Sıkıştırmalı ─────────────────────────────
  {
    slug: "8-m3-sikistirmali-cop-konteyneri",
    name: "8 m³ Sıkıştırmalı Çöp Konteyneri",
    code: "TK-SKS-8",
    category: "sikistirmali-cop-konteyneri",
    litre: 8000,
    material: "St 37 çelik konstrüksiyon",
    images: gallery("8-m3-sikistirmali-cop-konteyneri"),
    excerpt:
      "Atığı 5 kata kadar sıkıştırır, toplama sefer sayısını ve nakliye maliyetini belirgin şekilde düşürür.",
    description: [
      "8 m³ sıkıştırmalı çöp konteyneri, alışveriş merkezleri, oteller, hastaneler ve üretim tesisleri gibi yoğun atık üreten işletmeler için tasarlanmıştır. Hidrolik pres plakası, hazneye atılan atığı 5 kata kadar sıkıştırır.",
      "Sıkıştırma sayesinde 8 m³ hacimli bir konteyner, sıkıştırmasız 40 m³'e kadar atığı barındırabilir. Bu, toplama aracının aynı noktaya yaptığı sefer sayısını beşte bire indirir; nakliye maliyeti ve karbon salımı doğrudan azalır.",
      "Sistem 380 V trifaze şebeke ile çalışır, fotosel güvenlik bariyeri ve acil durdurma butonu ile donatılmıştır. Hazne tam dolduğunda sesli-ışıklı uyarı verir; opsiyonel GSM modülü doluluk bilgisini yönetim yazılımına iletir.",
    ],
    features: [
      "5:1 sıkıştırma oranı",
      "380 V trifaze hidrolik ünite",
      "Fotosel güvenlik bariyeri + acil stop",
      "Doluluk sesli-ışıklı uyarı sistemi",
      "Opsiyonel GSM doluluk takip modülü",
      "Sızdırmaz atık suyu haznesi",
    ],
    specs: [
      { label: "Hazne hacmi", value: "8 m³" },
      { label: "Sıkıştırma oranı", value: "5:1 (40 m³ eşdeğer)" },
      { label: "Dış ölçüler (U × G × Y)", value: "4200 × 2000 × 2350 mm" },
      { label: "Sıkıştırma kuvveti", value: "24 ton" },
      { label: "Motor gücü", value: "5,5 kW / 380 V" },
      { label: "Gövde malzemesi", value: "St 37 çelik, 4 mm" },
      { label: "Boş ağırlık", value: "2650 kg" },
      { label: "Garanti", value: "2 yıl" },
    ],
  },
  {
    slug: "13-m3-sikistirmali-cop-konteyneri",
    name: "13 m³ Sıkıştırmalı Çöp Konteyneri",
    code: "TK-SKS-13",
    category: "sikistirmali-cop-konteyneri",
    litre: 13000,
    material: "St 37 çelik konstrüksiyon",
    images: gallery("13-m3-sikistirmali-cop-konteyneri"),
    excerpt:
      "Organize sanayi bölgeleri ve büyük AVM'ler için yüksek kapasiteli sıkıştırmalı sistem.",
    description: [
      "13 m³ sıkıştırmalı çöp konteyneri, organize sanayi bölgeleri, büyük ölçekli alışveriş merkezleri ve lojistik depoları için üretilen yüksek kapasiteli modeldir. Sıkıştırma oranı ile birlikte 65 m³'e kadar atık hacmi barındırır.",
      "Hazne, kancalı yükleyici (hook-lift) araçlarla taşınacak şekilde standart kanca yükseklikli şasi üzerine kurulur. Tam dolu hâlde bile şasi deformasyonu yaşanmaması için ana kirişler kutu profil ile takviyelidir.",
    ],
    features: [
      "13 m³ hazne, 65 m³ eşdeğer kapasite",
      "Hook-lift araç uyumlu standart şasi",
      "Kutu profil takviyeli ana kirişler",
      "7,5 kW hidrolik güç ünitesi",
      "Uzaktan doluluk izleme hazır",
    ],
    specs: [
      { label: "Hazne hacmi", value: "13 m³" },
      { label: "Sıkıştırma oranı", value: "5:1 (65 m³ eşdeğer)" },
      { label: "Dış ölçüler (U × G × Y)", value: "5600 × 2100 × 2500 mm" },
      { label: "Sıkıştırma kuvveti", value: "32 ton" },
      { label: "Motor gücü", value: "7,5 kW / 380 V" },
      { label: "Boş ağırlık", value: "3900 kg" },
      { label: "Taşıma sistemi", value: "Hook-lift" },
      { label: "Garanti", value: "2 yıl" },
    ],
  },
  {
    slug: "karton-presi-sikistirmali-konteyner",
    name: "Karton Presi — Dikey Balya Makinesi",
    code: "TK-SKS-PRS",
    category: "sikistirmali-cop-konteyneri",
    litre: null,
    material: "St 37 çelik konstrüksiyon",
    images: gallery("karton-presi-sikistirmali-konteyner"),
    excerpt:
      "Karton, plastik ve şişe atıklarını balya hâline getirerek geri dönüşüm gelirini artırır.",
    description: [
      "Dikey balya presi, market zincirleri, kargo merkezleri ve üretim tesislerinde biriken karton kutu, streç film ve PET şişe atıklarını sıkıştırarak taşınabilir balyalara dönüştürür.",
      "Balyalanmış atık, gevşek hâlinden yaklaşık 10 kat daha az yer kaplar. Bu hem depolama alanı kazandırır hem de geri dönüşüm tesisine satış sırasında daha yüksek birim fiyat elde edilmesini sağlar.",
      "Makine tek fazlı veya trifaze seçenekleriyle sunulur. Güvenlik kapağı açıkken pres çalışmaz; kilit sistemi CE gerekliliklerine uygundur.",
    ],
    features: [
      "Karton, streç film ve PET uyumu",
      "~10:1 hacim azaltma",
      "CE uyumlu güvenlik kilidi",
      "Tek faz / trifaze seçenekleri",
      "Balya bağlama teli kılavuzu",
    ],
    specs: [
      { label: "Balya ağırlığı", value: "40 – 60 kg" },
      { label: "Balya ölçüleri", value: "800 × 600 × 700 mm" },
      { label: "Pres kuvveti", value: "10 ton" },
      { label: "Dış ölçüler (G × D × Y)", value: "900 × 750 × 2100 mm" },
      { label: "Motor gücü", value: "2,2 kW" },
      { label: "Boş ağırlık", value: "480 kg" },
      { label: "Garanti", value: "2 yıl" },
    ],
  },

  // ──────────────────────────── Geri Dönüşüm ────────────────────────────
  {
    slug: "dortlu-geri-donusum-kutusu-seti",
    name: "4'lü Geri Dönüşüm Kutusu Seti",
    code: "TK-GRD-4X60",
    category: "geri-donusum-kutusu",
    litre: 240,
    material: "Paslanmaz çelik / toz boyalı sac",
    images: gallery("dortlu-geri-donusum-kutusu-seti"),
    excerpt:
      "Kâğıt, plastik, cam ve metal için renk kodlu dört gözlü ayrıştırma istasyonu. Sıfır Atık uyumlu.",
    description: [
      "4'lü geri dönüşüm kutusu seti, Sıfır Atık Yönetmeliği kapsamında kamu binaları, okullar, plazalar ve alışveriş merkezlerinde zorunlu hâle gelen kaynakta ayrıştırma uygulaması için hazırlanmış bir istasyondur.",
      "Her göz, yönetmelikte belirtilen renk kodlamasına uygundur: mavi (kâğıt-karton), sarı (plastik), yeşil (cam), gri (metal). Atma ağızları atık türüne göre farklı geometride üretilir; kullanıcı yanlış gözü seçtiğinde atığı fiziksel olarak atamaz.",
      "Gövde paslanmaz çelik veya elektrostatik toz boyalı sac olarak seçilebilir. İç hazneler çıkarılabilir kovalar hâlindedir; temizlik personeli tek hareketle boşaltabilir.",
    ],
    features: [
      "Yönetmeliğe uygun 4 renk kodu",
      "Atık türüne özel atma ağzı geometrisi",
      "Çıkarılabilir iç kovalar",
      "Paslanmaz veya toz boyalı gövde seçeneği",
      "UV dayanımlı bilgilendirme etiketleri",
      "Duvara sabitleme aparatı",
    ],
    specs: [
      { label: "Toplam hacim", value: "240 litre (4 × 60)" },
      { label: "Dış ölçüler (G × D × Y)", value: "1200 × 400 × 1000 mm" },
      { label: "Gövde malzemesi", value: "Paslanmaz çelik / toz boyalı sac" },
      { label: "İç hazne", value: "4 × çıkarılabilir plastik kova" },
      { label: "Boş ağırlık", value: "34 kg" },
      { label: "Renk kodları", value: "Mavi, sarı, yeşil, gri" },
      { label: "Garanti", value: "2 yıl" },
    ],
    featured: true,
  },
  {
    slug: "90-litre-park-cop-kovasi",
    name: "90 Litre Park Çöp Kovası",
    code: "TK-KOV-090",
    category: "geri-donusum-kutusu",
    litre: 90,
    material: "Ahşap kaplamalı galvaniz gövde",
    images: gallery("90-litre-park-cop-kovasi"),
    excerpt:
      "Park, sahil ve yürüyüş yolları için emprenyeli ahşap kaplamalı, kül tablalı dış mekân çöp kovası.",
    description: [
      "90 litre park çöp kovası, parklar, sahil bantları, yürüyüş yolları ve meydanlarda kullanılmak üzere tasarlanmıştır. Galvaniz iç gövde, emprenye işlemi görmüş çam ahşap latalar ile kaplanarak doğal dokulu bir görünüm elde edilir.",
      "Ahşap yüzeyler su bazlı, çevre dostu ahşap koruyucu ile üç kat işlemden geçirilir; nem ve UV etkisine karşı korunur. İç hazne çıkarılabilir galvaniz kova şeklindedir.",
      "Üst kapak üzerinde paslanmaz kül tablası bulunur. Kova, zemine dübelli ayak plakası ile sabitlenir; vandalizme karşı gövde kilidi standarttır.",
    ],
    features: [
      "Emprenyeli çam ahşap kaplama",
      "Su bazlı, 3 kat koruyucu uygulama",
      "Çıkarılabilir galvaniz iç kova",
      "Paslanmaz kül tablası",
      "Zemine dübelli sabitleme",
      "Vandalizm karşıtı gövde kilidi",
    ],
    specs: [
      { label: "Hacim", value: "90 litre" },
      { label: "Dış ölçüler (Ø × Y)", value: "480 × 950 mm" },
      { label: "İç gövde", value: "Galvaniz sac, 1,2 mm" },
      { label: "Kaplama", value: "Emprenyeli çam ahşap lata" },
      { label: "Boş ağırlık", value: "26 kg" },
      { label: "Montaj", value: "Zemine dübelli ayak plakası" },
      { label: "Garanti", value: "2 yıl" },
    ],
  },
  {
    slug: "50-litre-pedalli-ic-mekan-cop-kovasi",
    name: "50 Litre Pedallı İç Mekân Çöp Kovası",
    code: "TK-KOV-050P",
    category: "geri-donusum-kutusu",
    litre: 50,
    material: "Paslanmaz çelik (AISI 304)",
    images: gallery("50-litre-pedalli-ic-mekan-cop-kovasi"),
    excerpt:
      "Ofis, hastane ve mutfaklar için AISI 304 paslanmaz, pedallı ve sessiz kapanan iç mekân kovası.",
    description: [
      "50 litre pedallı iç mekân çöp kovası, ofis mutfakları, hastane koridorları, otel katları ve profesyonel mutfaklar için üretilir. Gövde AISI 304 kalite paslanmaz çelikten imal edilir, parmak izi tutmayan fırçalanmış yüzeye sahiptir.",
      "Kapak, yavaşlatıcılı menteşe sayesinde sessiz kapanır; gece kullanımında rahatsızlık vermez. İç hazne çıkarılabilir plastik kovadır ve poşet tutucu halka ile birlikte gelir.",
    ],
    features: [
      "AISI 304 paslanmaz çelik gövde",
      "Parmak izi tutmayan fırçalı yüzey",
      "Yavaşlatıcılı sessiz kapanan kapak",
      "Çıkarılabilir iç kova + poşet tutucu",
      "Kaymaz taban lastiği",
    ],
    specs: [
      { label: "Hacim", value: "50 litre" },
      { label: "Dış ölçüler (Ø × Y)", value: "320 × 720 mm" },
      { label: "Malzeme", value: "AISI 304 paslanmaz çelik" },
      { label: "Mekanizma", value: "Ayak pedallı, yavaşlatıcılı" },
      { label: "Boş ağırlık", value: "6,4 kg" },
      { label: "Garanti", value: "2 yıl" },
    ],
  },

  // ────────────────────────── Moloz ve Hurda ──────────────────────────
  {
    slug: "12-m3-kancali-moloz-konteyneri",
    name: "12 m³ Kancalı Moloz Konteyneri",
    code: "TK-MLZ-12",
    category: "moloz-ve-hurda-konteyneri",
    litre: 12000,
    material: "St 37 çelik, 4 mm",
    images: gallery("12-m3-kancali-moloz-konteyneri"),
    excerpt:
      "İnşaat sahaları için ağır tonajlı açık kasa. Hook-lift araçlarla tek kişi tarafından yüklenip taşınabilir.",
    description: [
      "12 m³ kancalı moloz konteyneri, inşaat ve yıkım sahalarında oluşan beton, tuğla, sıva ve hurda atıklarının toplanması için üretilir. Hook-lift (kancalı yükleyici) sistemli araçlarla operatör kabinden inmeden yüklenebilir.",
      "Gövde 4 mm St 37 çelik sacdan, taban 5 mm sacdan imal edilir. Yan duvarlar dikey kutu profil ile takviyelidir; moloz boşaltımı sırasında oluşan darbeye karşı deformasyon direnci yüksektir.",
      "Arka kapak menteşeli ve mandallı olarak açılır; kepçe ile yükleme yapılabilir. Yüzey işlemi olarak kumlama sonrası iki kat epoksi astar ve son kat sanayi boyası uygulanır.",
    ],
    features: [
      "Hook-lift araç uyumlu standart kanca",
      "4 mm gövde / 5 mm taban sacı",
      "Dikey kutu profil takviyeli yan duvarlar",
      "Menteşeli, mandallı arka boşaltma kapağı",
      "Kumlama + epoksi astar + sanayi boyası",
      "İstifleme için köşe konikliği",
    ],
    specs: [
      { label: "Hacim", value: "12 m³" },
      { label: "Dış ölçüler (U × G × Y)", value: "5400 × 2300 × 1200 mm" },
      { label: "Gövde sac kalınlığı", value: "4,00 mm" },
      { label: "Taban sac kalınlığı", value: "5,00 mm" },
      { label: "Boş ağırlık", value: "1450 kg" },
      { label: "Taşıma kapasitesi", value: "12 ton" },
      { label: "Taşıma sistemi", value: "Hook-lift (kancalı)" },
      { label: "Garanti", value: "2 yıl" },
    ],
  },
  {
    slug: "7-m3-kirisli-moloz-konteyneri",
    name: "7 m³ Kirişli Moloz Konteyneri",
    code: "TK-MLZ-07",
    category: "moloz-ve-hurda-konteyneri",
    litre: 7000,
    material: "St 37 çelik, 3 mm",
    images: gallery("7-m3-kirisli-moloz-konteyneri"),
    excerpt:
      "Kirişli (kollu) sistem araçlarla çalışan orta hacimli moloz konteyneri. Şehir içi tadilat işleri için ideal.",
    description: [
      "7 m³ kirişli moloz konteyneri, şehir içi daire tadilatları, küçük yıkım işleri ve peyzaj çalışmalarında oluşan atıklar için kullanılır. Kirişli (kollu) kaldırma sistemine sahip araçlarla taşınır.",
      "Kompakt ölçüleri, konteynerin dar sokaklarda ve otopark alanlarında konumlandırılmasına imkân verir. Boş ağırlığının düşük olması, aynı araçla daha fazla faydalı yük taşınmasını sağlar.",
    ],
    features: [
      "Kirişli (kollu) araç uyumu",
      "3 mm gövde / 4 mm taban sacı",
      "Şehir içi dar alanlara uygun ölçüler",
      "Menteşeli arka kapak",
      "Kumlama + epoksi astar + sanayi boyası",
    ],
    specs: [
      { label: "Hacim", value: "7 m³" },
      { label: "Dış ölçüler (U × G × Y)", value: "3400 × 1800 × 1250 mm" },
      { label: "Gövde sac kalınlığı", value: "3,00 mm" },
      { label: "Taban sac kalınlığı", value: "4,00 mm" },
      { label: "Boş ağırlık", value: "780 kg" },
      { label: "Taşıma kapasitesi", value: "7 ton" },
      { label: "Taşıma sistemi", value: "Kirişli (kollu)" },
      { label: "Garanti", value: "2 yıl" },
    ],
  },
  {
    slug: "devirmeli-hurda-konteyneri",
    name: "Devirmeli Hurda Konteyneri",
    code: "TK-HRD-DVR",
    category: "moloz-ve-hurda-konteyneri",
    litre: 1500,
    material: "St 37 çelik, 4 mm",
    images: gallery("devirmeli-hurda-konteyneri"),
    excerpt:
      "Forklift çatalı ile taşınan ve tek hareketle devrilerek boşaltılan üretim içi hurda konteyneri.",
    description: [
      "Devirmeli hurda konteyneri, metal işleme atölyelerinde, döküm tesislerinde ve üretim hatlarında oluşan talaş, kırpıntı ve hurda parçaların toplanması için tasarlanmıştır. Forklift çatal yuvaları gövdeye entegredir.",
      "Boşaltma, konteyner kaldırıldıktan sonra kol veya halat ile tetiklenen devirme mekanizması ile yapılır; operatör araçtan inmeden hazneyi boşaltabilir. Devirme sonrası konteyner yay yardımıyla otomatik olarak yatay konuma döner.",
      "Ağır ve keskin hurda ile çalışıldığından taban sacı 5 mm olarak imal edilir ve iç yüzeye takviye kaburgalar eklenir.",
    ],
    features: [
      "Entegre forklift çatal yuvaları",
      "Kol tetiklemeli devirme mekanizması",
      "Yay dönüşlü otomatik yatay konumlanma",
      "5 mm takviye kaburgalı taban",
      "İstiflenebilir gövde",
    ],
    specs: [
      { label: "Hacim", value: "1500 litre (1,5 m³)" },
      { label: "Dış ölçüler (U × G × Y)", value: "1600 × 1250 × 1150 mm" },
      { label: "Gövde sac kalınlığı", value: "4,00 mm" },
      { label: "Taban sac kalınlığı", value: "5,00 mm" },
      { label: "Boş ağırlık", value: "310 kg" },
      { label: "Taşıma kapasitesi", value: "2000 kg" },
      { label: "Taşıma sistemi", value: "Forklift" },
      { label: "Garanti", value: "2 yıl" },
    ],
  },
];

export const productMap = new Map(products.map((p) => [p.slug, p]));

export function getProduct(slug: string) {
  return productMap.get(slug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((p) => p.category === categorySlug);
}

export function getFeaturedProducts(limit = 8) {
  const featured = products.filter((p) => p.featured);
  return (featured.length >= limit ? featured : [...featured, ...products.filter((p) => !p.featured)]).slice(0, limit);
}

/** Aynı kategoriden, verilen ürün hariç ilgili ürünleri döndürür. */
export function getRelatedProducts(product: Product, limit = 3) {
  const sameCategory = products.filter(
    (p) => p.category === product.category && p.slug !== product.slug,
  );
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

  const others = products.filter(
    (p) => p.category !== product.category && p.slug !== product.slug,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function countProductsByCategory(categorySlug: string) {
  return products.reduce((n, p) => (p.category === categorySlug ? n + 1 : n), 0);
}
