import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Table, Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import {marketList, exchangeList, startStreamingPrice, startTrading} from '../util/Actions';

class Post extends Component {
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
            <div>This is Post page</div>
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

export default connect(mapStateToProps)(Post);