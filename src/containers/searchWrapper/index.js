import React from "react";
import SearchPanel from "../../components/search-panel";
import RepoGrid from "../../components/repo-grid";
import { queryGithub } from "../../utils/common";
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
    }

    toggleAsyncLoading(flag) {
        this.setState({
            ...this.state,
            asyncLoading: flag,
        })
    }

    handleSearchQuery (queryString) {
        this.toggleAsyncLoading(true);

        queryGithub(queryString).then((items) => {
            this.setState({
                ...this.state,
                items,
                asyncLoading: false,
            })
        })
            .catch((err) => {
                alert(Msg.errMsg.githubFetchErrMsg);
                this.toggleAsyncLoading(false);
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
                        maxResults={6}
                    />
                }
            </React.Fragment>
        )
    }
}