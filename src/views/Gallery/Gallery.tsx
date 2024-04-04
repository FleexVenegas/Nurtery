// Components
import Title from "../../components/atoms/Title/Title";
import Slider from "../../components/molecules/Slider/Slider";

//Styles
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Gallery.scss";

const Gallery = () => {
    return (
        <div className="Gallery">
            <Title title="Top" />
            <div className="g_cnt_slider">
                <Slider
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop
                    // autoPlay
                    interval={4000}
                />
            </div>
        </div>
    );
};

export default Gallery;
