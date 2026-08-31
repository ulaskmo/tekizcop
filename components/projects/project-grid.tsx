"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

import { Lightbox } from "@/components/ui/lightbox";
import { CloseIcon, MapPinIcon, ZoomIcon } from "@/components/ui/icons";
import { projectCategories } from "@/data/projects";
import type { Project } from "@/data/types";
import { cn, formatDateTR } from "@/lib/utils";

const ALL = "Tümü";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState(ALL);
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === ALL ? projects : projects.filter((p) => p.category === filter)),
    [projects, filter],
  );

  const tabs = [ALL, ...projectCategories];

  return (
    <div>
      <div className="-mx-5 overflow-x-auto px-5 no-scrollbar lg:mx-0 lg:px-0">
        <ul className="flex w-max items-center gap-2">
          {tabs.map((tab) => {
            const isActive = tab === filter;
            return (
              <li key={tab}>
                <button
                  type="button"
                  onClick={() => setFilter(tab)}
                  aria-pressed={isActive}
                  className={cn(
                    "relative inline-flex h-10 items-center rounded-full px-4 text-sm font-medium transition-colors",
                    isActive
                      ? "text-white"
                      : "bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200",
                  )}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="project-tab"
                      className="absolute inset-0 rounded-full bg-brand-700"
                      transition={{ type: "spring", damping: 30, stiffness: 320 }}
                    />
                  ) : null}
                  <span className="relative">{tab}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <motion.ul layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.li
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{
                duration: 0.4,
                delay: Math.min(i * 0.05, 0.3),
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <button
                type="button"
                onClick={() => setOpenProject(project)}
                className="group flex h-full w-full flex-col overflow-hidden rounded-3xl border border-charcoal-200 bg-white text-left shadow-card transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-100">
                  {/* TODO: Gerçek saha fotoğrafı ile değiştirilecek (data/projects.ts). */}
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    priority={i < 3}
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
                  />
                  <div
                    className="absolute inset-0 bg-charcoal-950/0 transition-colors duration-500 group-hover:bg-charcoal-950/25"
                    aria-hidden
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-wider text-charcoal-700 shadow-sm backdrop-blur">
                    {project.category}
                  </span>
                  <span className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-charcoal-700 opacity-0 shadow-sm backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                    <ZoomIcon className="h-3.5 w-3.5" />
                    {project.images.length} görsel
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium text-charcoal-400">
                    <time dateTime={project.date}>{formatDateTR(project.date)}</time>
                  </p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-charcoal-950 transition-colors group-hover:text-brand-800">
                    {project.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-charcoal-600">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-5 text-xs text-charcoal-500">
                    <span className="font-semibold text-charcoal-700">
                      {project.client}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPinIcon className="h-3.5 w-3.5" />
                      {project.location}
                    </span>
                  </div>
                </div>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <ProjectModal
        project={openProject}
        onClose={() => setOpenProject(null)}
        onZoom={setLightboxIndex}
      />

      {openProject ? (
        <Lightbox
          images={openProject.images}
          index={lightboxIndex ?? 0}
          open={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
          caption={openProject.title}
        />
      ) : null}
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
  onZoom,
}: {
  project: Project | null;
  onClose: () => void;
  onZoom: (index: number) => void;
}) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-40 flex items-end justify-center overflow-y-auto bg-charcoal-950/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <motion.div
            className="relative w-full max-w-3xl overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Kapat"
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-charcoal-700 shadow-sm backdrop-blur transition-colors hover:bg-white hover:text-charcoal-950"
            >
              <CloseIcon className="h-5 w-5" />
            </button>

            <div className="relative aspect-[16/9] bg-charcoal-100">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                sizes="(min-width: 640px) 768px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-charcoal-500">
                <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold uppercase tracking-wider text-brand-800">
                  {project.category}
                </span>
                <time dateTime={project.date}>{formatDateTR(project.date)}</time>
                <span className="inline-flex items-center gap-1">
                  <MapPinIcon className="h-3.5 w-3.5" />
                  {project.location}
                </span>
              </div>

              <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-charcoal-950 sm:text-3xl">
                {project.title}
              </h2>
              <p className="mt-2 text-sm font-semibold text-brand-700">
                {project.client}
              </p>

              <p className="mt-5 text-[0.9375rem] leading-relaxed text-charcoal-600">
                {project.description}
              </p>

              {project.stats ? (
                <dl className="mt-7 grid gap-4 sm:grid-cols-3">
                  {project.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-charcoal-200 bg-charcoal-50 p-4"
                    >
                      <dt className="text-xs font-medium uppercase tracking-wider text-charcoal-500">
                        {stat.label}
                      </dt>
                      <dd className="mt-1.5 font-display text-lg font-bold text-charcoal-950">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : null}

              <h3 className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.16em] text-charcoal-500">
                Proje görselleri
              </h3>
              <ul className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
                {project.images.map((image, i) => (
                  <li key={image}>
                    <button
                      type="button"
                      onClick={() => onZoom(i)}
                      aria-label={`${i + 1}. görseli büyüt`}
                      className="group relative block aspect-square w-full overflow-hidden rounded-xl bg-charcoal-100"
                    >
                      <Image
                        src={image}
                        alt={`${project.title} — görsel ${i + 1}`}
                        fill
                        sizes="160px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span
                        className="absolute inset-0 grid place-items-center bg-charcoal-950/40 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        aria-hidden
                      >
                        <ZoomIcon className="h-5 w-5" />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
