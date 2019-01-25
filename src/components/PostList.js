import React, { Component } from 'react';
import {connect} from 'react-redux';
import {marketList, exchangeList, startStreamingPrice, startTrading} from '../util/Actions';
import Post from "./Post";

class PostList extends Component {
    componentDidMount() {
        //this.props.dispatch(marketList());
        //this.props.dispatch(exchangeList());
    }

    onClickedStreamingPrice(e) {
        e.preventDefault();
        this.props.dispatch(startStreamingPrice("BTCUSD"));
    }

    onClickedTrading(e) {
        e.preventDefault();
        this.props.dispatch(startTrading("BTCUSD"));

    }

    render() {
        return (
            <div>
                <div>This is Post List</div>
                <Post />
                <Post />
                <Post />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { selectedSymbol, userID, marketList, exchangeList, bidAsk} = state.appInfo;

    return {
        selectedSymbol,
        userID,
        marketList,
        exchangeList,
        bidAsk
    }
}

export default connect(mapStateToProps)(PostList);