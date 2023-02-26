import React    from 'react';
import ReactDOM from 'react-dom';

import Home           from './screens/Home';
import About          from './screens/About';
import FavoriteThings from './screens/FavoriteThings';
import Things         from './screens/Things';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const App = () => (<Router>
    <div>
        <ul>
            <li><link to="/">Home</link></li>
            <li><link to="/About">About</link></li>
            <li><link to="/FavoriteThings">FavoriteThings</link></li>
            <li><link to="/Things">Things</link></li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/FavoriteThings" component={FavoriteThings} />
        <Route exact path="/Things" component={Things} />
    </div>
</Router>);

ReactDOM.render(<App />, document.getElementById('root'));