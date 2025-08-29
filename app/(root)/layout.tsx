import React from 'react'

const MainLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="mx-auto max-w-6xl flex flex-col w-full h-full">
            {children}
        </div>
    )
}

export default MainLayout