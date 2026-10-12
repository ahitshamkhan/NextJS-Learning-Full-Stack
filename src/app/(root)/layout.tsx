import React from "react";

const RootLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <h1>NavBar (Public)</h1>
            {children}
            <h1>Footer (Public)</h1>
        </div>
    );
};

export default RootLayout;
