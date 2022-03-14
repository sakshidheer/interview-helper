import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Main from '../../Components/Main/Main';
import classes from './Home.module.css';

const Home = () => {
    return (
        <div className={classes.home}>
            <Header />
            <Main/>
            <Footer />
        </div>)
}

export default Home;