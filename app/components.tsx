import Link from "next/link";
import { navItems } from "./data";

export function Header() {
  return <header className="siteHeader"><Link className="logo" href="/"><span>CG</span><b>CHAITANYA</b></Link><nav>{navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav><Link className="connect" href="/contact">Let&apos;s Connect</Link></header>;
}

export function Footer() {
  return <footer className="footer"><div><Link className="logo" href="/"><span>CG</span><b>CHAITANYA</b></Link><p>Future Artificial Intelligence Research Engineer (AIRE)</p></div><p>Building intelligent systems, products and technologies that create meaningful impact.</p><p>© 2024 Chaitanya. All rights reserved.</p><Link className="top" href="#top">↑</Link></footer>;
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <section className="pageHero"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{children}</p></section>;
}

export function ArtCard({ type = "city", label }: { type?: string; label?: string }) {
  return <div className={`art ${type}`}><span>{label}</span></div>;
}
