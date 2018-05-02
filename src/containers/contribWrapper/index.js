import React from "react";
import Msg from "../../config/msg";
import {queryGithub} from "../../utils/common";
import {List} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import ContribCard from "../../components/contrib-card";

export default class ContribWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            asyncLoading: false,
            items: [],
            page: 1,
        };

        this.renderList = this.renderList.bind(this);
        this.fetchMore = this.fetchMore.bind(this);
    }

    componentDidMount() {
        const url = `${this.props.location.state.contribUrl}?per_page=10`;

        this.handleSearchQuery(url);
    }

    toggleAsyncLoading(flag) {
        this.setState({
            ...this.state,
            asyncLoading: flag,
        })
    }

    handleSearchQuery(url) {
        this.toggleAsyncLoading(true);

        queryGithub(url)
            .then((data) => {
                const link = data.headers.get("Link");

                if (link) {
                    console.log(link);
                }

                // decided not to use the link headers approach
                // to use more simple pagination approach
                // some bugs are possible with last/first pages

                return data.json();
            })
            .then((dataJson) => {
                this.setState({
                    ...this.state,
                    items: dataJson,
                    asyncLoading: false,
                })
            })
            .catch((err) => {
                alert(Msg.errMsg.githubFetchErrMsg);
                this.toggleAsyncLoading(false);
            });
    }

    fetchMore() {
        const pageNum = this.state.page + 1;
        const url = `${this.props.location.state.contribUrl}?per_page=10&page=${pageNum}`;

        this.handleSearchQuery(url);

        this.setState({
            ...this.state,
            page: pageNum,
        })
    }

    renderList() {
        return (
            <List>
                {this.state.items.map((item) => <ContribCard key={item.id} {...item} />)}
            </List>
        )
    }

    render() {
        return (
            <div>
                {this.state.asyncLoading ? <p>Loading...</p> : this.renderList()}
                <FlatButton
                    label={Msg.contribPanel.fetchMoreBtnLabel}
                    primary={true}
                    onClick={this.fetchMore}
                />
            </div>
        )
    }
}