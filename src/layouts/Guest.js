import React, { Component } from 'react';
import './Guest.scss';

import Header from "../components/Header/Header";
import SideMenu from "../components/SideMenu/SideMenu";
import PopupSubscribe from "../components/PopupSubscribe/PopupSubscribe";
import Main from "../components/Main/Main";
import Icon from '@mdi/react';
import {mdiChevronDown} from "@mdi/js";

class Guest extends Component{
    constructor(props){
        super(props);
        this.state = {
            isShowSubscribe: false,
            isNotShowAgain: false
        }
        this.notShowPopupSubscribe = this.notShowPopupSubscribe.bind(this);
        this.dontShowAgain = this.dontShowAgain.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
    }
    notShowPopupSubscribe(){
        this.setState({
            isShowSubscribe: false
        })
        setTimeout(_ => {
            !this.state.isNotShowAgain && setTimeout(_ => {
                this.setState({
                    isShowSubscribe: true
                })
            },600000)
        }, 5000)
    }
    scrollToTop(){
        window.scrollTo({
            top:0,
            left:0,
            behavior: 'smooth'
        })
    }
    dontShowAgain(event){
        this.setState({
            isNotShowAgain: event
        })
    }
    componentDidMount() {
        setTimeout(_ => {
            this.setState({
                isShowSubscribe: true
            })
        }, 600000)
    }

    render() {
        return (
            <div>
                <div className={'back-to-top cursor-pointer'} onClick={this.scrollToTop}>
                    <Icon path={mdiChevronDown}
                          size={1}
                          horizontal
                          vertical
                          color={'currentColor'}
                    />
                </div>
                <Header />
                <div className="container">
                    <div className="row">
                        <section className={'banner-top w-100'}></section>
                        <div className="col-lg-3">
                            <SideMenu />
                        </div>
                        <div className="col-lg-9">
                            <Main />
                        </div>
                    </div>
                </div>
                {
                    this.state.isShowSubscribe &&
                    <PopupSubscribe handleShow={this.notShowPopupSubscribe} dontShowAgain={this.dontShowAgain} />
                }
            </div>
        )
    }
}
export default Guest;