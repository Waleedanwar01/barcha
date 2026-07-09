import Link from "next/link";
import { getServiceIcon } from "./service-icons";

export default function ServiceCard({ service }) {
  const iconData = getServiceIcon(service.slug);

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#0a1120] p-7 transition duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:bg-[#0f1b30]"
    >
      <div className="flex items-start justify-between gap-4">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 transition-transform duration-300 group-hover:scale-105"
          style={{ backgroundColor: iconData ? `${iconData.color}1A` : undefined }}
        >
          {iconData ? (
            iconData.icon
          ) : (
            <span className="text-sm font-bold uppercase tracking-[0.24em] text-white">
              {service.title
                .split(" ")
                .slice(0, 2)
                .map((part) => part[0])
                .join("")}
            </span>
          )}
        </div>
        <span className="shrink-0 text-right text-xs uppercase tracking-[0.22em] text-white/35">
          {service.category}
        </span>
      </div>

      <div className="mt-6 space-y-3">
        <h3 className="font-heading text-2xl font-bold text-white">{service.title}</h3>
        <p className="text-sm leading-7 text-white/65">{service.short}</p>
      </div>

      <div className="mt-6 space-y-2">
        {service.outcomes.map((item) => (
          <div key={item} className="flex items-center gap-3 text-sm text-white/70">
            <span className="h-2 w-2 shrink-0 rounded-full bg-white/70" />
            {item}
          </div>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-2 pt-8 text-sm font-semibold uppercase tracking-[0.2em] text-white">
        Explore service
        <span className="transition duration-300 group-hover:translate-x-1">+</span>
      </div>
    </Link>
  );
}
