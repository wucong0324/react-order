import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// import { Link } from 'react-router-dom'
import { Link, Control } from 'react-keeper'
import CSSModules from 'react-css-modules'
import styles from './styles.less'
import SearchInput from '../../components/SearchInput'

@CSSModules(styles,{
    allowMultiple: true  //默认false，允许多个样式模块名字。<div styleName='foo bar' />  @CSSModules es7语法，需要安装babel插件编译
})

class HomeHeader extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (
            <div className={styles.flexBox}>
                <div className={styles.site}>
                    <Link to="/city">
                        <span>{this.props.cityName}</span>
                        <i className="icon-angle-down" styleName="siteIcon"></i>
                    </Link>
                </div>
                <SearchInput value="" enterHandle={this.enterHandle.bind(this)}/>
                <div className={styles.avatar}>
                    <Link to="/login">
                        <i className="icon-user"></i>
                    </Link>
                </div>
            </div>
        )
    }
    enterHandle(value){
        Control.go(`/search/all/${value}`)
    }
}

export default HomeHeader