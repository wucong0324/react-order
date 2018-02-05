import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import CSSModules from 'react-css-modules'
import axios from 'axios'

import Star from '../Star'

import loadingImg from '../../static/images/loading.gif'
import styles from './styles.less'

@CSSModules(styles, {
    allowMultiple: true
})

class DetailInfo extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            info: null
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.info
                    ?   <div className={styles.detailInfoWrapper}>
                            <div className={styles.infoContainer}>
                                <div className={styles.infoImgBox}>
                                    <img src={this.state.info.img}/>
                                </div>
                                <div className={styles.infoContent}>
                                    <h1>{this.state.info.title}</h1>
                                    <div className={styles.starBox}>
                                        {/* 引用 Star 组件 */}
                                        <Star star={this.state.info.star}/>
                                        <span className={styles.price}>￥{this.state.info.price}</span>
                                    </div>
                                    <p className={styles.subTitle}>{this.state.info.subTitle}</p>
                                </div>
                            </div>
                            <p dangerouslySetInnerHTML={{__html: this.state.info.desc}} className={styles.infoDesc}></p>
                        </div>
                    :   <div className={styles.loadingBox}>
                            <img src={loadingImg}/>
                            <p>加载中……</p>
                        </div>
                }
            </div>
        )
    }
    componentDidMount(){
        let id = this.props.id;
        this.getInfoHandle(id);
    }
    getInfoHandle(id){
        axios.get(`/api/detail/info/${id}`).then((res) => {
            setTimeout(() => {
                this.setState({
                    info: res.data
                })
            }, 1500)
        }).catch((err) => {
            console.log(err);
        })
    }
}

export default DetailInfo