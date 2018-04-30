import React from "react";
import SearchWrapper from "../searchWrapper";
import ContribWrapper from "../contribWrapper";

import { Switch, Route } from "react-router-dom";

export default class AppWrapper extends React.Component {

    render() {
        return (
            <div className="AppWrapper">
                <Switch>
                    <Route exact path="/" component={SearchWrapper} />
                    <Route exact path="/contributors" component={ContribWrapper} />
                </Switch>
            </div>
        )
    }
}