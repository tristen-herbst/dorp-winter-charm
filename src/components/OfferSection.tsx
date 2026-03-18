import offerImg from "@/assets/offer-detail.jpg";

const OfferSection = () => {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden">
              <img
                src={offerImg}
                alt="Cozy winter suite at Dorp Hotel"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 border border-primary/20 md:block" />
          </div>

          {/* Copy */}
          <div className="flex flex-col gap-8">
            <span className="text-xs tracking-[0.35em] text-primary">
              THE OFFER
            </span>
            <h2 className="font-serif text-3xl font-medium leading-snug text-foreground md:text-4xl lg:text-5xl">
              A Season of<br />Quiet Luxury
            </h2>
            <div className="h-px w-16 bg-primary/40" />
            <p className="font-sans text-base font-light leading-relaxed text-muted-foreground">
              Cape Town in winter is a revelation — misty mornings on Signal Hill, 
              crackling fires in heritage rooms, and the city bathed in golden afternoon light. 
              This is Dorp at its most intimate.
            </p>
            <ul className="flex flex-col gap-4 text-sm text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>Minimum 4-night stay required</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>20% discount on our best available rate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>Valid 1 May – 30 September 2025</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>Book direct for the best price</span>
              </li>
            </ul>
            <a
              href="#enquire"
              className="mt-2 w-fit border border-primary bg-primary/10 px-8 py-3 text-xs tracking-[0.25em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              ENQUIRE NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
