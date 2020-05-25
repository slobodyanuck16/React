import React from "react";
import { Route, Link, Switch, useParams } from "react-router-dom";
import User from "./User";

function Products({ match }) {
    console.log(match);

    return (
        <div className="page__content">
            <h1>Products</h1>
            <ul className="navigation">
                <li className="navigation__item">
                    <Link to={`${match.url}/github`}>GitHub</Link>
                </li>
                <li className="navigation__item">
                    <Link to={`${match.url}/facebook`}>FaceBook</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={match.url}>
                    <span>Select a user please</span>
                </Route>
                <Route path={`${match.url}/:userId`} component={User} />
            </Switch>
        </div>
    );
}
export default Products;
