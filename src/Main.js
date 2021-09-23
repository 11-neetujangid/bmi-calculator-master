import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from "./components/App/App"
import Users from './components/UserForm/Users'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Reducer from './Reducers/Reducer';

const store = createStore(Reducer, applyMiddleware(thunk));
const Main = () => {
    return (
        <Provider store={store}>
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Users} />
                        <Route exact path="/app/:id" component={App} />
                    </Switch>
                </Router>
            </div>
        </Provider>
    )
}
export default Main
