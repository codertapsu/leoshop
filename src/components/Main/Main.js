import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight} from '@mdi/js';
import './Main.scss'
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import ProductOverview from "../ProductOverview/ProductOverview";
import PostOverview from "../PostOverview/PostOverview";

class Main extends Component{
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
                <section id={'slider-products-1'} className={'mt-3'}>
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
                    <div className={'row'}>
                        <div className={'col-md-3'}>
                            <ProductOverview />
                            <ProductOverview />
                        </div>
                        <div className={'col-md-3'}>
                            <ProductOverview />
                            <ProductOverview />
                        </div>
                        <div className={'col-md-3'}>
                            <ProductOverview />
                            <ProductOverview />
                        </div>
                        <div className={'col-md-3'}>
                            <ProductOverview />
                            <ProductOverview />
                        </div>

                    </div>
                </section>
                <section id={'banner-subject'}>
                    <div className="row">
                        <div className={'banner-wrapper col-sm-12 col-xs-12 p-0'}>
                            <div className={'col-sm-4 col-xs-4'}>
                                <div className={'banner-subject-single'}>
                                    <a href="#" className={'pos-relative banner-image primary-hover-effect'}>
                                        <img className={'w-100 object-fit-cover object-pos-center'} src={require('./Images/banner-03.jpg')} alt=""/>
                                        <div className="pos-absolute top-0">
                                            <div className="title-subject text-uppercase">fashion</div>
                                            <div className="subtitle-subject">Bags</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={'col-sm-4 col-xs-4'}>
                                <div className={'banner-subject-single'}>
                                    <a href="#" className={'pos-relative banner-image primary-hover-effect'}>
                                        <img className={'w-100 object-fit-cover object-pos-center'} src={require('./Images/banner-03.jpg')} alt=""/>
                                        <div className="pos-absolute top-0">
                                            <div className="title-subject text-uppercase">fashion</div>
                                            <div className="subtitle-subject">Bags</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={'col-sm-4 col-xs-4'}>
                                <div className={'banner-subject-single'}>
                                    <a href="#" className={'pos-relative banner-image primary-hover-effect'}>
                                        <img className={'w-100 object-fit-cover object-pos-center'} src={require('./Images/banner-03.jpg')} alt=""/>
                                        <div className="pos-absolute top-0">
                                            <div className="title-subject text-uppercase" style={{color: 'red'}}>fashion</div>
                                            <div className="subtitle-subject">Bags</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id={'slider-products-2'} className={'mt-3'}>
                    <div className={'d-flex justify-content-between align-items-center'}>
                        <div className={'font-13 color-smooth-black'}>
                            <span className={'text-capitalize cursor-pointer hover-pink'}>đặc biệt</span>
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
                    <div className={'row'}>
                        <div className={'col-md-3'}>
                            <ProductOverview />
                        </div>
                        <div className={'col-md-3'}>
                            <ProductOverview />
                        </div>
                        <div className={'col-md-3'}>
                            <ProductOverview />
                        </div>
                        <div className={'col-md-3'}>
                            <ProductOverview />
                        </div>

                    </div>
                </section>
                <section id={'banner-adverts'}>
                    <div className="row">
                        <div className={'banner-wrapper col-sm-12 col-xs-12 p-0'}>
                            <div className={'banner-subject-single col-sm-12 col-xs-12'}>
                                <a href="#" className={'pos-relative banner-image primary-hover-effect'}>
                                    <img className={'w-100 object-fit-cover object-pos-center'} src={require('./Images/banner-06.jpg')} alt=""/>
                                    <div className="pos-absolute top-0">
                                        <div className="title-subject text-uppercase">fashion</div>
                                        <div className="subtitle-subject">Bags</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id={'slider-blog'} className={'mt-3'}>
                    <div className={'d-flex justify-content-between align-items-center'}>
                        <div className={'font-13 color-smooth-black'}>
                            <span className={'text-capitalize cursor-pointer hover-pink'}>blog thời trang</span>
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
                    <div className={'row'}>
                        <div className={'col-md-4'}>
                            <PostOverview />
                        </div>
                        <div className={'col-md-4'}>
                            <PostOverview />
                        </div>
                        <div className={'col-md-4'}>
                            <PostOverview />
                        </div>

                    </div>
                </section>
            </div>
        )
    }

}
export default Main