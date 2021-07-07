import '../styles/css/home.css';

const Transition = ({
    name,
    hour,
    value,
    status
}) => {
    return (
        <div className="transition">
            <img
                src="https://thispersondoesnotexist.com/image"
                alt="person"
            />
            <div className="content">
                <p className="name">{name}</p>
                <p className="hour">{hour}</p>
                <p className="value">${value}</p>
                <p className="status">{status}</p>
            </div>
        </div>
    );
}

export default Transition;