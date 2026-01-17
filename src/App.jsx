import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
import PrivacyPolicy from "./components/PrivacyPolicy";

const navItems = [
  { name: "About", link: "#" },
  { name: "Features", link: "#features" },
  { name: "FAQs", link: "#faqs" },
];

const Logo = () => (
  <Link to="/" className="relative z-20 flex items-center px-2 py-1">
    <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
  </Link>
);

function HomePage({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  return (
    <>
      <Hero />
      <Integrations />
      <FeatureSections />
      <FAQ />
      <Footer />
    </>
  );
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <BrowserRouter>
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

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
            }
          />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
