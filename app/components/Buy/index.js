import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Control } from 'react-keeper'

import BuyAndStore from '../BuyAndStore'

import * as userInfoActions from '../../actions/userinfo'
import * as storeActions from '../../actions/store'

class Buy extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isStore: false
        }
    }
    render(){
        return (
            <div>
                <BuyAndStore
                    isStore={this.state.isStore}
                    buyHandle={this.buyHandle.bind(this)}
                    storeHandle={this.storeHandle.bind(this)}/>
            </div>
        )
    }
    componentDidMount(){
        this.checkStoreState();
    }
    checkStoreState(){
        let id = this.props.id;
        let store = this.props.store;
        console.log(store, id);
        store.forEach((item, index) => {
            if(item.id === id){
                this.setState({
                    isStore: true
                });
                return;
            }
        })
    }
    //检测是否登陆
    loginCheck(){
        let id = this.props.id;
        let username = this.props.userInfo.username;
        if(!username){
            //跳转登陆
            Control.go('/login',{path: `/detail/${id}`});
            return false
        }
        return true
    }
    //购买事件
    buyHandle(){
        let loginFlag = this.loginCheck();
        if(!loginFlag){
            return
        }
        //购买流程，步骤省略

        Control.go('/user')
    }
    //收藏事件
    storeHandle(){
        let loginFlag = this.loginCheck();
        if(!loginFlag){
            return
        }
        let id = this.props.id;
        if(this.state.isStore){
            this.props.storeActions.remove({id});
        }else{
            this.props.storeActions.add({id});
        }
        this.setState({
            isStore:  !this.state.isStore
        })
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

Buy = connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy);

export default Buy