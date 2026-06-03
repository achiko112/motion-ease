export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row">
        <div className="flex items-center gap-2 font-medium text-foreground">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          Motion Ease
        </div>
        <p>© {new Date().getFullYear()} Motion Ease. All rights reserved.</p>
        <a href="#top" className="transition-colors hover:text-foreground">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
