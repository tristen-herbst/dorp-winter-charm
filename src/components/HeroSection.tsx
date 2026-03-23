import heroBg from "@/assets/compound_3_x.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }} />
      
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-between px-6 py-8">
        {/* Top nav */}
        <nav className="flex w-full max-w-7xl items-center justify-between">
          <span className="font-serif text-2xl tracking-[0.3em] text-primary">
            DORP
          </span>
          <span className="text-[10px] tracking-[0.25em] text-foreground/50">
            DORP | WINTER 2026
          </span>
        </nav>

        {/* Center content */}
        <div className="flex max-w-3xl flex-col items-center gap-8 text-center">
          <h1 className="font-serif text-4xl font-medium leading-tight tracking-wide text-foreground md:text-6xl lg:text-7xl">
            Cape Town behaves differently in winter.
          </h1>

          <div className="flex flex-col gap-5 text-base font-light leading-relaxed text-foreground/70 md:text-lg">
            <p>
              The light softens. The mountain gathers clouds like theatre curtains. From Signal Hill, the view shifts between mist, winter sun, rain, then blue again.
            


            </p>

            <p className="text-foreground/80">
              Inside Dorp, everything down.
            </p>

            <div className="flex flex-col items-center gap-1.5 font-serif text-sm italic tracking-wide text-primary/90 md:text-base">
              <span>Fires are lit early, lunches linger, and dinner becomes a conversation. </span>
              
              
            </div>

            <p className="text-foreground/80">
              Winter, in other words, suits Dorp rather well.
            </p>
          </div>

          <a
            href="https://www.dorp.co.za/book"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary bg-primary/10 px-8 py-3 text-xs tracking-[0.25em] text-primary transition-all hover:bg-primary hover:text-primary-foreground">
            
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
    </section>);

};

export default HeroSection;