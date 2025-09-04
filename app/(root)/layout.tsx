import Footer from "@/components/common/Footer";
import React from "react";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      {/* Navbar added to layout */}
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
import Navbar from "@/components/section/home/Navbar";
