import { useEffect } from "react";

//Styles
import "./PrivacyPolicies.scss";

//Components
import ViewCard from "../../components/molecules/ViewCard/ViewCard";

//Context
import { useStateContext } from "../../context/ContextProvider";

const PrivacyPolicies = () => {
    const { setPolPriv, polPriv } = useStateContext();

    useEffect(() => {
        if (polPriv) {
            document.body.classList.add("no-scroll");
        }
    }, []);

    const handleClose = () => {
        document.body.classList.remove("no-scroll");
        setPolPriv(false);
    };
    return (
        <ViewCard onClick={handleClose}>
            <div className="PrivacyPolicies">
                <h1 className="title_pri">Política de Privacidad</h1>
                <div className="container_pri">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Nulla posuere sollicitudin aliquam
                        ultrices sagittis orci a scelerisque. Blandit massa enim
                        nec dui nunc mattis enim ut tellus. Ultricies tristique
                        nulla aliquet enim tortor at. Tempus urna et pharetra
                        pharetra. Tempus imperdiet nulla malesuada pellentesque
                        elit eget gravida cum. Tellus integer feugiat
                        scelerisque varius morbi enim nunc faucibus a. Semper
                        viverra nam libero justo laoreet. At tempor commodo
                        ullamcorper a lacus vestibulum sed arcu. Eget arcu
                        dictum varius duis at consectetur lorem donec. Volutpat
                        blandit aliquam etiam erat velit scelerisque in. Quam
                        nulla porttitor massa id neque aliquam vestibulum. Diam
                        maecenas sed enim ut.
                    </p>
                    {/* <br /> */}
                    <p>
                        Aliquam sem fringilla ut morbi tincidunt augue.
                        Consectetur lorem donec massa sapien faucibus et
                        molestie. Neque viverra justo nec ultrices dui sapien
                        eget. Nisl condimentum id venenatis a condimentum vitae
                        sapien pellentesque. Malesuada fames ac turpis egestas
                        maecenas pharetra convallis posuere morbi. Purus ut
                        faucibus pulvinar elementum integer enim neque volutpat.
                        Sed enim ut sem viverra. Mauris pharetra et ultrices
                        neque ornare aenean euismod. Fusce id velit ut tortor
                        pretium viverra suspendisse potenti nullam. Tristique
                        risus nec feugiat in fermentum posuere urna nec. Aliquet
                        lectus proin nibh nisl condimentum id venenatis. Blandit
                        volutpat maecenas volutpat blandit.
                    </p>
                </div>
            </div>
        </ViewCard>
    );
};

export default PrivacyPolicies;
