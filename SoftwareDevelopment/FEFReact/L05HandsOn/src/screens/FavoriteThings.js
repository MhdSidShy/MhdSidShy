import React from "react";
import Things from "./Things";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const FavoriteThings = ({ match }) => (<div>
    <h1>FavoriteThings</h1>
    <ul>
        <li><link to={`${match.url}/FavoriteCar`}>FavoriteCar</link></li>
        <li><link to={`${match.url}/FavoriteFood`}>FavoriteFood</link></li>
        <li><link to={`${match.url}/FavoriteMovie`}>FavoriteMovie</link></li>
    </ul>
    <Route path={`${match.url}/:ThingsId`} components={Things} />
    <Route exact path={match.url} render={() => (<h3>Pick a Favorite Thing!</h3>)} />
</div>);

export default FavoriteThings;