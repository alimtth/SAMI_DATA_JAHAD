import { Head } from "next/document";
import React from "react";
import Header from "./Header";

interface IMainLayoutProps {
    children: React.ReactNode;
}

const MainLayouts = (props: IMainLayoutProps) => {
    const {children} = props;

    return(
        <>
        <Header />
        <main>
            {children}
        </main>
        
        {/* <Footer /> */}
        </>
    )
}
export default MainLayouts