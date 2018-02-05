import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import CSSModules from 'react-css-modules'

import SearchHeader from '../../components/SearchHeader'
import SearchList from '../../components/SearchList'

import styles from './styles.less'

@CSSModules(styles, {
    allowMultiple: true
})

class Search extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        const params = this.props.params;
        return (
            <div>
                <SearchHeader keyword={params.keyword || ''}/>
                <SearchList keyword={params.keyword || ''} category={params.category}/>
            </div>
        )
    }
    componentDidMount(){
        // console.log(decodeURIComponent(this.props.params.keyword));
    }
}

export default Search