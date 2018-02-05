import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import CSSModules from 'react-css-modules'
import axios from 'axios'

import CommentList from '../CommentList'
import LoadMore from '../LoadMore'

import loadingImg from '../../static/images/loading.gif'
import styles from './styles.less'

@CSSModules(styles, {
    allowMultiple: true
})

class Comment extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            page: 0,
            hasMore: false,
            isLoadingMore: false
        }
    }
    render(){
        return (
            <div className="detailCommentWrapper">
                <h2>用户点评</h2>
                {
                    this.state.data.length
                        ?   <CommentList data={this.state.data}/>
                        :   <div className={styles.loadingBox}>
                            <img src={loadingImg}/>
                            <p>加载中……</p>
                        </div>
                }
                {
                    this.state.hasMore
                        ? <LoadMore isLoadingMore={this.state.isLoadingMore}
                                    loadMoreFn={this.loadMoreData.bind(this)}/>
                        : ''
                }
            </div>
        )
    }
    componentDidMount(){
        this.getFirstPageData();
    }
    getFirstPageData(){
        this.dataHandle();
    }
    dataHandle(){
        let page = this.state.page;
        let id = this.props.id;
        axios.get(`/api/detail/comment/${page}/${id}`).then((res) => {
            setTimeout(() => {
                this.setState({
                    data: this.state.data.concat(res.data.data),
                    page: page + 1,
                    isLoadingMore: false,
                    hasMore: res.data.hasMore
                })
            }, 1500);
        }).catch((err) => {
            console.log(err);
        })
    }
    loadMoreData(){
        this.setState({
            isLoadingMore: true
        });
        this.dataHandle();
    }
    componentWillUnmount() {
        //重写组件的setState方法，直接返回空
        this.setState = (state, callback) => {
            return;
        };
    }
}

export default Comment