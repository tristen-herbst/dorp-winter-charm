import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="enquire" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          {/* Form */}
          <div className="flex flex-col gap-8">
            <span className="text-xs tracking-[0.35em] text-primary">
              GET IN TOUCH
            </span>
            <h2 className="font-serif text-3xl font-medium text-foreground md:text-4xl">
              Enquire About<br />Your Winter Stay
            </h2>
            <div className="h-px w-16 bg-primary/40" />

            {submitted ? (
              <div className="flex flex-col gap-4 py-8">
                <p className="font-serif text-xl text-primary">Thank you.</p>
                <p className="text-sm text-muted-foreground">
                  We've received your enquiry and will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <Input
                  placeholder="Full Name"
                  required
                  className="border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                />
                <Input
                  placeholder="Country"
                  className="border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                />
                <Textarea
                  placeholder="Your message or preferred travel dates..."
                  rows={4}
                  className="border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                />
                <button
                  type="submit"
                  className="mt-2 w-fit border border-primary bg-primary px-10 py-3.5 text-xs tracking-[0.25em] text-primary-foreground transition-all hover:bg-primary/90"
                >
                  ENQUIRE NOW
                </button>
              </form>
            )}
          </div>

          {/* Contact details */}
          <div className="flex flex-col justify-center gap-10 md:pl-8">
            <div className="flex flex-col gap-2">
              <span className="text-[11px] tracking-[0.3em] text-muted-foreground">
                ADDRESS
              </span>
              <p className="text-sm leading-relaxed text-foreground/80">
                24 Dorp Street<br />
                Bo-Kaap, Cape Town<br />
                South Africa, 8001
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[11px] tracking-[0.3em] text-muted-foreground">
                TELEPHONE
              </span>
              <p className="text-sm text-foreground/80">+27 (0)21 200 1001</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[11px] tracking-[0.3em] text-muted-foreground">
                EMAIL
              </span>
              <p className="text-sm text-foreground/80">stay@dorp.co.za</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[11px] tracking-[0.3em] text-muted-foreground">
                SOCIAL
              </span>
              <div className="flex gap-4 text-sm text-foreground/80">
                <a href="#" className="transition-colors hover:text-primary">Instagram</a>
                <a href="#" className="transition-colors hover:text-primary">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
