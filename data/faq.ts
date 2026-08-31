import type { FaqItem } from "./types";

/** TODO: Gerçek satış ve teknik ekip yanıtları ile gözden geçirilecek. */
export const faqItems: FaqItem[] = [
  {
    topic: "Sipariş ve Teklif",
    question: "Minimum sipariş adediniz var mı?",
    answer:
      "Tekerlekli konteyner gruplarında minimum sipariş adedi 10'dur. Sıkıştırmalı sistemler, yeraltı konteynerleri ve özel ölçü imalatlarda adet sınırı bulunmaz; tek üniteli siparişler de kabul edilir. Belediye ve kurumsal alımlarda kademeli miktar iskontosu uygulanır.",
  },
  {
    topic: "Sipariş ve Teklif",
    question: "Teklif almak için hangi bilgilere ihtiyaç duyuyorsunuz?",
    answer:
      "Ürün grubu, hacim, adet, teslim edilecek il ve talep edilen teslim tarihi bilgileri fiyat çalışması için yeterlidir. Renk, logo baskısı, özel ölçü veya kilit gibi ek talepleriniz varsa bunları da belirtmenizi rica ederiz. Teklif taleplerini iletişim formu, telefon veya WhatsApp üzerinden iletebilirsiniz.",
  },
  {
    topic: "Sipariş ve Teklif",
    question: "Teklifim ne kadar sürede hazırlanır?",
    answer:
      "Standart katalog ürünleri için teklifler aynı iş günü içinde iletilir. Özel ölçü imalat, yeraltı sistemi ve sıkıştırmalı ünite taleplerinde teknik çalışma gerektiğinden süre 2–3 iş gününü bulabilir.",
  },
  {
    topic: "Üretim ve Teslimat",
    question: "Üretim ve teslim süresi ne kadar?",
    answer:
      "Stokta bulunan standart modellerde teslimat 3–5 iş günüdür. Sipariş üzerine üretimde adete bağlı olarak 10–20 iş günü, yeraltı konteyner sistemlerinde saha keşfi ve kazı planlaması dâhil 30–45 gün öngörülür. Kesin süre teklifinizde yazılı olarak belirtilir.",
  },
  {
    topic: "Üretim ve Teslimat",
    question: "Türkiye'nin her yerine sevkiyat yapıyor musunuz?",
    answer:
      "Evet, 81 ilin tamamına sevkiyat yapıyoruz. Nakliye, anlaşmalı lojistik firmalarımız üzerinden organize edilir ve teklifte ayrı satır olarak gösterilir. Belirli adedin üzerindeki siparişlerde nakliye tarafımızdan karşılanır.",
  },
  {
    topic: "Üretim ve Teslimat",
    question: "Kurulum ve montaj hizmeti veriyor musunuz?",
    answer:
      "Tekerlekli konteynerler montajlı olarak sevk edilir, ek işlem gerektirmez. Yeraltı konteyner sistemleri, sıkıştırmalı üniteler ve zemine sabitlenen park kovaları için kurulum ekibimiz sahada çalışır. Yeraltı sistemlerinde kazı ve beton kuyu imalatı da hizmet kapsamına dâhil edilebilir.",
  },
  {
    topic: "Ürün ve Teknik",
    question: "Galvaniz ile plastik konteyner arasında nasıl seçim yapmalıyım?",
    answer:
      "Galvaniz konteynerler darbeye ve yüksek sıcaklığa daha dayanıklıdır; yoğun kullanılan cadde ve sanayi bölgeleri için uygundur. Plastik konteynerler ise hafif, sessiz ve korozyona tamamen kapalıdır; nem oranı yüksek kıyı bölgelerinde ve gece toplama yapılan yerleşim alanlarında öne çıkar. Kullanım yoğunluğunuzu ve iklim koşullarınızı paylaşırsanız teknik ekibimiz öneride bulunur.",
  },
  {
    topic: "Ürün ve Teknik",
    question: "Konteynerler mevcut toplama araçlarımızla uyumlu mu?",
    answer:
      "Tüm tekerlekli modellerimiz DIN 30700 tırnak sistemi ve EN 840 tarak (kam) tipi kaldırma düzeneklerine uygun üretilir; Türkiye'de kullanılan hidrolik yükleyicilerin tamamıyla çalışır. Araç filonuzun marka ve modelini iletmeniz hâlinde uyumluluğu sipariş öncesinde yazılı olarak teyit ediyoruz.",
  },
  {
    topic: "Ürün ve Teknik",
    question: "Özel ölçü ve renkte üretim yapıyor musunuz?",
    answer:
      "Evet. Kendi kalıp ve kaynak hattımızda ürettiğimiz için ölçü, hacim ve kapak tipi değişiklikleri yapabiliyoruz. Boyalı modellerde RAL kataloğundaki tüm renkler uygulanabilir. Belediye logosu ve envanter kodlaması serigrafi, folyo veya lazer kesim ile işlenir.",
  },
  {
    topic: "Ürün ve Teknik",
    question: "Sıcak daldırma galvaniz ile boyalı ürün arasındaki fark nedir?",
    answer:
      "Sıcak daldırma galvanizde konteyner 450 °C erimiş çinko banyosuna daldırılır; iç yüzey ve kaynak dikişleri dâhil tüm metal, yaklaşık 80 mikron çinko ile kaplanır. Bu, çizilme durumunda bile korozyonu durdurur. Boyalı üründe koruma yüzeyseldir ancak renk esnekliği sağlar. Uzun ömür önceliğinizse galvaniz, kurumsal renk kimliği önceliğinizse boyalı model önerilir.",
  },
  {
    topic: "Garanti ve Servis",
    question: "Ürünleriniz kaç yıl garantili?",
    answer:
      "Galvaniz ve boyalı metal ürünlerde 2 yıl, plastik konteynerlerde 3 yıl, yeraltı sistemlerinde 3 yıl imalat hatalarına karşı garanti verilir. Sıkıştırmalı sistemlerin hidrolik ve elektrik aksamı 2 yıl garanti kapsamındadır. Garanti, hatalı kullanım ve kasıtlı hasarı kapsamaz.",
  },
  {
    topic: "Garanti ve Servis",
    question: "Yedek parça temin edebiliyor muyuz?",
    answer:
      "Tekerlek, menteşe, pedal mekanizması, kapak ve kilit gibi tüm hareketli parçalar için 10 yıl yedek parça garantisi veriyoruz. Yedek parça talepleri stoktan aynı hafta içinde sevk edilir.",
  },
  {
    topic: "Garanti ve Servis",
    question: "Bakım hizmeti sunuyor musunuz?",
    answer:
      "Sıkıştırmalı sistemler ve yeraltı konteynerleri için yıllık periyodik bakım sözleşmesi sunuyoruz. Kapsam; hidrolik yağ ve filtre değişimi, mekanizma kontrolü, elektrik panosu testi ve raporlamayı içerir.",
  },
  {
    topic: "Kurumsal",
    question: "Kamu ihalelerine katılabiliyor musunuz?",
    answer:
      "Evet. Sanayi Sicil Belgesi, Yerli Malı Belgesi, ISO 9001, ISO 14001, ISO 45001 ve TSE Hizmet Yeterlilik Belgelerimiz güncel olup ihale dosyalarında kullanılmaya hazırdır. Belgelerin tamamını Belgelerimiz sayfasından inceleyebilirsiniz.",
  },
  {
    topic: "Kurumsal",
    question: "Ödeme koşullarınız nasıl?",
    answer:
      "Kurumsal ve kamu alımlarında sipariş onayında peşinat, teslimde bakiye şeklinde çalışıyoruz. Uzun vadeli çerçeve anlaşmalarda ödeme planı karşılıklı görüşme ile belirlenir. Ayrıntılar teklif belgesinde yazılı olarak sunulur.",
  },
];

export const faqTopics = Array.from(new Set(faqItems.map((f) => f.topic)));
