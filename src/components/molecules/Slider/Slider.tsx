import React from "react";
import { Carousel } from "react-responsive-carousel";

//Styles
import "./Slider.scss";

//Assets
import Word1 from "../../../assets/images/rosa-1.jpg";
import Suculentas from "../../../assets/images/suculentas.webp";
import Lirios from "../../../assets/images/lirios.jpeg";
import Orquidias from "../../../assets/images/orquidias.jpg";
import Cactus from "../../../assets/images/cactus.jpg";

interface SliderProps {
    className?: string;
    showThumbs?: boolean;
    infiniteLoop?: boolean;
    autoPlay?: boolean;
    interval?: number;
    showStatus?: boolean;
}

const Slider: React.FC<SliderProps> = ({
    className,
    showStatus,
    showThumbs,
    infiniteLoop,
    interval,
    autoPlay,
}) => {
    const datas = [
        {
            id: 1,
            image: Word1,
            name: "Rosas",
            category: "Flores de Jardín",
            description:
                "Clásicas y elegantes, ideales para regalar o decorar jardines.",
        },
        {
            id: 2,
            image: Suculentas,
            name: "Suculentas",
            category: "Plantas de Interior",
            description:
                "Plantas fáciles de cuidar, perfectas para principiantes y para añadir un toque moderno a cualquier espacio.",
        },
        {
            id: 3,
            image: Lirios,
            name: "Lirios",
            category: "Flores de Jardín",
            description:
                "Elegantes y fragantes, aportan un toque de encanto a cualquier jardín o arreglo floral.",
        },
        {
            id: 4,
            image: Orquidias,
            name: "Orquídeas",
            category: "Plantas de Interior",
            description:
                "Belleza exótica y variedad de colores, ideales para interiores y para regalar en ocasiones especiales.",
        },
        {
            id: 5,
            image: Cactus,
            name: "Cactus",
            category: "Plantas de Exterior",
            description:
                "Plantas resistentes y de bajo mantenimiento, perfectas para jardines secos o con poco riego.",
        },
    ];
    return (
        <Carousel
            className={`Slider ${className}`}
            showStatus={showStatus}
            showThumbs={showThumbs}
            infiniteLoop={infiniteLoop}
            interval={interval}
            autoPlay={autoPlay}
        >
            {datas.map((_, idx) => (
                <div key={idx} className="cnt_slider">
                    <div className="cnt_left">
                        <div className="cnt_img">
                            <img src={_.image} alt="" className="s-img" />
                        </div>
                    </div>
                    <div className="cnt_info">
                        <div className="bg_info">
                            <div className="s_info_itle">
                                <h2 className="s_h2">{_.name}</h2>
                                <p className="s_desc">{_.description}</p>
                            </div>
                            <button className="s_button">Ver más</button>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default Slider;
