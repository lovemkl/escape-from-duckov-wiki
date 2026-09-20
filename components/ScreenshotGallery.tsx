import Image from "next/image";
import { SCREENSHOTS } from "@/lib/site";

type Props = {
  title: string;
  hint: string;
};

export function ScreenshotGallery({ title, hint }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
        <p className="text-sm text-muted">{hint}</p>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SCREENSHOTS.map((src, i) => (
          <figure
            key={src}
            className="group relative overflow-hidden rounded-xl border border-line bg-panel"
          >
            <Image
              src={src}
              alt={`Escape From Duckov Steam screenshot ${i + 1}`}
              width={1920}
              height={1080}
              className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
