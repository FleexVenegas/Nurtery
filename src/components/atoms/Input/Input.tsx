import React, { useState } from "react";

// Styles
import "./Input.scss";

// Assets
// import Eye from "../../../assets/icons/eye.svg";
// import EyeOff from "../../../assets/icons/eye_off.svg";

interface InputProps {
    className?: string;
    placeholder?: string;
    value?: string;
    name?: string;
    type?: "text" | "password" | "number" | "email";
    text?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
    className,
    placeholder,
    value,
    name,
    type = "text",
    text,
    onChange,
}) => {

    return (
        <div className={`cnt_Input ${className}`}>
            {text && <span className="text_span">{text}</span>}
            <div className="cnt_inpu_img">
                <input
                    className={`input-ut ${
                        type === "password" ? "type_pas" : ""
                    }`}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required
                />
                {/* {type === "password" && (
                    <img
                        src={!viewPasswprd ? Eye : EyeOff}
                        alt=""
                        onClick={() => setviewPasswprd(!viewPasswprd)}
                        className="view_password"
                    />
                )} */}
            </div>
        </div>
    );
};

export default Input;
