const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <span className="font-serif text-xl tracking-[0.3em] text-primary">
          DORP
        </span>
        <p className="text-xs leading-relaxed text-muted-foreground">
          24 Dorp Street, Bo-Kaap, Cape Town, South Africa
        </p>
        <div className="flex gap-6 text-xs text-muted-foreground">
          <a href="#" className="transition-colors hover:text-primary">Privacy Policy</a>
          <span className="text-border">|</span>
          <a href="#" className="transition-colors hover:text-primary">Terms</a>
        </div>
        <p className="text-[11px] text-muted-foreground/60">
          © 2026 Dorp Hotel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
