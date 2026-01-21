import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/Logo.png";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Leadership", href: "/about#leadership" },
    { name: "Contact", href: "/contact" },
  ],
  projects: [
    { name: "Ongoing Projects", href: "/projects" },
    { name: "Completed", href: "/projects#completed" },
    { name: "3D Models", href: "/3d-models" },
  ],
  resources: [
    { name: "Reports", href: "/reports" },
    { name: "AGM Activities", href: "/reports#agm" },
    { name: "News", href: "/news" },
  ],
  gallery: [
    { name: "Project Images", href: "/gallery" },
    { name: "Meetings", href: "/gallery#meetings" },
    { name: "Events", href: "/gallery#events" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div
                style={{
                  backgroundImage: `url("${logo}")`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="w-12 h-12 rounded-full bg-accent flex items-center justify-center"
              >
                {/* <Zap className="w-7 h-7 text-accent-foreground" /> */}
              </div>
              <div>
                <p className="font-bold text-lg leading-tight">Maula kalika</p>
                <p className="text-xs text-primary-foreground/70">
                  Hydropower Company Ltd.
                </p>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm mb-6 max-w-sm">
              Powering Nepal, empowering the world with sustainable
              hydroelectric energy from the heart of the Himalayas.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4 text-accent" />
                <a
                  href="https://maps.app.goo.gl/34bk2BR9oLRxccyP9"
                  target="_blank"
                >
                  Kamaladi, Kathmandu
                </a>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:info@maulakalika.com">info@maulakalika.com</a>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:01-5913897">01-5913897</a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-accent">Projects</h3>
            <ul className="space-y-3">
              {footerLinks.projects.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-accent">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-accent">Gallery</h3>
            <ul className="space-y-3">
              {footerLinks.gallery.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <p className="text-sm text-primary-foreground/60 text-center">
            © 2026 Maula Kalika Hydropower Company Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
