import Button from "../../components/atoms/Button/Button";
import Input from "../../components/atoms/Input/Input";
import TextArea from "../../components/atoms/TextArea/TextArea";
import Title from "../../components/atoms/Title/Title";
import Map from "../../components/organisms/Map/Map";
import "./Contact.scss";

const Contact = () => {
    return (
        <div className="Contact">
            <Title title="Contáctanos" />
            <div className="cnt_map">
                <div className="c_map">
                    <Map />
                </div>
                <div className="cnt_form">
                    <form action="" className="form_">
                        <Input
                            text="Nombre completo"
                            placeholder="Thomas Edison...."
                        />
                        <Input
                            text="Correo Electrónico"
                            type="email"
                            placeholder="thomas@example.com"
                        />
                        <Input
                            text="Asunto"
                            placeholder="Consulta sobre productos"
                        />
                        <TextArea text="Mensaje" placeholder="Mensaje" />

                        <Button
                            type="submit"
                            text="Enviar"
                            className="btn_form"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
