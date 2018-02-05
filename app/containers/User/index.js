import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Control } from 'react-keeper'

import Header from '../../components/Header'
import UserInfo from '../../components/UserInfo'
import Order from '../../components/Order'

import * as userInfoActions from '../../actions/userinfo'
import * as storeActions from '../../actions/store'

class User extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (
            <div>
                <Header title="个人中心" backRouter="/"/>
                <UserInfo username={this.props.userInfo.username} cityName={this.props.userInfo.cityName}/>
                <div style={{ height: '15px',background: '#ededed'}}></div>
                <Order username={this.props.userInfo.username}/>
            </div>
        )
    }
    componentDidMount(){
        if(!this.props.userInfo.username){
            Control.go('/login')
        }
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActions, dispatch),
        storeActions: bindActionCreators(storeActions, dispatch)
    }
}

User = connect(
    mapStateToProps,
    mapDispatchToProps
)(User);

export default User