import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import createHistory from 'history/lib/createHashHistory';
const history = createHistory();

import App from './main.js'
import LoginUser from './view/loginuser/loginUser.js'
import Page from './view/page/page.js'

ReactDOM.render(
    <Router history={history} >     
        <Route path="/" component={App} >
            <IndexRoute component={LoginUser}/>
			<Route path="/page" Component={Page} />
        </Route>
    </Router>
    , document.querySelector('#root')
)