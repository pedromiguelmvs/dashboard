import '../styles/css/home.css';

import Header from '../components/Header';
import Card from '../components/Card';
import Graphic from '../components/Graphic';
import Transition from '../components/Transition';
import Activity from '../components/Activity';

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
                <div className="profile-header">
                    <img
                        src="https://pics.freeicons.io/uploads/icons/png/8938216821547546487-24.png"
                        alt="calendar"
                    />
                    <img
                        className="header-item"
                        src="https://pics.freeicons.io/uploads/icons/png/8732145451555937113-24.png"
                        alt="notifications"
                    />
                    <img
                        className="profile-pic"
                        src="https://thispersondoesnotexist.com/image"
                        alt="profilepic"
                    />
                </div>
                <div className="recent-activities">
                    <Header
                        title="Recent Activities"
                        subtitle="02 Mar 2021"
                    />
                    <Activity
                        src="https://pics.freeicons.io/uploads/icons/png/12640594921596027195-24.png"
                        alt="water"
                        title="Water Bill"
                        subtitle="Successfully"
                        value="120"
                    />
                    <Activity
                        src="https://pics.freeicons.io/uploads/icons/png/15886967051535797986-24.png"
                        alt="salary"
                        title="Income Salary"
                        subtitle="Received"
                        value="4500"
                    />
                    <Activity
                        src="https://pics.freeicons.io/uploads/icons/png/1033471011586787980-24.png"
                        alt="electric"
                        title="Electric Bill"
                        subtitle="Successfully"
                        value="150"
                    />
                    <Activity
                        src="https://pics.freeicons.io/uploads/icons/png/2458403001543238954-24.png"
                        alt="wifi"
                        title="Internet Bill"
                        subtitle="Successfully"
                        value="50"
                    />
                </div>
                <div className="upcoming-payments">
                    <Header
                        title="Upcoming Payments"
                        subtitle="13 Mar 2021"
                    />
                    <Activity
                        src="https://pics.freeicons.io/uploads/icons/png/3581263791586787809-24.png"
                        alt="home"
                        title="Home Rent"
                        subtitle="Pending"
                        value="1500"
                    />
                    <Activity
                        src="https://pics.freeicons.io/uploads/icons/png/10320105721596026964-24.png"
                        alt="car"
                        title="Car Insurance"
                        subtitle="Pending"
                        value="150"
                    />
                </div>
            </section>
            <section className="blank"></section>
        </div>
    );
}

export default Home;