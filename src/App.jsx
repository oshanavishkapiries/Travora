import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "./components/aceternity/resizable-navbar";
import Hero from "./components/Hero";
import Integrations from "./components/Integrations";
import FeatureSections from "./components/FeatureSections";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const navItems = [
  { name: "About", link: "#" },
  { name: "Features", link: "#features" },
  { name: "FAQs", link: "#faqs" },
];

const Logo = () => (
  <a href="#" className="relative z-20 flex items-center px-2 py-1">
    <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
  </a>
);

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar className="fixed top-0">
        {/* Desktop Navigation */}
        <NavBody>
          <Logo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-2">
            <NavbarButton
              href="https://forms.gle/1ShnRKxyeKZR7gtD6"
              target="_blank"
              rel="noopener noreferrer"
              variant="dark"
              className="rounded-full"
            >
              Join Now
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <Logo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-gray-600 hover:text-gray-900 py-2 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
            <NavbarButton
              href="https://forms.gle/1ShnRKxyeKZR7gtD6"
              target="_blank"
              rel="noopener noreferrer"
              variant="dark"
              className="w-full rounded-full"
            >
              Join Now
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <Hero />
      <Integrations />
      <FeatureSections />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
