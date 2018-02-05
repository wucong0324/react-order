import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import CSSMoudles from 'react-css-modules'

import styles from './styles.less'

@CSSMoudles(styles, {
    allowMultiple: true
})

class BuyAndStore extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (
            <div styleName="buyWrapper">
                <div>
                    {
                        this.props.isStore
                            ?   <button styleName="selected" onClick={this.storeHandle.bind(this)}>已收藏</button>
                            :   <button onClick={this.storeHandle.bind(this)}>收藏</button>
                    }
                </div>
                <div>
                    <button onClick={this.buyHandle.bind(this)}>购买</button>
                </div>
            </div>
        )
    }
    buyHandle(){
        this.props.buyHandle()
    }
    storeHandle(){
        this.props.storeHandle()
    }
}

export default BuyAndStore