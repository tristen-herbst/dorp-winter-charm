import day1Img from "@/assets/day1-arrive.jpg";
import day2Img from "@/assets/day2-wander.jpg";
import day3Img from "@/assets/day3-winelands.jpg";
import day4Img from "@/assets/day4-relax.jpg";
import oneMoreImg from "@/assets/one-more-night.jpg";

const days = [
  {
    image: day1Img,
    title: "Day One — Arrive Above the City",
    desc: "Arrive at Dorp Hotel and settle into the hotel. Spend the afternoon taking in the view as the light changes across Table Mountain and the city below. Dinner is unhurried. The first evening often becomes the beginning of a conversation.",
    tall: true,
  },
  {
    image: day2Img,
    title: "Day Two — Wander Cape Town",
    desc: "Take the morning slowly before heading into the city. Explore the colourful streets of Bo-Kaap, visit galleries along Bree Street, or explore the V&A Waterfront. Return to Dorp before sunset — a good time to watch the clouds gather over the mountain.",
    tall: false,
  },
  {
    image: day3Img,
    title: "Day Three — The Winelands",
    desc: "Winter is a beautiful time to explore the Cape's wine country. Drive through the valleys around Franschhoek and Stellenbosch. Guests may wish to stop at our sister property, Boschendal Wine Estate, for wine tastings, a farm lunch, or simply an afternoon among the vineyards. Return to the hotel in time for dinner and a warm evening indoors.",
    tall: false,
  },
  {
    image: day4Img,
    title: "Day Four — The Luxury of Doing Very Little",
    desc: "By the fourth day, many guests discover something unexpected. They are quite happy staying exactly where they are. A massage in the treatment room. A chair by the window. The weather moving slowly across the city. Some would argue this is the best part of the visit.",
    tall: true,
  },
  {
    image: oneMoreImg,
    title: "And Perhaps One More Night",
    desc: "Cape Town rarely reveals itself in a hurry. Which is why guests who stay a little longer often find the city becomes even more interesting.",
    tall: false,
  },
];

const ItinerarySection = () => {
  return (
    <section id="winter-stay" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 flex flex-col items-center gap-5 text-center">
          <span className="text-xs tracking-[0.35em] text-primary">
            A WINTER STAY
          </span>
          <h2 className="font-serif text-3xl font-medium text-foreground md:text-4xl lg:text-5xl">
            A Winter Rhythm
          </h2>
          <div className="h-px w-16 bg-primary/40" />
          <p className="max-w-xl font-sans text-base font-light leading-relaxed text-muted-foreground">
            Guests often arrive intending to explore Cape Town quickly. Then
            usually end up slowing down. Here is how a few winter days might
            unfold.
          </p>
        </div>

        {/* Mobile: sequential order */}
        <div className="flex flex-col gap-6 md:hidden">
          {days.map((day, i) => (
            <DayTile key={i} day={day} className={day.tall ? "aspect-[3/4]" : "aspect-[4/3]"} />
          ))}
        </div>

        {/* Desktop: staggered 2-column masonry */}
        <div className="hidden gap-8 md:grid md:grid-cols-2">
          <div className="flex flex-col gap-8">
            <DayTile day={days[0]} className="aspect-[3/4]" />
            <DayTile day={days[2]} className="aspect-[4/3]" />
            <DayTile day={days[4]} className="aspect-[3/2]" />
          </div>
          <div className="flex flex-col gap-8 md:mt-24">
            <DayTile day={days[1]} className="aspect-[4/3]" />
            <DayTile day={days[3]} className="aspect-[3/4]" />
          </div>
        </div>
      </div>
    </section>
  );
};

const DayTile = ({
  day,
  className = "",
}: {
  day: (typeof days)[0];
  className?: string;
}) => {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <img
        src={day.image}
        alt={day.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-background/20" />
      <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
        <h3 className="mb-2 font-serif text-xl text-foreground md:text-2xl">
          {day.title}
        </h3>
        <p className="max-w-md text-sm font-light leading-relaxed text-foreground/70">
          {day.desc}
        </p>
      </div>
    </div>
  );
};

export default ItinerarySection;
