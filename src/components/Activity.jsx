import '../styles/css/home.css';

const Activity = ({
    src,
    alt,
    title,
    subtitle,
    value
}) => {
    return (
        <div className="activity-container">
            <div className="img-container">
                <img
                    src={src}
                    alt={alt}
                />
            </div>
            <div className="activity-content">
                <h5>{title}</h5>
                <p>{subtitle}</p>
            </div>
            <p className="activity-value">
                ${value}
            </p>
        </div>
    );
}

export default Activity;