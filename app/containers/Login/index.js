import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Control } from 'react-keeper'

import Header from '../../components/Header'
import LoginForm from '../../components/LoginForm'

import * as userInfoActions from '../../actions/userinfo'


class Login extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checking: true,    //检测是否登陆
        }
    }

    render(){
        return (
            <div>
                <Header title="登陆"/>
                {
                    this.state.checking
                    ?   <div></div>
                    :   <LoginForm loginHandle={this.loginHandle.bind(this)}/>
                }
            </div>
        )
    }
    componentDidMount(){
        this.doCheck();
    }
    doCheck(){
        console.log(this.props.userInfo);
        let userInfo = this.props.userInfo;
        if(userInfo.username){
            this.goUserPage();
        }else{
            this.setState({
                checking: false
            })
        }
    }
    loginHandle(username){
        //保存用户
        this.props.userInfoActions.updateUser(username);
        let path = Control.state ? Control.state.path : '';
        if(path){
            Control.go(path);
        }else{
            this.goUserPage();
        }
    }
    goUserPage(){
        Control.go('/user');
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
    }
}

Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default Login