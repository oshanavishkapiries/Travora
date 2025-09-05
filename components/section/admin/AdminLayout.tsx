// ==================== Admin Layout Component Start ====================
"use client";

import React, { useEffect, useState } from "react";
import { MapPin, LogOut, Loader2, Camera, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAdminLogout } from "@/services/slices/adminAuthSlice";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const navigationItems = [
  //{ name: "Home", href: "/admin", icon: Home },
  { name: "Attractions", href: "/admin/attractions", icon: MapPin },
  //{ name: "Tour Plan", href: "/admin/tours", icon: Calendar },
  { name: "Gallery", href: "/admin/gallery", icon: Camera },
  //{ name: "Users", href: "/admin/users", icon: Users },
  //{ name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const logoutMutation = useAdminLogout();

  useEffect(() => {
    const checkAuth = () => {
      if (pathname !== "/admin/login") {
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [pathname]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated && pathname !== "/admin/login") {
      router.push("/admin/login");
    }
  }, [isLoading, isAuthenticated, pathname, router]);

  // Close sidebar when route changes (mobile)
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  const handleLogout = () => {
    setIsAuthenticated(false);
    logoutMutation.mutate();
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleSidebar}
          className="p-2"
        >
          {isSidebarOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
        <h1 className="text-xl font-bold text-blue-800">TRAVORA</h1>
        <div className="w-9" /> {/* Spacer for centering */}
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/5 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="flex">
        {/* Left Sidebar */}
        <div
          className={cn(
            "w-64 bg-white shadow-lg fixed h-full z-50 transition-transform duration-300 ease-in-out",
            "lg:translate-x-0 lg:static lg:z-auto",
            "lg:h-screen", // Full height on desktop
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {/* Logo - Hidden on mobile, shown in header */}
          <div className="hidden lg:block p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-blue-800">TRAVORA</h1>
          </div>

          {/* Navigation */}
          <nav className="mt-6">
            <div className="px-4 space-y-2">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group",
                      isActive
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    )}
                    onClick={() => setIsSidebarOpen(false)} // Close sidebar on mobile when clicking nav item
                  >
                    <item.icon
                      className={cn(
                        "h-5 w-5",
                        isActive
                          ? "text-blue-700"
                          : "text-gray-400 group-hover:text-gray-600"
                      )}
                    />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Logout Button */}
          <div className="absolute bottom-6 left-4 right-4">
            <Button
              onClick={handleLogout}
              variant="outline"
              className="w-full flex items-center gap-2 text-gray-600 hover:text-red-600 hover:border-red-300"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          <main className="p-4 lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}

// ==================== Admin Layout Component End ====================
