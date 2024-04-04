import { FormEvent } from "react";
import { NavLink } from "react-router-dom";

// Styles
import "./Footer.scss";

//Assets
import Facebook from "../../../assets/icons/facebook.png";
import Instagram from "../../../assets/icons/instagram.png";
import Linkedin from "../../../assets/icons/linkedin.png";
import Phone from "../../../assets/icons/telefono.png";
import Email from "../../../assets/icons/email.png";
import Location from "../../../assets/icons/ubication.png";

//Components
import Input from "../../atoms/Input/Input";

//Context
import { useStateContext } from "../../../context/ContextProvider";

const Footer = () => {
    const network = [
        { id: 1, icon: Facebook, url: "#" },
        { id: 2, icon: Instagram, url: "#" },
        { id: 3, icon: Linkedin, url: "#" },
    ];

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const { setFaq, setPolPriv, setAvisoLegal } = useStateContext();

    const handleOption = (id: number) => {
        switch (id) {
            case 1:
                setFaq(true);
                break;
            case 2:
                setPolPriv(true);
                break;
            case 3:
                setAvisoLegal(true);
                break;
            default:
                break;
        }
    };

    const optionHelp = [
        { id: 1, text: "FAQ" },
        { id: 2, text: "Política de Privacidad" },
        { id: 3, text: "Aviso Legal" },
    ];

    const currentYear = new Date().getFullYear();

    const datasContact = [
        { id: 1, text: "nartury@example.com", icon: Email },
        { id: 2, text: "33 33 33 33 33", icon: Phone },
        { id: 3, text: "Jalisco, México", icon: Location },
    ];

    return (
        <footer className="Footer">
            <div className="container_footer">
                <div className="informationen">
                    <div className="cnt_help">
                        <h2>Ayuda e información</h2>
                        <ul className="cnt_info">
                            {optionHelp.map((_, idx) => (
                                <li key={idx} className="_li">
                                    <button onClick={() => handleOption(_.id)}>
                                        {_.text}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="datas_cont">
                    <h2>Contáctanos</h2>
                    <div className="cnt_dat">
                        {datasContact.map((_, idx) => (
                            <div key={idx} className="item">
                                <img src={_.icon} alt="" className="_icon" />
                                {_.text}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="cnt_network_input">
                    <div className="container_network">
                        <h2>Redes sociales</h2>
                        <div className="cnt_network">
                            {network.map((_, idx) => {
                                return (
                                    <NavLink
                                        key={idx}
                                        to={_.url}
                                        className="div_net"
                                    >
                                        <img
                                            src={_.icon}
                                            alt=""
                                            className="network"
                                        />
                                    </NavLink>
                                );
                            })}
                        </div>
                    </div>
                    <div className="email_input">
                        <h2>Suscribirse</h2>
                        <form onSubmit={handleSubmit} className="cnr_email">
                            <Input placeholder="Email" className="c_email" />
                            <button type="submit" className="btn_email">
                                {">"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="cnt_already">
                <span>Todos los derechos reservados &copy; {currentYear}</span>
            </div>
        </footer>
    );
};

export default Footer;
