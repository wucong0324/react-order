import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


class LikeItem extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        const data = this.props.data;
        return (
            <div className="likeItem">
                <div className="itemImg">
                    <img src={data.img} alt={data.title}/>
                </div>
                <div className="itemContent">
                    <div className="itemTitle">
                        <h3>{data.title}</h3>
                        <span className="distance">{data.distance}</span>
                    </div>
                    <p className="subTitle">
                        {data.subTitle}
                    </p>
                    <div className="itemPrice">
                        <span className="price">￥{data.price}</span>
                        <span className="number">已售{data.mumber}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default LikeItem