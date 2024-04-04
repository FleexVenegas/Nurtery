import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
    useEffect,
} from "react";

interface AppContextProps {
    faq: boolean;
    setFaq: Dispatch<SetStateAction<boolean>>;
    polPriv: boolean;
    setPolPriv: Dispatch<SetStateAction<boolean>>;
    avisoLegal: boolean;
    setAvisoLegal: Dispatch<SetStateAction<boolean>>;
    isSmallScreen: boolean;
    setIsSmallScreen: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const ContextProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [faq, setFaq] = useState(false);
    const [polPriv, setPolPriv] = useState(false);
    const [avisoLegal, setAvisoLegal] = useState(false);

    const [isSmallScreen, setIsSmallScreen] = useState(
        window.innerWidth <= 768
    );

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <AppContext.Provider
            value={{
                faq,
                setFaq,
                polPriv,
                setPolPriv,
                avisoLegal,
                setAvisoLegal,
                isSmallScreen,
                setIsSmallScreen,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useStateContext = (): AppContextProps => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error(
            "useStateContext must be used within a ContextProvider"
        );
    }
    return context;
};
