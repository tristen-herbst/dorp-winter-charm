import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-between px-6 py-8">
        {/* Top nav */}
        <nav className="flex w-full max-w-7xl items-center justify-between">
          <span className="font-serif text-2xl tracking-[0.3em] text-primary">
            DORP
          </span>
          <a
            href="#enquire"
            className="text-xs tracking-[0.2em] text-foreground/70 transition-colors hover:text-primary"
          >
            ENQUIRE
          </a>
        </nav>

        {/* Center content */}
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-xs tracking-[0.35em] text-primary/80">
            WINTER SPECIAL
          </span>
          <h1 className="font-serif text-5xl font-medium leading-tight tracking-wide text-foreground md:text-7xl lg:text-8xl">
            Winter at Dorp
          </h1>
          <p className="max-w-md font-sans text-lg font-light leading-relaxed text-foreground/70 md:text-xl">
            Enjoy 20% Off a 4-Night Stay
          </p>
          <p className="text-sm tracking-[0.2em] text-muted-foreground">
            1 MAY — 30 SEPTEMBER
          </p>
          <a
            href="#enquire"
            className="mt-4 border border-primary bg-primary/10 px-10 py-3.5 text-xs tracking-[0.25em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            BOOK NOW
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] text-muted-foreground">
            SCROLL
          </span>
          <div className="h-8 w-px bg-primary/40" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
