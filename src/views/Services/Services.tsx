import Title from "../../components/atoms/Title/Title";
import CardService from "../../components/molecules/CardService/CardService";
import "./Services.scss";

//assets
import service1 from "../../assets/images/service1.jpg";
import service2 from "../../assets/images/service2.jpg";
import service3 from "../../assets/images/service3.jpg";
import service4 from "../../assets/images/service4.jpg";
import service5 from "../../assets/images/service5.jpg";
import service6 from "../../assets/images/service6.webp";

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Venta de Plantas y Flores",
            image: service1,
            work:
                "Ofrecemos una amplia variedad de plantas de interior, " +
                "plantas de exterior, flores de temporada, árboles y arbustos " +
                "para embellecer cualquier espacio",
        },
        {
            id: 2,
            title: "Diseño de Jardines",
            image: service2,
            work:
                "Nuestro equipo de expertos en jardinería ofrece servicios de diseño " +
                "personalizado de jardines, desde pequeños jardines urbanos hasta paisajes más extensos",
        },
        {
            id: 3,
            title: "Asesoramiento y Consultoría",
            image: service3,
            work:
                "Proporcionamos asesoramiento profesional sobre cuidado de plantas, " +
                "selección de especies adecuadas para cada entorno, control de plagas y enfermedades, y más",
        },
        {
            id: 4,
            title: "Entrega a Domicilio",
            image: service4,
            work:
                "Facilitamos la compra de nuestros productos ofreciendo servicio de" +
                "entrega a domicilio, para que puedas recibir tus plantas y flores directamente en tu hogar.",
        },
        {
            id: 5,
            title: "Eventos y Talleres",
            image: service5,
            work:
                "Organizamos eventos y talleres educativos sobre jardinería, donde los entusiastas " +
                "pueden aprender nuevas técnicas, intercambiar ideas y conectarse con otros amantes de las plantas.",
        },
        {
            id: 6,
            title: "Servicios de Mantenimiento",
            image: service6,
            work:
                "Además del diseño, también ofrecemos servicios de mantenimiento de jardines," +
                "que incluyen poda, riego, fertilización y cuidado regular para mantener tus " +
                "espacios verdes en óptimas condiciones.",
        },
        // {
        //     id: 7,
        //     title: "Consultas en Línea",
        //     image: Rosas,
        //     work:
        //         "Para mayor comodidad, ofrecemos consultas en línea a través de videoconferencia " +
        //         "o chat, donde nuestros expertos pueden brindar asesoramiento y resolver dudas " +
        //         "sin necesidad de desplazarse al vivero.",
        // },
    ];

    return (
        <div className="Services">
            <Title title="Nuestros servicios" />
            <div className="s_cnt_services">
                <CardService data={services} />
            </div>
        </div>
    );
};

export default Services;
