import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import CSSModules from 'react-css-modules'

import Star from '../Star'
import styles from './styles.less'
@CSSModules(styles, {
    allowMultiple: true
})

class OrderItem extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            commentState: 2,    //0-未评价 1-评价中 2-已评价
            stars: {}
        }
    }
    render(){
        let item = this.props.item;
        return (
            <div styleName="orderItem">
                <div styleName="orderBox">
                    <div styleName="orderImg">
                        <img src={item.img}/>
                    </div>
                    <div styleName="orderComment">
                        {
                            this.state.commentState === 0
                            ?   <a styleName="btn" href="javascript:" onClick={this.showComment.bind(this)}>评论</a>
                            :   this.state.commentState === 1
                                ?   ''
                                :   <a styleName="btn hasCommentBtn" href="javascript:">已评价</a>
                        }
                    </div>
                    <div styleName="orderContent">
                        <p>商户：{item.title}</p>
                        <p>数量：{item.count}</p>
                        <p>价格：￥{item.price}</p>
                    </div>
                </div>
                {
                    this.state.commentState === 1
                        ?   <div styleName="commentBox">
                                <textarea ref="commentText"></textarea>
                                <div styleName="starBox">
                                    <Star clickCallback={this.starClickCallback.bind(this)}></Star>
                                </div>
                                <div styleName="btnBox">
                                    <a styleName="confirm" href="javascript:" onClick={this.submitComment.bind(this)}>提交</a>
                                    <a styleName="cancel" href="javascript:" onClick={this.hideComment.bind(this)}>取消</a>
                                </div>
                            </div>
                        :   ''
                }
            </div>
        )
    }
    componentDidMount(){
        this.setState({
            commentState: this.props.item.commentState
        })
    }
    showComment(){
        this.setState({
            commentState: 1
        })
    }
    hideComment(){
        this.setState({
            commentState: 0
        })
    }
    submitComment(){
        let id = this.props.item.id;
        let commentText = this.refs.commentText.value.trim();
        let star = this.state.stars[id] || 0;
        if(!commentText){
            return
        }
        console.log(id);
        this.props.submitComment(id, commentText, star, this.commentOk.bind(this))
    }
    commentOk(){
        this.setState({
            commentState: 2
        })
    }
    starClickCallback(star){
        let stars = this.state.stars;
        let id = this.props.item.id;
        stars[id] = star;
        this.setState({
            stars
        })
    }
}

export default OrderItem