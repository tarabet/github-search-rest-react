import React from "react";
import SearchPanel from "../../components/search-panel";
import RepoGrid from "../../components/repo-grid";
import { queryGithub } from "../../utils/common";
import { githubEndpoint } from "../../config/config";
import Msg from "../../config/msg";

export default class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            asyncLoading: false,
            items: [],
        };

        this.handleSearchQuery = this.handleSearchQuery.bind(this);
        this.toggleAsyncLoading = this.toggleAsyncLoading.bind(this);
        this.handleTileClick = this.handleTileClick.bind(this);
    }

    toggleAsyncLoading(flag) {
        this.setState({
            ...this.state,
            asyncLoading: flag,
        })
    }

    handleSearchQuery (queryString) {
        const url = `${githubEndpoint}?q=${queryString}&per_page=6`;

        this.toggleAsyncLoading(true);

        queryGithub(url)
            .then((data) => data.json())
            .then((dataJson) => {
            this.setState({
                ...this.state,
                items: dataJson.items,
                asyncLoading: false,
            })
        })
        .catch((err) => {
            alert(Msg.errMsg.githubFetchErrMsg);
            this.toggleAsyncLoading(false);
        });
    }

    handleTileClick(contribUrl) {
        this.props.history.push({
            pathname: "/contributors",
            state: {
                contribUrl,
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <SearchPanel
                    queryHandler={this.handleSearchQuery}
                />
                {this.state.asyncLoading && <p>Loading...</p>}
                {
                    this.state.items.length > 0
                    && !this.state.asyncLoading
                    && <RepoGrid
                        items={this.state.items}
                        clickHandler={this.handleTileClick}
                    />
                }
            </React.Fragment>
        )
    }
}