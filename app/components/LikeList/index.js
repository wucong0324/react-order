import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-keeper'

import LikeItem from '../LikeItem'

class LikeList extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        const data = this.props.data;
        return (
            <div className="likeBox">
                {
                    data.map((item, index) => {
                        return (
                            <Link key={index} to={'/detail/' + item.id}>
                                <LikeItem data={item} />
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}

export default LikeList