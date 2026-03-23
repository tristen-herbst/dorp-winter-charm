import offerImg from "@/assets/offer-fireplace.jpg";

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
                alt="Cosy winter lounge at Dorp Hotel"
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
              The Art of<br />Staying Longer
            </h2>
            <div className="h-px w-16 bg-primary/40" />
            <div className="flex flex-col gap-4 font-sans text-base font-light leading-relaxed text-muted-foreground">
              <p>Cape Town rarely reveals itself in a hurry.</p>
              <p>
                This winter, guests who stay four nights or more between 01 May –
                31 August 2026 enjoy 20% off their best available rate.
              </p>
              <p className="font-serif italic text-foreground/70">
                Which seems only fair.
              </p>
            </div>
            <a
              href="https://direct-book.com/properties/DorpHotelBoschendalDIRECT?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=ZAR&checkInDate=2026-03-23&checkOutDate=2026-03-24&trackPage=yes"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-fit border border-primary bg-primary/10 px-8 py-3 text-xs tracking-[0.25em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
