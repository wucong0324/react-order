import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import CSSModules from 'react-css-modules'
import axios from 'axios'

import OrderList from '../OrderList'
import styles from './styles.less'
import loadingImg from '../../static/images/loading.gif'

@CSSModules(styles, {
    allowMultiple: true
})

class Order extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            list: []
        }
    }
    render(){
        return (
            <div styleName="orderWrapper">
                <h2>您的订单</h2>
                {
                    this.state.list.length
                    ?   <OrderList list={this.state.list} submitComment={this.postComment.bind(this)}/>
                    :   <div className={styles.loadingBox}>
                            <img src={loadingImg}/>
                            <p>加载中……</p>
                        </div>
                }
            </div>
        )
    }
    componentDidMount(){
        let username = this.props.username;
        this.getOrderList(username)
    }
    getOrderList(username){
        axios.get(`/api/orderlist/${username}`).then((res) => {
            setTimeout(() => {
                this.setState({
                    list: res.data
                })
            }, 1000)
        }).catch((err) => {
            console.log(err)
        })
    }
    //提交评论
    postComment(id, value, star, callback){
        let params = {
            id,
            value,
            star
        };
        axios.post('/api/submitComment', params).then((res) => {
            if(!res.data.errno){
                callback && callback();
            }
        }).catch((err) => {
            console.log(err);
        })
    }
    componentWillUnmount() {
        //重写组件的setState方法，直接返回空
        this.setState = (state, callback) => {
            return;
        };
    }
}

export default Order