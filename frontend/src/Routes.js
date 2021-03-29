import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home"
import Error404 from "./components/pages/Error404"
import UserRoutes from "./UserRoutes"
import Another from "./components/pages/Another"

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/another">
                <Another />
            </Route>
            <UserRoutes />
            <Route path="*">
                <Error404 />
            </Route>
        </Switch>
    );
}