import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex flex-col leading-none mb-4">
              <span className="text-3xl font-display tracking-tight text-white leading-[0.85]">
                ROLL&apos;N
              </span>
              <span className="text-3xl font-display tracking-tight bg-gradient-to-r from-[#8dc63f] to-[#7ab835] bg-clip-text text-transparent leading-[0.85]">
                WRAPZ
              </span>
            </div>
            <p className="text-white/60 text-sm">
              Premium vehicle wrapping services that transform your ride into a
              masterpiece.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/gallery", label: "Gallery" },
                { href: "/services", label: "Services" },
                { href: "/team", label: "Team" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:5019459727" className="flex items-center space-x-3 text-white/60 hover:text-white transition-colors text-sm">
                  <Phone size={16} className="flex-shrink-0" />
                  <span>(501) 945-9727</span>
                </a>
              </li>
              <li>
                <a href="mailto:admin@rollnwrapz.com" className="flex items-center space-x-3 text-white/60 hover:text-white transition-colors text-sm">
                  <Mail size={16} className="flex-shrink-0" />
                  <span>admin@rollnwrapz.com</span>
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps/search/?api=1&query=4420+East+43rd+Street+North+Little+Rock+AR+72117" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-white/60 hover:text-white transition-colors text-sm">
                  <MapPin size={16} className="flex-shrink-0" />
                  <span>4420 E 43rd St, North Little Rock, AR 72117</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-4">
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-start gap-4 mb-8 md:mb-0">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#8dc63f] flex items-center justify-center transition-all touch-manipulation"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BBB + Copyright bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href="https://www.bbb.org/us/ar/north-little-rock/profile/vehicle-wrap/rolln-wrapz-llc-0935-90234378#bbbseal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] hover:border-[#8dc63f]/40 hover:bg-white/[0.07] transition-all group"
            aria-label="BBB Accredited Business"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://m.bbb.org/brand/seals/Accredited_Business_Seal_NoRating_RGB.svg?tx=w_175"
              alt="BBB Accredited Business"
              className="h-10 w-auto"
            />
          </a>

          <p className="text-white/40 text-sm text-center sm:text-right">
            &copy; {new Date().getFullYear()} ROLL&apos;N WRAPZ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
