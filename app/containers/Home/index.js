import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import HomeAd from '../../components/HomeAd'
import Like from '../../components/Like'
import * as userInfoActions from '../../actions/userinfo'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName}/>
                <Category />
                <div style={{ height: '15px',background: '#ededed'}}></div>
                <HomeAd />
                <div style={{ height: '15px',background: '#ededed'}}></div>
                <Like cityName={this.props.userInfo.cityName}/>
            </div>
        )
    }
    componentDidMount(){

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

Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default Home