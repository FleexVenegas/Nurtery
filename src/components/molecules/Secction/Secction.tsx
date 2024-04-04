import React from "react";

interface SecctionProps {
    children: React.ReactNode;
    className?: string;
    id: string;
}

const Secction: React.FC<SecctionProps> = ({ children, id }) => {
    return (
        <section className={`View_ Secction`} id={id}>
            {children}
        </section>
    );
};

export default Secction;
