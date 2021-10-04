import './styles.css';
import github from '../../images/github4.png';

const Footer = () => {
    return (
        <div className="footer">
            <a href="https://github.com/sg55kg"><img src={github} className="git-logo"/></a>
        </div>
    )
}

export default Footer;