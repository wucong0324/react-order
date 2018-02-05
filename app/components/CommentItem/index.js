import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Star from '../Star'

class CommentList extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        const data = this.props.data;
        return (
            <div className="commentItem">
                <h3>
                    <i className="icon-user"></i>
                    &nbsp;
                    {data.username}
                </h3>
                <Star star={data.star}/>
                <p>{data.comment}</p>
            </div>
        )
    }
}

export default CommentList