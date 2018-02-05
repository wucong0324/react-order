import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Control } from 'react-keeper'

class Header extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (
            <div className="commonHeader">
                <span className="backIcon" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
    clickHandle(){
        const backRouter = this.props.backRouter;
        if(backRouter){
            Control.go(backRouter);
        }else{
            window.history.back();
        }
    }
}

export default Header