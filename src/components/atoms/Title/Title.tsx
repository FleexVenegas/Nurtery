import React from "react";

import "./Title.scss";

interface TitleProps {
    className?: string;
    title: string;
    description?: string;
}

const Title: React.FC<TitleProps> = ({ className, title, description }) => {
    return (
        <div className={`Title ${className}`}>
            <h1 className="t_title">{title}</h1>
            {description && <p className="t_description">{description}</p>}
        </div>
    );
};

export default Title;
