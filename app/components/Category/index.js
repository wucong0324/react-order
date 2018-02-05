import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-keeper'
import ReactSwipe from 'react-swipe'
import CSSModules from 'react-css-modules'

import styles from './styles.less'

@CSSModules(styles, {
    allowMultiple: true
})

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0,
        }
    }

    render() {
        let option = {
            startSlide: 0,
            speed: 400,
            auto: 5000,
            disableScroll: false,   //停止滚动该页面的任何容器
            stopPropagation: false, //停止事件传播
            callback: (index, elem) => {
                // console.log(elem.querySelectorAll('i'));
                this.setState({
                    index
                })
            },
            transitionEnd: (index, elem) => {
                // console.log(elem.textContent)
            }
        };
        return (
            <div className={styles.categoryWrapper}>
                <ReactSwipe className="carousel" swipeOptions={option}>
                    <div>
                        <ul className={styles.categoryItem}>
                            <li>
                                <Link to="/search/meishi">
                                    <i styleName="meishi"></i>
                                    <div>美食</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search/maoyan">
                                    <i styleName="maoyan"></i>
                                    <div>猫眼电影</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search/jiudian">
                                    <i styleName="jiudian"></i>
                                    <div>酒店</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search/xiuxian">
                                    <i styleName="xiuxian"></i>
                                    <div>休闲娱乐</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search/waimai">
                                    <i styleName="waimai"></i>
                                    <div>外卖</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search/huoguo">
                                    <i styleName="huoguo"></i>
                                    <div>火锅</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search/liren">
                                    <i styleName="liren"></i>
                                    <div>丽人</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search/gouwu">
                                    <i styleName="gouwu"></i>
                                    <div>购物</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search/zoubianyou">
                                    <i styleName="zoubianyou"></i>
                                    <div>周边游</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search/ktv">
                                    <i styleName="ktv"></i>
                                    <div>KTV</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.categoryItem}>
                            <li>
                                <Link to="/search/hunsha">
                                    <i styleName="hunsha"></i>
                                    <div>婚纱摄影</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search/shenghuo">
                                    <i styleName="shenghuo"></i>
                                    <div>生活服务</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search/jingdian">
                                    <i styleName="jingdian"></i>
                                    <div>景点</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search/aiche">
                                    <i styleName="aiche"></i>
                                    <div>爱车</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search/yundong">
                                    <i styleName="yundong"></i>
                                    <div>运动健身</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search/qingzi">
                                    <i styleName="qingzi"></i>
                                    <div>亲子</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search/jiazhuang">
                                    <i styleName="jiazhuang"></i>
                                    <div>家装</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search/xuexi">
                                    <i styleName="xuexi"></i>
                                    <div>学习培训</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search/yiliao">
                                    <i styleName="yiliao"></i>
                                    <div>医疗健康</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search/zizhucan">
                                    <i styleName="zizhucan"></i>
                                    <div>自助餐</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.categoryItem}>
                            <li>
                                <Link to="/search/riben">
                                    <i styleName="riben"></i>
                                    <div>日本料理</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search/meifa">
                                    <i styleName="meifa"></i>
                                    <div>美发</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search/meijia">
                                    <i styleName="meijia"></i>
                                    <div>美甲美瞳</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search/meirong">
                                    <i styleName="meirong"></i>
                                    <div>美容spa</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search/shoushen">
                                    <i styleName="shoushen"></i>
                                    <div>瘦身纤体</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search/sheying">
                                    <i styleName="sheying"></i>
                                    <div>亲子摄影</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search/youle">
                                    <i styleName="youle"></i>
                                    <div>亲子游乐</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search/youer">
                                    <i styleName="youer"></i>
                                    <div>幼儿教育</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search/xiyu">
                                    <i styleName="xiyu"></i>
                                    <div>洗浴</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search/quanbu">
                                    <i styleName="quanbu"></i>
                                    <div>全部分类</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </ReactSwipe>
                <div>
                    <ul className={styles.dotWrapper}>
                        <li styleName={this.state.index === 0 ? 'active' : ''}></li>
                        <li styleName={this.state.index === 1 ? 'active' : ''}></li>
                        <li styleName={this.state.index === 2 ? 'active' : ''}></li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default Category