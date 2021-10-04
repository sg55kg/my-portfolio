import { Link } from 'react-router-dom';
import './styles.css';

const NavBar = () => {
    return (
        <div className="header">
            <h1 className="title">Sam Dollar</h1>
            <nav className="nav-bar">
                <Link to="/" className="nav-button" >Home</Link>
                <Link to="/projects" className="nav-button" >Projects</Link>
            </nav>
        </div>
    )
}

export default NavBar;