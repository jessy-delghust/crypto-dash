import { Link } from 'react-router';
import ToggleDarkMode from "../components/ToggleDarkMode";

const Header = () => {
    return (
        <div className='top-nav'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <ToggleDarkMode />
        </div>
    );
};

export default Header;