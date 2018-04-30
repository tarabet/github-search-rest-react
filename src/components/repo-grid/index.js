import React from "react";
import {GridList, GridTile} from 'material-ui/GridList';

export default class RepoGrid extends React.Component {
    render() {
        // Cut array items number to maxResults value
        this.props.items.length = this.props.maxResults;

        return (
            <div className="RepoGridListWrapper">
                <GridList
                    className="RepoGridList"
                >
                    {this.props.items.map((item) => (
                        <GridTile key={item.id}>
                            <ul style={{listStyleType: "none"}}>
                                <li><b>Name:</b> {item.full_name}</li>
                                <li><b>Language:</b> {item.language}</li>
                                <li><b>Desc:</b> {item.description}</li>
                                <li><b>Link:</b> <a href={item.html_url}>Repo Link</a></li>
                                <li><b>Stars:</b> {item.stargazers_count}</li>
                                <li><b>Issues:</b> {item.open_issues_count}</li>
                            </ul>
                        </GridTile>
                    ))}
                </GridList>
            </div>
        )
    }
}