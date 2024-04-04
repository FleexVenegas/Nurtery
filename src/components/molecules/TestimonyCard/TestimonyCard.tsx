import React from "react";
import "./TestimonyCard.scss";

interface Data {
    id: number;
    history: string;
    name: string;
}

interface TestimonyCardProps {
    className?: string;
    data: Data[];
}

const TestimonyCard: React.FC<TestimonyCardProps> = ({ className, data }) => {
    return (
        <>
            {data.map((_, idx) => (
                <div key={idx} className={`TestimonyCard ${className}`}>
                    <div className="cnt_testy">
                        <p className="t_testi">{_.history}</p>
                        <span className="t_name">{_.name}</span>
                    </div>
                    <div className="shape"></div>
                </div>
            ))}
        </>
    );
};

export default TestimonyCard;
