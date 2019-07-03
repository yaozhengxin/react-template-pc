import * as React from 'react';
import { HashRouter,Switch } from 'react-router-dom';
import { FrontendAuth } from './routerFrontendAuth'
import { routerConfig } from './routerConfig'

export default class Router extends React.Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <FrontendAuth config={routerConfig} />
                </Switch>
            </HashRouter>
        );
    }
}