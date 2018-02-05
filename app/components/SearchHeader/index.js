import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Control } from 'react-keeper'

import SearchInput from '../SearchInput'

class SearchHeader extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="searchHeader">
                <span className="backIcon" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <SearchInput value={this.props.keyword || ''} enterHandle={this.enterHandle.bind(this)}/>
            </div>
        )
    }
    clickHandle(){
        window.history.back();
    }
    enterHandle(value){
        Control.go(`/search/all/${value}`)
    }
}

export default SearchHeader