import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


import Header from '../../components/Header'
import DetailInfo from '../../components/DetailInfo'
import Buy from '../../components/Buy'
import Comment from '../../components/Comment'

class Detail extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        const id = this.props.params.id;
        return (
            <div>
                <Header title="商户详情"/>
                <DetailInfo id={id}/>
                <Buy id={id}/>
                <div style={{ height: '15px',background: '#ededed'}}></div>
                <Comment id={id}/>
            </div>
        )
    }
}

export default Detail