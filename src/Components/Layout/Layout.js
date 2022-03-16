import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import classes from './Layout.module.css';

const Layout = () => {
    return (
        <div className={classes.layout}>
            <Header />
            <Outlet />
            <Footer />
        </div>)
}

export default Layout;