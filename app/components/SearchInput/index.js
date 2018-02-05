import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


class SearchInput extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: ''
        }
    }
    render(){
        return (
            <div className="searchInput">
                <i className="icon-search"></i>
                <input
                    type="text"
                    placeholder="关键字"
                    value={this.state.value}
                    onChange={this.changeHandle.bind(this)}
                    onKeyUp={this.keyUpHandle.bind(this)}
                />
            </div>
        )
    }
    componentDidMount(){
        let keyword = decodeURIComponent(this.props.value) || '';
        this.setState({
            value: keyword
        })
    }
    changeHandle(e){
        this.setState({
            value: e.target.value
        });
    }
    keyUpHandle(e){
        if(e.keyCode !== 13){
            return
        }
        this.props.enterHandle(e.target.value);
    }
}

export default SearchInput