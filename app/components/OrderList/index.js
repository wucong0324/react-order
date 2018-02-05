import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import OrderItem from '../OrderItem'

class OrderList extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        let list = this.props.list;
        return (
            <div>
                {list.map((item, index) => {
                    return <OrderItem key={index} item={item} submitComment={this.props.submitComment}/>
                })}
            </div>
        )
    }
}

export default OrderList