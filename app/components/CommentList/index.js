import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import CommentItem from '../CommentItem'

class CommentList extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (
            <div className="commentList">
                {
                    this.props.data.map((item, index) => {
                        return  <CommentItem key={index} data={item}/>
                    })
                }
            </div>
        )
    }
}

export default CommentList