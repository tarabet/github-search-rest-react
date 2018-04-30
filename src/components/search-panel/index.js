import React from "react";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import Msg from "../../config/msg";

export default class SearchPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: "",
        };

        this.searchStringHandler = this.searchStringHandler.bind(this);
        this.searchQueryHandler = this.searchQueryHandler.bind(this);
    }

    searchStringHandler(e) {
        e.preventDefault();

        // Any validation logic can be placed here

        this.setState({
            ...this.state,
            searchString: e.target.value,
        });
    }

    searchQueryHandler(e) {
        e.preventDefault();

        this.props.queryHandler(this.state.searchString);
    }

    render() {
        return (
            <div className="SearchPanel">
                <TextField
                    onChange={this.searchStringHandler}
                    hintText={Msg.searchPanel.hintText}
                    style={{width: "50%"}}
                />
                <br />
                <FlatButton
                    label={Msg.searchPanel.btnLabel}
                    primary={true}
                    onClick={this.searchQueryHandler}
                />
            </div>
        )
    }
};