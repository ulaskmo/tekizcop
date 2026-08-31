"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "success" | "error";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const fieldClass =
  "h-12 w-full rounded-xl border border-charcoal-300 bg-white px-4 text-[0.9375rem] text-charcoal-900 placeholder:text-charcoal-400 transition-colors focus:border-brand-600 disabled:bg-charcoal-50";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  /*
   * Ürün detayından gelindiğinde mesaj alanı ilgili ürünle doldurulur.
   * Sorgu parametresi bilinçli olarak useSearchParams yerine mount sonrası
   * okunuyor; aksi hâlde form statik ön derlemeden çıkar ve ilk boyamada
   * iskelet gösterilmek zorunda kalınır.
   */
  useEffect(() => {
    const product = new URLSearchParams(window.location.search).get("urun");
    if (!product) return;

    setMessage(
      `Merhaba, "${product}" için teklif almak istiyorum.\n\nAdet: \nTeslim ili: `,
    );
  }, []);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Anahtar tanımlı değilse form demo modunda çalışır; istek gönderilmez.
    if (!siteConfig.web3formsKey) {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus("success");
      form.reset();
      setMessage("");
      return;
    }

    formData.append("access_key", siteConfig.web3formsKey);
    formData.append("subject", `Web sitesi teklif talebi — ${siteConfig.name}`);
    formData.append("from_name", siteConfig.name);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? "Form gönderilemedi.");
      }

      setStatus("success");
      form.reset();
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Beklenmeyen bir hata oluştu. Lütfen telefonla ulaşın.",
      );
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-3xl border border-brand-200 bg-brand-50 p-8 text-center sm:p-10"
        role="status"
      >
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-700 text-white">
          <CheckIcon className="h-7 w-7" strokeWidth={2.2} />
        </span>
        <h3 className="mt-6 font-display text-xl font-semibold text-brand-900">
          Talebiniz bize ulaştı
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[0.9375rem] leading-relaxed text-brand-900/75">
          Standart katalog ürünleri için teklifinizi aynı iş günü içinde
          gönderiyoruz. Acil bir durum varsa {siteConfig.phone} numaralı
          telefondan bize ulaşabilirsiniz.
        </p>
        {!siteConfig.web3formsKey ? (
          <p className="mx-auto mt-5 max-w-md rounded-xl bg-white/70 px-4 py-3 text-xs leading-relaxed text-brand-900/70">
            Not: Form şu anda demo modunda. Gerçek gönderim için
            NEXT_PUBLIC_WEB3FORMS_KEY tanımlanmalıdır.
          </p>
        ) : null}
        <Button
          variant="outline"
          className="mt-7"
          onClick={() => setStatus("idle")}
        >
          Yeni talep oluştur
        </Button>
      </motion.div>
    );
  }

  const disabled = status === "sending";

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      {/* Web3Forms bot koruması: gerçek kullanıcılar bu alanı görmez. */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        aria-hidden
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="ad-soyad"
            className="mb-2 block text-sm font-medium text-charcoal-700"
          >
            Ad Soyad <span className="text-brand-700">*</span>
          </label>
          <input
            id="ad-soyad"
            name="name"
            type="text"
            required
            autoComplete="name"
            disabled={disabled}
            placeholder="Adınız ve soyadınız"
            className={fieldClass}
          />
        </div>

        <div>
          <label
            htmlFor="telefon"
            className="mb-2 block text-sm font-medium text-charcoal-700"
          >
            Telefon <span className="text-brand-700">*</span>
          </label>
          <input
            id="telefon"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            disabled={disabled}
            placeholder="05XX XXX XX XX"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="eposta"
            className="mb-2 block text-sm font-medium text-charcoal-700"
          >
            E-posta <span className="text-brand-700">*</span>
          </label>
          <input
            id="eposta"
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={disabled}
            placeholder="ornek@kurum.gov.tr"
            className={fieldClass}
          />
        </div>

        <div>
          <label
            htmlFor="kurum"
            className="mb-2 block text-sm font-medium text-charcoal-700"
          >
            Kurum / Firma
          </label>
          <input
            id="kurum"
            name="company"
            type="text"
            autoComplete="organization"
            disabled={disabled}
            placeholder="Belediye, site yönetimi, firma"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="mesaj"
          className="mb-2 block text-sm font-medium text-charcoal-700"
        >
          Mesajınız <span className="text-brand-700">*</span>
        </label>
        <textarea
          id="mesaj"
          name="message"
          required
          rows={6}
          disabled={disabled}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ürün grubu, adet ve teslim ili bilgisini paylaşırsanız teklifi daha hızlı hazırlayabiliriz."
          className={cn(fieldClass, "h-auto resize-y py-3.5 leading-relaxed")}
        />
      </div>

      <AnimatePresence>
        {status === "error" && error ? (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            role="alert"
            className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800"
          >
            {error} Dilerseniz {siteConfig.phone} numaralı telefondan ulaşabilirsiniz.
          </motion.p>
        ) : null}
      </AnimatePresence>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-charcoal-500 sm:max-w-xs">
          Bilgileriniz yalnızca teklif hazırlamak için kullanılır, üçüncü
          taraflarla paylaşılmaz.
        </p>
        <Button type="submit" size="lg" disabled={disabled} className="group">
          {disabled ? "Gönderiliyor…" : "Teklif talebini gönder"}
          {!disabled ? (
            <ArrowRightIcon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
          ) : null}
        </Button>
      </div>
    </form>
  );
}
