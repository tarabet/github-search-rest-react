import React from "react";
import {GridList, GridTile} from 'material-ui/GridList';

export default class RepoGrid extends React.Component {
    clickHandler(contribUrl, e) {
        e.preventDefault();

        this.props.clickHandler(contribUrl);
    }

    render() {
        // better make GridTile as separate component

        return (
            <div className="RepoGridListWrapper">
                <GridList
                    className="RepoGridList"
                >
                    {this.props.items.map((item) => (
                        <GridTile
                            key={item.id}
                            className="RepoSearchTile"
                        >
                            <ul style={{listStyleType: "none"}}>
                                <li><b>Name:</b> {item.full_name}</li>
                                <li><b>Language:</b> {item.language}</li>
                                <li><b>Desc:</b> {item.description}</li>
                                <li><b>Link:</b> <a href={item.html_url}>Repo Link</a></li>
                                <li><b>Stars:</b> {item.stargazers_count}</li>
                                <li><b>Issues:</b> {item.open_issues_count}</li>
                                <li>
                                    <b>Contributors:</b>
                                    <a
                                        onClick={(e) => this.clickHandler(item.contributors_url, e)}
                                        href="#">Got to
                                    </a>
                                </li>
                            </ul>
                        </GridTile>
                    ))}
                </GridList>
            </div>
        )
    }
}