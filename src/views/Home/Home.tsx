// components
import Button from "../../components/atoms/Button/Button";

//styles
import "./Home.scss";

const Home = () => {
    const scrollToMyRef = () => {
        document.getElementById(`${4}`)?.scrollIntoView({
            behavior: "smooth",
        });
    };
    return (
        <div className="Home">
            <div className="home_container">
                <div className="m_cnt_log">
                    <h1>
                        ¡Cultivando belleza,
                        <br />
                        inspirando vida!
                    </h1>
                    <Button
                        text="Conoce nuestros servicios"
                        className="btn_home"
                        onClick={scrollToMyRef}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
