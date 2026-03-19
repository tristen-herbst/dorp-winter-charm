import heroBg from "@/assets/compound_3_x.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-between px-6 py-8">
        {/* Top nav */}
        <nav className="flex w-full max-w-7xl items-center justify-between">
          <span className="font-serif text-2xl tracking-[0.3em] text-primary">
            DORP
          </span>
          <span className="text-[10px] tracking-[0.25em] text-foreground/50">
            DORP HOTEL | WINTER 2026
          </span>
        </nav>

        {/* Center content */}
        <div className="flex max-w-3xl flex-col items-center gap-8 text-center">
          <h1 className="font-serif text-4xl font-medium leading-tight tracking-wide text-foreground md:text-6xl lg:text-7xl">
            Cape Town behaves differently in winter.
          </h1>

          <div className="flex flex-col gap-5 text-base font-light leading-relaxed text-foreground/70 md:text-lg">
            <p>
              The light softens. The mountain gathers clouds like theatre
              curtains. The city slows down slightly. From the slopes of Signal
              Hill, the view becomes even more dramatic — a shifting stage of
              mist, warm winter sun, rain and sudden blue skies.
            </p>

            <p className="text-foreground/80">
              Inside Dorp, winter has its own rhythm.
            </p>

            <div className="flex flex-col items-center gap-1.5 font-serif text-sm italic tracking-wide text-primary/90 md:text-base">
              <span>Fires are lit earlier.</span>
              <span>Lunch lingers longer.</span>
              <span>Dinner tends to become a conversation.</span>
            </div>

            <p className="text-foreground/80">
              Winter, in other words, suits Dorp rather well.
            </p>
          </div>
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
