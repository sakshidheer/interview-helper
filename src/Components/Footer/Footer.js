import classes from './Footer.module.css';
import { AiFillHome, AiOutlineHistory } from 'react-icons/ai';
import { MdQuestionAnswer } from 'react-icons/md'
import { RiHistoryFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className={classes.footer}>
            <NavLink to="/">
                <AiFillHome size="1.5em" color='#f50057' />
            </NavLink>
            <NavLink to="/questions-answers">
                <MdQuestionAnswer size="1.5em" color='#f50057' />
            </NavLink>
            <NavLink to="/upcoming-interviews">
                <AiOutlineHistory size="1.5em" color='#f50057' />
            </NavLink>
            <NavLink to="/interview-history">
                <RiHistoryFill size="1.5em" color='#f50057' />
            </NavLink>
        </div>)
}

export default Footer;