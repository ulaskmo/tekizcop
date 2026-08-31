import { Counter } from "@/components/ui/counter";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { stats } from "@/data/about";

export function StatsBar() {
  return (
    <section className="border-y border-charcoal-200 bg-charcoal-50">
      <div className="container-page py-12 lg:py-14">
        <RevealGroup className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <RevealItem key={stat.label}>
              <div className="border-l-2 border-brand-500 pl-5">
                <p className="font-display text-3xl font-extrabold tracking-tight text-charcoal-950 sm:text-4xl">
                  <Counter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    plain={stat.plain}
                  />
                </p>
                <p className="mt-2 text-sm font-medium text-charcoal-500">
                  {stat.label}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
