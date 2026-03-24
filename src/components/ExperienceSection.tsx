import roomsImg from "@/assets/rooms-real.jpg";
import diningImg from "@/assets/dining-real.jpg";
import gardensImg from "@/assets/gardens-real.jpg";

const experiences = [
  {
    image: roomsImg,
    title: "Rooms & Suites",
    desc: "Each space uniquely curated with art, antiques, and eclectic charm.",
    offset: "md:mt-0",
  },
  {
    image: diningImg,
    title: "Dining",
    desc: "Home-style dishes, rich and comforting, enjoyed against sweeping city views.",
    offset: "md:mt-16",
  },
  {
    image: gardensImg,
    title: "Gardens & Views",
    desc: "Signal Hill, Bo-Kaap colours, and lush indigenous gardens.",
    offset: "md:mt-8",
  },
];

const ExperienceSection = () => {
  return (
    <section className="bg-secondary/30 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <span className="text-xs tracking-[0.35em] text-primary">
            THE EXPERIENCE
          </span>
          <h2 className="font-serif text-3xl font-medium text-foreground md:text-4xl lg:text-5xl">
            Discover Dorp
          </h2>
          <div className="h-px w-16 bg-primary/40" />
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className={`group flex flex-col gap-5 ${exp.offset}`}
            >
              <div className="overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-2 px-1">
                <h3 className="font-serif text-xl text-foreground">
                  {exp.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-muted-foreground">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
