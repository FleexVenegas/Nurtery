import React from "react";
import "./Button.scss";

interface ButtonProps {
    className?: string;
    text: string;
    type?: "button" | "reset" | "submit";
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ className, text, type, onClick }) => {
    return (
        <button className={`Button ${className}`} type={type} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
