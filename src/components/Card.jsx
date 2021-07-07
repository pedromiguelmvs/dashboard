import '../styles/css/home.css';

const Card = ({ src, icon, subtitle, value }) => {
    return (
        <div className="card">
            <div className="card-top">
                <img
                    src={src} alt={icon}
                />
                <div className="card-symbol"></div>
            </div>
            <p>{subtitle}</p>
            <h5>${value}</h5>
        </div>
    );
}

export default Card;