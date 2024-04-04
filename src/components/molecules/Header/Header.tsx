import { useEffect, useState } from "react";

//Styles
import "./Header.scss";

//Assets
import Menu from "../../../assets/icons/menu.png";
import Logo from "../../../assets/images/nutery-redi.png";
import { useStateContext } from "../../../context/ContextProvider";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const { isSmallScreen } = useStateContext();

    const optionLink = [
        { id: "1", text: "Inicio" },
        { id: "2", text: "Nosotros" },
        { id: "3", text: "Top" },
        { id: "4", text: "Servicios" },
        { id: "5", text: "Testimonios" },
        { id: "6", text: "Contacto" },
    ];

    const scrollToMyRef = (id: string) => {
        document.getElementById(`${id}`)?.scrollIntoView({
            behavior: "smooth",
        });
        setOpenMenu(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 600;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="Header_ Header">
            <div className="h_cnt_logo">
                <img src={Logo} alt="" className="h_img" />
            </div>
            {isSmallScreen ? (
                <>
                    <button
                        className="bnt_menu"
                        onClick={() => setOpenMenu(!openMenu)}
                    >
                        <img src={Menu} alt="" />
                    </button>
                </>
            ) : (
                <nav className="h_nav">
                    <ul className="h_cnt_ul">
                        {optionLink.map((_) => (
                            <li
                                className={`h_li ${
                                    scrolled ? "h_li_scroll" : ""
                                }`}
                                key={_.id}
                                onClick={() => scrollToMyRef(_.id)}
                            >
                                {_.text}
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
            {openMenu && (
                <div className="container_menu">
                    <nav className="c_nav">
                        <ul className="c_ul">
                            {optionLink.map((_) => (
                                <li
                                    key={_.id}
                                    className={`c_li ${
                                        scrolled ? "h_li_scroll" : ""
                                    }`}
                                    onClick={() => scrollToMyRef(_.id)}
                                >
                                    {_.text}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <button
                        className="btn_close_header"
                        onClick={() => setOpenMenu(false)}
                    >
                        ❌
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
