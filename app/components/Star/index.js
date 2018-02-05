import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Star extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            starArr: [1,2,3,4,5],
            star: 0
        }
    }
    render(){
        let star = this.state.star || 0;
        if(star > 5){
            star = star % 5;
        }
        return (
            <div className="starWrapper">
                {
                    this.state.starArr.map((item, index) => {
                        let lightClass = star >= item ? 'light' : '';
                        return (
                            <i key={index} className={'icon-star '+ lightClass} onClick={this.clickHandle.bind(this, item)}></i>
                        )
                    })
                }
            </div>
        )
    }
    componentDidMount(){
        this.setState({
            star: this.props.star
        })
    }
    clickHandle(item){
        let callback = this.props.clickCallback;
        if(!callback){
            return
        }
        this.setState({
            star: item
        });
        callback(this.state.star);
    }
}

export default Star