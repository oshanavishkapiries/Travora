import React from 'react'
import BottomNav from '@/components/section/homePage/BottomNav'
import Navbar from '@/components/section/homePage/Navbar';

const MainLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="mx-auto max-w-6xl flex flex-col w-full h-full">
            {/* Desktop Navbar */}
            <Navbar />
            {children}
            {/* Mobile BottomNav */}
            <BottomNav />
        </div>
    )
}

export default MainLayout