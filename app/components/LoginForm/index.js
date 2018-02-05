import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import CSSModules from 'react-css-modules'

import styles from './styles.less'

@CSSModules(styles, {
    allowMultiple: true
})

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            username: ''
        }
    }
    render(){
        return (
            <div styleName="loginForm">
                <div styleName="input-container">
                    <i className="icon-tablet"></i>
                    <input
                        type="text"
                        placeholder="输入手机号"
                        value={this.state.username}
                        onChange={this.changeHandle.bind(this)}
                    />
                </div>
                <div styleName="input-container password-container">
                    <i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input type="text" placeholder="输入验证码"/>
                </div>
                <button styleName="btn-login" onClick={this.clickHandle.bind(this)}>登录</button>
            </div>
        )
    }
    changeHandle(e){
        this.setState({
            username: e.target.value
        })
    }
    clickHandle(){
        let username = this.state.username;
        this.props.loginHandle(username);
    }
}

export default LoginForm