// Components
import Footer from "./components/molecules/Footer/Footer";
import Header from "./components/molecules/Header/Header";
import Secction from "./components/molecules/Secction/Secction";
import { useStateContext } from "./context/ContextProvider";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import FAQ from "./views/FAQ/FAQ";
import Gallery from "./views/Gallery/Gallery";

// Views
import Home from "./views/Home/Home";
import LegalWarning from "./views/LegalWarning/LegalWarning";
import PrivacyPolicies from "./views/PrivacyPolicies/PrivacyPolicies";
import Services from "./views/Services/Services";
import Testimonials from "./views/Testimonials/Testimonials";

const App = () => {
    const { faq, polPriv, avisoLegal } = useStateContext();

    return (
        <>
            <Header />
            <main>
                <Secction id="1">
                    <Home />
                </Secction>
                <Secction id="2">
                    <About />
                </Secction>
                 <Secction id="3">
                    <Gallery />
                </Secction>
                <Secction id="4">
                    <Services />
                </Secction>
                <Secction id="5">
                    <Testimonials />
                </Secction>
                <Secction id="6">
                    <Contact />
                </Secction>

                {faq && <FAQ />}
                {polPriv && <PrivacyPolicies />}
                {avisoLegal && <LegalWarning />} 
            </main>
            <Footer />
        </>
    );
};

export default App;
