const testimonials = [
  {
    quote: "One of the most characterful places to stay in Cape Town.",
    source: "The Daily Telegraph",
  },
  {
    quote: "A home away from home — with considerably better art on the walls.",
    source: "VISI Magazine",
  },
  {
    quote: "Effortlessly stylish, deeply personal, and utterly unforgettable.",
    source: "Inside Guide",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="border-y border-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-primary/20">
          {testimonials.map((t) => (
            <div
              key={t.source}
              className="flex flex-col items-center gap-5 px-8 text-center"
            >
              <span className="font-serif text-2xl leading-relaxed text-primary/60">
                "
              </span>
              <p className="font-serif text-base italic leading-relaxed text-foreground/80 md:text-lg">
                {t.quote}
              </p>
              <span className="text-[11px] tracking-[0.3em] text-muted-foreground">
                — {t.source.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
