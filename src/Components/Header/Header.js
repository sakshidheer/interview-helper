import Logo from "../Logo";
import classes from './Header.module.css';
import {AiFillSetting,AiOutlineLogout} from 'react-icons/ai';

const Header = () => {
    return (
        <div className={classes.header}>
            <Logo/>
            <div>
                <AiFillSetting size="1.5em" color='#f50057' onClick={()=>alert('kgjhgjh')}/>
            </div>
        </div>)
}

export default Header;