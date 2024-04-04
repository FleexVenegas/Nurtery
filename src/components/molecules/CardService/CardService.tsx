
//Style
import "./CardService.scss";

import React from "react";

interface dataProps {
    id: number;
    title: string;
    image: string;
    work: string;
}

interface CardServiceProps {
    className?: string;
    data: dataProps[];
}

const CardService: React.FC<CardServiceProps> = ({ className, data }) => {
    return (
        <>
            {data?.map((_, idx) => (
                <article key={idx} className={`CardService ${className}`}>
                    <div className="c_cnt_image">
                        <img src={_.image} alt="" className="c_image" />
                    </div>
                    <div className="circle_img"></div>
                    <div className="c_cnt_info">
                        <h3>{_.title}</h3>
                        <p>{_.work}</p>
                    </div>
                </article>
            ))}
        </>
    );
};

export default CardService;
