import React from "react";

interface IMainLayoutProps {
    children: React.ReactNode;
}

const MainLayouts = (props: IMainLayoutProps) => {
    const {children} = props;

    return(
        <>
        <header className="bg-slate-400">
            <div>header</div>
        </header>
        <main>
            {children}
        </main>
        <footer className="bg-green-300">
            <div>footer</div>
        </footer>
        </>
    )
}
export default MainLayouts