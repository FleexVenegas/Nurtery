// Styles
import "./ViewCard.scss";

interface ViewCardProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const ViewCard: React.FC<ViewCardProps> = ({ children, onClick }) => {
    return (
        <div className="ViewCard">
            <div className="card_">
                {children}
                <button className="btn_close" onClick={onClick}>
                    ❌
                </button>
            </div>
        </div>
    );
};

export default ViewCard;
