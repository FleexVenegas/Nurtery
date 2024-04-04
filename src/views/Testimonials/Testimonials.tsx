import "./Testimonials.scss";
import Title from "../../components/atoms/Title/Title";
import TestimonyCard from "../../components/molecules/TestimonyCard/TestimonyCard";

const Testimonials = () => {
    const testim = [
        {
            id: 1,
            history:
                "¡Increíble variedad de plantas y un servicio excepcional!" +
                "Compré algunas suculentas para mi apartamento y no solo están hermosas, " +
                "sino que también me dieron excelentes consejos sobre cómo cuidarlas." +
                "¡Definitivamente volveré!",
            name: "Laura S",
        },
        {
            id: 2,
            history:
                "Me encantó la experiencia de diseño de jardines que tuve con Nurtery. " +
                "Transformaron mi patio trasero en un oasis verde con plantas hermosas y una " +
                "disposición perfecta. ¡Gracias por hacer realidad mi sueño de jardín!",
            name: "Roberto M",
        },
        {
            id: 3,
            history:
                "¡El equipo de Nurtery realmente sabe lo que están haciendo! " +
                "Me ayudaron a seleccionar las plantas adecuadas para mi balcón y ahora " +
                "tengo un pequeño jardín urbano que adoro. ¡Altamente recomendado!",
            name: "Ana G",
        },
        {
            id: 4,
            history:
                "Desde que comencé a comprar mis plantas en [Nombre del Vivero], " +
                "mi hogar se ha transformado por completo. Las plantas son de la mejor " +
                "calidad y el servicio al cliente es excepcional. " +
                "¡No puedo imaginar comprar en otro lugar!",
            name: "Carlos R",
        },
    ];
    return (
        <div className="Testimonials">
            <Title title="Testimonios" />
            <div className="t_cnt_testi">
                <TestimonyCard data={testim} />
            </div>
        </div>
    );
};

export default Testimonials;
