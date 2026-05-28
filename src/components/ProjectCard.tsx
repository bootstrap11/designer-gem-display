import type { Project } from "@/data/projects";
import { Link } from "@tanstack/react-router";

const spanClass: Record<Project["span"], string> = {
  tall: "md:row-span-2 aspect-[3/4]",
  wide: "md:col-span-2 aspect-[16/10]",
  regular: "aspect-[4/3]",
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className={`group relative block overflow-hidden rounded-2xl border border-border/40 ${spanClass[project.span]}`}
    >
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105 bg-noise"
        style={{ background: project.cover }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />

      <div className="absolute top-5 left-5 flex items-center gap-2 text-[11px] tracking-widest uppercase text-foreground/80">
        <span className="font-mono">{String(index + 1).padStart(2, "0")}</span>
        <span className="h-px w-6 bg-foreground/40" />
        <span>{project.category}</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
        <h3 className="font-serif text-3xl md:text-4xl leading-[1.05] text-balance">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-md text-pretty">
          {project.tagline}
        </p>
        <div className="mt-4 flex items-center gap-2 text-xs text-foreground/70 opacity-0 -translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <span>View project</span>
          <span aria-hidden>→</span>
        </div>
      </div>
    </Link>
  );
}
