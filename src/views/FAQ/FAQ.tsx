import { useEffect } from "react";
import { useStateContext } from "../../context/ContextProvider";

//Components
import ViewCard from "../../components/molecules/ViewCard/ViewCard";
import Accordion from "../../components/molecules/Accordion/Accordion";

//Styles
import "./FAQ.scss";

//JSON
import FaqItems from "./dataFaq.json";

const FAQ = () => {
    const { faq, setFaq } = useStateContext();

    useEffect(() => {
        if (faq) {
            document.body.classList.add("no-scroll");
        }
    }, []);

    const handleInactive = () => {
        document.body.classList.remove("no-scroll");
        setFaq(false);
    };

    return (
        <ViewCard onClick={handleInactive}>
            <div className="FAQ">
                <h1 className="title_faq">Preguntas Frecuentes</h1>
                <div className="cnt_faq">
                    <Accordion data={FaqItems} />
                </div>
            </div>
        </ViewCard>
    );
};

export default FAQ;
