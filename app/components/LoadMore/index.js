import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import loadingImg from '../../static/images/loading.gif'

class LoadMore extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (
            <div className="loadMoreBox" ref="wrapper">
                {
                    this.props.isLoadingMore
                    ?   <span><img src={loadingImg} alt=""/><i>加载中……</i></span>
                    :   <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>
        )
    }
    componentDidMount(){
        const loadMoreFn = this.props.loadMoreFn;
        const wrapper = this.refs.wrapper;
        let timer = null;
        function callback() {
            let top = wrapper.getBoundingClientRect().top;
            let windowHeight = window.screen.height;
            if(top && top < windowHeight){
                // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
                loadMoreFn()
            }
        }
        window.addEventListener('scroll', () => {
            if(this.props.isLoadingMore){
                return
            }
            if(timer){
                clearTimeout(timer);
            }
            timer = setTimeout(callback, 50);
        }, false)
    }
    loadMoreHandle(){
        //执行父组件传过来的函数
        this.props.loadMoreFn();
    }
}

export default LoadMore