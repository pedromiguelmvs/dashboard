import '../styles/css/home.css';

import Header from '../components/Header';
import Card from '../components/Card';
import Graphic from '../components/Graphic';
import Transition from '../components/Transition';

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
                    searchBar={true}
                />
                <div className="cards">
                    <Card
                        src="https://pics.freeicons.io/uploads/icons/png/14457147931535797976-48.png"
                        alt="card"
                        subtitle="Transfer via Card number"
                        value="1200"
                    />
                    <Card
                        src="https://image.flaticon.com/icons/png/32/159/159791.png"
                        alt="card"
                        subtitle="Transfer Other Banks"
                        value="150"
                    />
                    <Card
                        src="https://image.flaticon.com/icons/png/32/3635/3635987.png"
                        alt="card"
                        subtitle="Transfer Same Bank"
                        value="1500"
                    />
                    <Card
                        src="https://image.flaticon.com/icons/png/32/3029/3029336.png"
                        alt="card"
                        subtitle="Transfer to Other Bank"
                        value="1500"
                    />
                </div>
                <div className="graphic-container">
                    <Header
                        title="$1500"
                        subtitle="Balance"
                    >
                        PAST 30 DAYS
                    </Header>
                    <Graphic />
                </div>
                <div className="history">
                    <Header
                        title="History"
                        subtitle="Transection at last 6 months"
                    />
                    <Transition
                        name="Car Insurance"
                        hour="10:42:23 AM"
                        value="350,00"
                        status="Completed"
                    />
                    <Transition
                        name="Laon"
                        hour="12:42:00 PM"
                        value="1200,00"
                        status="Completed"
                    />
                    <Transition
                        name="Online Payment"
                        hour="10:42:23 AM"
                        value="154,00"
                        status="Completed"
                    />
                </div>
            </section>
            <section className="profile">

            </section>
            <section className="blank">

            </section>
        </div>
    );
}

export default Home;