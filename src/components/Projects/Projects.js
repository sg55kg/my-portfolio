import background from '../../images/background3.png';
import './styles.css';

const Projects = () => {
    return (
        <div style={{height: '90vh', backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', display: 'flex', flexDirection: 'column'}}>
            <div className="project">
                <h1>Test</h1>
            </div>
        </div>
    )
}

export default Projects;