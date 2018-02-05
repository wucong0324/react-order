import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import CSSMoudles from 'react-css-modules'
import axios from 'axios'

import styles from './styles.less'
import loadingImg from '../../static/images/loading.gif'

@CSSMoudles(styles, {
    allowMultiple: true
})

class HomeAd extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            adInfo: []
        }
    }

    render() {
        const adInfo = this.state.adInfo.length
            ? <div className={styles.adBox}>
                {
                    this.state.adInfo.map((item, index) => {
                        return (
                            <div key={index} className={styles.adItem}>
                                <img src={item.img} alt={item.title}/>
                            </div>
                        )
                    })
                }
            </div>
            : <div className={styles.loadingBox}>
                <img src={loadingImg}/>
                <p>加载中……</p>
            </div>;

        return (
            <div className={styles.adWrapper}>
                <h2>超级特惠</h2>
                <div>
                    {adInfo}
                </div>
            </div>
        )
    }

    componentDidMount() {
        axios.get('/api/homead').then((res) => {
            setTimeout(() => {
                this.setState({
                    adInfo: res.data
                })
            }, 2000)
        }).catch((err) => {
            console.log(err)
        })
    }

    componentWillUnmount() {
        //重写组件的setState方法，直接返回空
        this.setState = (state, callback) => {
            return;
        };
    }
}

export default HomeAd