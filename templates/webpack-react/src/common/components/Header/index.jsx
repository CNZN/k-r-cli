import React from 'react';
import {ROUTER_MAP} from '@/router/config';
import { Menu } from 'antd';

import { withRouter } from 'react-router';
import {getInfo} from './hander';

import store from '@/reducer/index';
import { connect } from 'react-redux';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current: 'header'
        };
    }
    handleClick = e => {
        this.setState({ current: e.key });
        this.props.history.push(`${e.key}`);
        getInfo();
    };

    render() {
        const { current } = this.state;
        return (
            <Menu onClick={this.handleClick.bind(this)} selectedKeys={[current]} mode="horizontal">
                {
                    ROUTER_MAP.map(item => (
                        <Menu.Item key={item.key} >
                            {item.label}
                        </Menu.Item>))
                }
            </Menu>
        );
    }
}

export default connect(
    redux => {
        return redux;
    }
)(withRouter(Header));



