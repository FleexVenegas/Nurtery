import Title from "../../components/atoms/Title/Title";
import "./About.scss";

// Assets
import Image1 from "../../assets/images/maceta1_r.png";
import Image2 from "../../assets/images/maceta2_r.png";
import { useStateContext } from "../../context/ContextProvider";

const About = () => {
    const { isSmallScreen } = useStateContext();

    return (
        <div className="About">
            <Title title="Acerca de nosotros" />
            <div className="a_cnt_info">
                <div className="a_cnt_about">
                    <p className="a_info">
                        En Nurtery, nos apasiona la naturaleza y nos enorgullece
                        ofrecer una amplia variedad de plantas y flores
                        cuidadosamente seleccionadas para embellecer tu hogar,
                        jardín o cualquier espacio exterior. Desde exuberantes
                        plantas de interior hasta coloridas flores de temporada,
                        estamos aquí para ayudarte a dar vida a tus espacios
                        verdes.
                    </p>
                    <p className="a_info">
                        Nuestro compromiso con la calidad y la sostenibilidad es
                        fundamental. Trabajamos con proveedores confiables y
                        cultivamos muchas de nuestras propias plantas con
                        prácticas respetuosas con el medio ambiente. Además,
                        nuestro equipo de expertos en jardinería está siempre
                        disponible para brindarte asesoramiento personalizado y
                        ayudarte a cuidar y mantener tus plantas de manera
                        óptima.
                    </p>
                    <p className="a_info">
                        En Nurtery, no solo ofrecemos plantas, sino también
                        experiencias. Organizamos eventos y talleres educativos
                        para inspirarte a explorar el maravilloso mundo de la
                        jardinería y te invitamos a unirte a nuestra comunidad
                        de amantes de las plantas.
                    </p>
                    <p className="a_info">
                        Ven a visitarnos y descubre la belleza y la tranquilidad
                        que nuestras plantas pueden agregar a tu vida. ¡Nos
                        encantaría ayudarte a hacer de tu espacio un oasis
                        verde!
                    </p>
                </div>
                {!isSmallScreen ? (
                    <div className="a_collash">
                        <div className="a_posit">
                            <div className="a_cnt_imge img1">
                                <img src={Image1} alt="" />
                            </div>
                            <div className="a_cnt_imge img2">
                                <img src={Image2} alt="" />
                            </div>
                            <div className="a_cnt_imge img3">
                                <img src={Image1} alt="" />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="container_shape">
                        <div className="cnt_shape shape_1">
                            <img src={Image1} alt="" />
                        </div>
                        <div className="cnt_shape shape_2">
                            <img src={Image2} alt="" />
                        </div>
                        <div className="cnt_shape shape_3">
                            <img src={Image1} alt="" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default About;
