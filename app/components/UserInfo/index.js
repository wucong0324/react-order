import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import CSSModules from 'react-css-modules'

import styles from './styles.less'

@CSSModules(styles, {
    allowMultiple: true
})

class UserInfo extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (
            <div styleName="userInfoBox">
                <p>
                    <i className="icon-user"></i>
                    &nbsp;
                    <span>{this.props.username}</span>
                </p>
                <p>
                    <i className="icon-map-marker"></i>
                    &nbsp;
                    <span>{this.props.cityName}</span>
                </p>
            </div>
        )
    }
}

export default UserInfo