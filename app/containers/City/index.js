import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CSSModules from 'react-css-modules'
import { Control } from 'react-keeper'

import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'

//本地存储当前城市
import localStore from '../../util/localStore'
import * as userInfoActions from '../../actions/userinfo'

import styles from './styles.less'

@CSSModules(styles, {
    allowMultiple: true
})

class City extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (
            <div>
                <Header title="选择城市"/>
                <CurrentCity cityName={this.props.userInfo.cityName}/>
                <CityList changeCity={this.changeCity.bind(this)}/>
            </div>
        )
    }
    componentDidMount(){
        // console.log(this.props.userInfo);
    }
    changeCity(newCity){
        if(!newCity){
            return
        }
        this.props.userInfoActions.updateCity(newCity);
        localStore.setItem('__cityName__', newCity);
        Control.go('/');
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

City = connect(
    mapStateToProps,
    mapDispatchToProps
)(City);

export default City