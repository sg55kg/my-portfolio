import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import background from './images/background.jpeg';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
    return (
    <Router>
        <div>
            <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/projects" component={Projects} />
                </Switch>
            <Footer />
        </div>
    </Router>
    )
}

export default App;