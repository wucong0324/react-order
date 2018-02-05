import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class CurrentCity extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (
            <div className="currentCity"><span className="city">{this.props.cityName}</span><span className="locality">GPS定位</span></div>
        )
    }
}

export default CurrentCity