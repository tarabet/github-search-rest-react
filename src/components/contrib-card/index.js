import React from "react";
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

export default class ContribCard extends React.Component {
    render() {
        return(
            <ListItem
                leftAvatar={<Avatar src={this.props.avatar_url} />}
                style={{height: 70}}
                primaryText={this.props.login}
                secondaryText={<p style={{fontSize: "0.7em"}}>
                    Profile: {this.props.html_url}<br />
                    Contributions: {this.props.contributions}
                </p>}
                secondaryTextLines={2}
            />
        )
    }
}