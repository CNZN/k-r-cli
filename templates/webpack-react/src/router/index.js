import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {ROUTER_MAP} from './config';
import App from '../App';
import NoMatch from '@/common/components/NoMatch'

export default class Router extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        {
                            ROUTER_MAP.map(item => {
                                return <Route key={item.key} path={item.path} component={item.component} />
                            })
                        }
                        {/* <Route path="*" component={NoMatch}/> */}
                        {/* <Route render={() => <Redirect to="/" />} /> */}
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}