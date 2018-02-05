import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CSSModules from 'react-css-modules'
import axios from 'axios'

import LikeList from '../LikeList'
import LoadMore from '../LoadMore'

import * as userInfoActions from '../../actions/userinfo'
import loadingImg from '../../static/images/loading.gif'
import styles from './styles.less'

@CSSModules(styles, {
    allowMultiple: true
})

class Like extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 1
        }
    }

    render() {
        return (
            <div className="likeWrapper">
                <h2>猜你喜欢</h2>
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
            </div>
        )
    }

    componentDidMount() {
        setTimeout(() => {
            this.getFirstPageData();
        }, 20)
    }
    //更新城市重新获取数据
    componentDidUpdate(prevProps, prevState){
        if(this.props.userInfo.cityName === prevProps.cityName){
            return
        }
        //重置state
        this.setState({
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 1
        });
        this.getFirstPageData();
    }
    componentWillUnmount() {
        //重写组件的setState方法，直接返回空
        this.setState = (state, callback) => {
            return;
        };
    }

    //获取首屏数据
    getFirstPageData() {
        let cityName = this.props.cityName;
        let page = 0;
        this.dataHandle(cityName, page);
    }

    //加载更多
    loadMoreData() {
        this.setState({
            isLoadingMore: true
        });
        const cityName = this.props.cityName;
        const page = this.state.page;
        this.dataHandle(cityName, page);
        this.setState({
            page: page + 1
        })
    }

    dataHandle(cityName, page) {
        axios.get(`/api/homelist/${cityName}/${page}`).then((res) => {
            setTimeout(() => {
                this.setState({
                    data: this.state.data.concat(res.data.data),
                    hasMore: res.data.hasMore,
                    isLoadingMore: false,
                })
            }, 1500)
        })
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

Like = connect(
    mapStateToProps,
    mapDispatchToProps
)(Like);

export default Like