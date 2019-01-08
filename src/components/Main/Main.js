import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiChevronLeft } from '@mdi/js';
import { mdiChevronRight } from '@mdi/js';
import './Main.scss'
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import Rating from "../Rating/Rating";

class Main extends Component{

    render() {
        return(
            <div className={'d-flex flex-column'}>
                <ImageCarousel />
                <section id={'banner'} className={'row mt-3'}>
                    <div className="banner-left col-lg-6">
                        <div className="banner-item">
                            <div>
                                <a href="#">
                                    <img src={require('./Images/banner-01.jpg')} alt="Banner 1"/>
                                    <span className="hover-effect hover-effect-1" />
                                    <span className="hover-effect hover-effect-2" />
                                    <span className="hover-effect hover-effect-3" />
                                    <span className="hover-effect hover-effect-4" />
                                </a>
                            </div>
                            <div className="banner-content">
                                <p>Flat 30% OFF</p>
                                <p>on Accessories</p>
                            </div>
                        </div>
                    </div>
                    <div className="banner-right col-lg-6">
                        <div className="banner-item">
                            <div>
                                <a href="#">
                                    <img src={require('./Images/banner-02.jpg')} alt="Banner 2"/>
                                    <span className="hover-effect hover-effect-1" />
                                    <span className="hover-effect hover-effect-2" />
                                    <span className="hover-effect hover-effect-3" />
                                    <span className="hover-effect hover-effect-4" />
                                </a>
                            </div>
                            <div className="banner-content">
                                <p>Flat 30% OFF</p>
                                <p>on Accessories</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id={'slider-products'} className={'mt-3'}>
                    <div className={'d-flex justify-content-between align-items-center'}>
                        <div className={'font-13 color-smooth-black'}>
                            <span className={'text-uppercase cursor-pointer hover-pink mr-4'}>mới nhất</span>
                            <span className={'text-uppercase cursor-pointer hover-pink mr-4'}>nổi bật</span>
                            <span className={'text-uppercase cursor-pointer hover-pink'}>đặc biệt</span>
                        </div>
                        <div className={'color-smooth-black'}>
                            <div className={'d-inline-block cursor-pointer hover-black'}>
                                <Icon path={mdiChevronRight}
                                      size={1.5}
                                      horizontal
                                      vertical
                                      color={'currentColor'}
                                />
                            </div>
                            <div className={'d-inline-block cursor-pointer hover-black'}>
                                <Icon path={mdiChevronLeft}
                                      size={1.5}
                                      horizontal
                                      vertical
                                      color={'currentColor'}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src={require('./Images/product1.jpg')} alt=""/>
                            </div>
                            <div>
                                <div>
                                    <a href="" className={'text-capitalize'}>voluptate velit esse</a>
                                </div>
                                <Rating total={5} name={'test'} marginX={'2px'} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}
export default Main