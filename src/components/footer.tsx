import Link from 'next/link';
import { Star, Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 fill-primary stroke-primary" />
          <p className="text-sm text-foreground/60 font-headline">&copy; {new Date().getFullYear()} Project S.H.E. All Rights Reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Twitter"><Twitter className="h-5 w-5 text-foreground/60 hover:text-primary transition-colors" /></Link>
          <Link href="#" aria-label="Instagram"><Instagram className="h-5 w-5 text-foreground/60 hover:text-primary transition-colors" /></Link>
          <Link href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5 text-foreground/60 hover:text-primary transition-colors" /></Link>
          <Link href="#" aria-label="Facebook"><Facebook className="h-5 w-5 text-foreground/60 hover:text-primary transition-colors" /></Link>
        </div>
      </div>
    </footer>
  );
}
