import '../styles/css/home.css';

import Header from '../components/Header';

const Home = () => {
    return (
        <div className="grid-container">
            <nav className="sidebar">
                <a href="/" className="selected-link">
                    <img
                        src="https://pics.freeicons.io/uploads/icons/png/13550252591580817582-24.png"
                        alt="home"
                    />
                </a>
            </nav>
            <section className="dashboard">
                <Header
                    title="Dashboard"
                    subtitle="Payments updates"
                />
            </section>
            <section className="profile">

            </section>
            <section className="blank">

            </section>
        </div>
    );
}

export default Home;