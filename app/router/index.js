import React from 'react'
// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { HashRouter, BrowserRouter, MemoryRouter, Route, Control } from 'react-keeper'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//本地存储当前城市
import localStore from '../util/localStore'
import * as userInfoActions from '../actions/userinfo'
import {initialCity} from '../actions/userinfo'

import Home from '../containers/Home'
import City from '../containers/City'
import Login from '../containers/Login'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import User from '../containers/User'
import NotFound from '../containers/NotFound'

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <BrowserRouter>
                <div>
                    <Route index cache path="/home" component={Home}></Route>
                    <Route path="/city" component={City}></Route>
                    <Route path="/login(/:router)" component={Login}></Route>
                    <Route path="/search/:category(/:keyword)" component={Search}></Route>
                    <Route path="/detail/:id" component={Detail}></Route>
                    <Route path="/user" component={User}></Route>
                    <Route miss component={NotFound}></Route>
                </div>
            </BrowserRouter>
        )
    }
    componentDidMount(){
        let cityName = localStore.getItem('__cityName__');
        if (cityName == null) {
            cityName = '深圳'
        }
        this.props.userInfoActions.initialCity(cityName);
        // this.props.initialCity(cityName)
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActions, dispatch),
        initialCity: (cityName) => {
            dispatch(initialCity(cityName))
        }
    }
}

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default App