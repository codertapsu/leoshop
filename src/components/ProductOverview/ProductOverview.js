import React, { Component } from 'react';
import Icon from '@mdi/react';
import {mdiCartOutline, mdiEyeOutline, mdiHeartOutline} from "@mdi/js";
import Rating from "../Rating/Rating";
import FormatUnit from "../FormatUnit/FormatUnit";

// Style
import './ProductOverview.scss'

class ProductOverview extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValueTest: '800.49'
        }
        this.changeValue = this.changeValue.bind(this)
    }
    changeValue(value){
        this.setState({
            inputValueTest: value
        })
    }

    render() {
        return(
            <div className={'product-overview-wrapper'}>
                <div className={'product-image border-box pos-relative product-box'}>
                    <img src={require('./Images/product1.jpg')} alt="" className={'pos-absolute top-0 left-0'}/>
                    <img src={require('./Images/banner-02.jpg')} alt="Banner 2" className={'pos-absolute top-0 left-0'}/>
                    <div className={'product-action'}>
                        <div>
                            <Icon path={mdiCartOutline}
                                  size={.8}
                                  horizontal
                                  vertical
                                  color={'currentColor'}
                                  rotate={180}
                            />
                        </div>
                        <div>
                            <Icon path={mdiHeartOutline}
                                  size={.8}
                                  horizontal
                                  vertical
                                  color={'currentColor'}
                                  rotate={180}
                            />
                        </div>
                        <div>
                            <Icon path={mdiEyeOutline}
                                  size={.8}
                                  horizontal
                                  vertical
                                  color={'currentColor'}
                                  rotate={180}
                            />
                        </div>
                    </div>
                    <div className="sale pos-absolute text-capitalize">
                        sale
                    </div>
                </div>
                <div className={'product-description text-left'}>
                    <div>
                        <a href="" className={'text-capitalize'}>voluptate velit esse</a>
                    </div>
                    <Rating total={5} name={'test'} marginX={'2px'} />
                    <div className="product-price">
                        <FormatUnit value={this.state.inputValueTest} unit={'USD'} size={15} borderInput={''} enableEdit={true} color={'#d5142f'} changeValue={(e) => this.changeValue(e)} onlyNumber={true} />
                        {/*<span>100%</span>*/}

                    </div>
                </div>
            </div>
        )
    }

}
export default ProductOverview