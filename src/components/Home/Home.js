import background from '../../images/background3.png';
import './styles.css';

const Home = () => {
    return (
        <div className="home-div" style={{height: '90vh', backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <div className="home-desc">
                <h3>Welcome</h3>
                <p>I am a self taught developer currently living in Bryan, Texas.</p>
                <h3>Skills</h3>
                <div className="skills">
                    <button>Javascript</button>
                    <button>React</button>
                    <button>Node</button>
                    <button>Redux</button>
                    <button>webpack</button>
                    <button>Git</button>
                    <button>Java</button>
                    <button>C#</button>
                </div>
            </div>
        </div>
    )
}

export default Home;