import * as React from 'react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { createBrowserHistory } from 'history';
import { Router, withRouter, Switch, Route } from 'react-router';
import { Provider } from 'mobx-react';
import Home from './Home';
import AccountService from './service/AccountService';


export default class App extends React.Component{

    browserHistory = createBrowserHistory();
    routingStore = new RouterStore();
    history = syncHistoryWithStore(this.browserHistory, this.routingStore);

    accountService = new AccountService();
    
    

    render(){
        return(
            <React.Fragment>
                <Provider routing={this.routingStore} account={this.accountService} >
                    <Router history={this.history}>

                    <Home />
                    </Router>
                </Provider>
                
            </React.Fragment>
        );
    }
}