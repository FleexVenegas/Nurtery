import React, { ChangeEvent, useRef } from "react";

// Styles
import "./TextArea.scss";

interface TextAreaProps {
    text?: string;
    placeholder?: string;
    className?: string;
    name?: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const TextArea: React.FC<TextAreaProps> = ({
    text,
    placeholder,
    className,
    name,
    value,
    onChange,
}: TextAreaProps) => {
    // const [textAreaValue, setTextAreaValue] = useState<string>("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // const value = e.target.value;
        // setTextAreaValue(value);
        if (onChange) {
            onChange(e); // Llamada a la función onChange externa
        }

        // Ajustar la altura del textarea
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto"; // Restaurar la altura predeterminada
            textarea.style.height = `${textarea.scrollHeight}px`; // Ajustar la altura al contenido
        }
    };

    return (
        <div className={`TextArea_ ${className}`}>
            {text && <span className={`area_text`}>{text}</span>}
            <textarea
                ref={textareaRef}
                className={`text_area `}
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
                value={value}
                required
            />
        </div>
    );
};

export default TextArea;
