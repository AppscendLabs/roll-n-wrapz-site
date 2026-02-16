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

        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} ROLL&apos;N WRAPZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
