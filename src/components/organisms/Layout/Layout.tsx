import React from "react";
import Header from "../../molecules/Header/Header";
import Footer from "../../molecules/Footer/Footer";

//Style
import "./Layout.scss";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="Layout">
            <Header />
            <main className="">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
