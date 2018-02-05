import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import CSSModules from 'react-css-modules'

import LikeList from '../LikeList'
import LoadMore from '../LoadMore'

import loadingImg from '../../static/images/loading.gif'
import * as userInfoActions from '../../actions/userinfo'
import styles from './styles.less'

//初始化组件state
const initialState = {
    data: [],
    hasMore: false,
    isLoadingMore: false,
    page: 0
};

class SearchList extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = initialState;
    }
    render(){
        return (
            <div>
                {
                    this.state.data.length
                        ? <LikeList data={this.state.data}/>
                        : <div className={styles.loadingBox}>
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
        let url = this.getPropsHandle();
        this.dataHandle(url);
    }
    loadMoreData(){
        // 记录状态
        this.setState({
            isLoadingMore: true
        });
        let url = this.getPropsHandle();
        this.dataHandle(url);
    }
    getPropsHandle(){
        const cityName = this.props.userInfo.cityName;
        const keyword = decodeURIComponent(this.props.keyword);
        const category = this.props.category;
        const page = this.props.page;
        let url;
        if(keyword){
            url = `/api/search/${page}/${cityName}/${category}/${keyword}`
        }else{
            url = `/api/search/${page}/${cityName}/${category}`
        }
        return url
    }
    dataHandle(url){
        axios.get(url).then((res) => {
            console.log(res);
            const page = this.state.page;
            const hasMore = res.data.hasMore;
            const data = res.data.data;
            setTimeout(() => {
                this.setState({
                    page: page + 1,
                    hasMore: hasMore,
                    data: this.state.data.concat(data),
                    isLoadingMore: false
                });
            }, 1500);

        }).catch((err) => {
            console.log(err);
        })
    }

    //重新搜索更换关键字
    componentDidUpdate(prevProps, prevState){
        const keyword = this.props.keyword;
        const category = this.props.category;
        console.log(keyword, category, prevProps, prevState);
        // 搜索条件完全相等时，忽略。重要！！！
        if (keyword === prevProps.keyword && category === prevProps.category) {
            return
        }
        // 重置state
        this.setState(initialState);
        this.getFirstPageData();
    }
    componentWillUnmount() {
        //重写组件的setState方法，直接返回空
        this.setState = (state, callback) => {
            return;
        };
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

SearchList = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchList);

export default CSSModules(SearchList, styles, {
    allowMultiple: true
});