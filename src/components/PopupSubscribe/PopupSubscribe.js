import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import { ValidateEmail } from '../../services/functions/ValidateEmail';
import { SaveEmailSubscriber } from '../../services/SaveEmailSubscriber'

import './PopupSubscribe.scss'


export class PopupSubscribe extends Component{
    constructor(props){
        super(props);
        this.state ={
            inputValue: '',
            emailInValid: true,
            isSubscribe: false,
            checkNotShowAgain: false
        }
        this.validateEmail = this.validateEmail.bind(this);
        this.submitSubscribe = this.submitSubscribe.bind(this);
        this.handleChangeChk = this.handleChangeChk.bind(this)
    }

    handleShow = () => this.props.handleShow();

    componentDidMount() {
        document.addEventListener('keyup', (e) => {
            if (e.defaultPrevented) {
                return;
            }
            if(e.keyCode === 13 && document.getElementById('submitSubscribe')){
                document.getElementById('submitSubscribe').click();
            }
            if(e.keyCode === 27 && document.getElementById('dialog-closed')){
                document.getElementById('dialog-closed').click();
            }
        })
    }

    validateEmail(event) {
        this.setState({
            inputValue: event.target.value,
            emailInValid: this.state.isSubscribe ? ValidateEmail(event.target.value) : true
        })
    }
    submitSubscribe() {
        this.setState({
            isSubscribe: true,
            emailInValid: ValidateEmail(this.state.inputValue)
        })
        if(ValidateEmail(this.state.inputValue)){
            SaveEmailSubscriber(this.state.inputValue);
            document.getElementById('dialog-closed').click();
            this.props.dontShowAgain(true);
        }
    }
    handleChangeChk(){
        this.setState({
            checkNotShowAgain: !this.state.checkNotShowAgain
        })
    }

    render() {
        return (
            <div className="dialog" id={'newsletterPopup'}>
                <div className="dialog-wrapper">
                    <div id={'dialog-closed'} className="dialog-close cursor-pointer d-flex justify-content-center align-items-center" onClick={() => this.handleShow}>
                        <Icon path={mdiClose}
                              size={1}
                              horizontal
                              vertical
                              color="#cccccc"
                        />
                    </div>
                    <div className="dialog-content row mx-0">
                        <img className={'col-lg-6 px-0'} alt={'ModelLeoShop'} src={require('./Images/newsletter-bg.png')} style={{objectFit: 'cover', objectPosition: 'top center'}} />
                        <div className="col-lg-6">
                            <div className={'dialog-content-right py-4'}>
                                <img src={require('./Images/Logo.png')} alt="LeoShop" style={{width: '50%', maxWidth: '180px'}}/>
                                <p>Đăng ký để nhận thông tin về<br />LeoShop nhanh nhất!</p>
                                <input type="text" className={'subscribe-input text-center w-100 ' + (this.state.emailInValid ? 'mb-3' : 'inValid')} value={this.state.inputValue} onChange={this.validateEmail} placeholder={'Your Email'}/>
                                <div className={this.state.emailInValid ? 'd-none' : 'mb-3'} style={{fontSize: '.85rem', color: '#ff0000'}}>Email không đúng định dạng</div>
                                <button type={'button'} className={'subscribe-button'} id={'submitSubscribe'} onClick={this.submitSubscribe}>Subscribe</button>
                                <div className={'mt-3'}>
                                    <input id={'dontShowAgain'} type="checkbox" defaultChecked={this.state.checkNotShowAgain} onChange={this.handleChangeChk} className={'cursor-pointer d-none'}/>
                                    <svg width="18px" height="18px" viewBox="0 0 18 18">
                                        <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z" />
                                        <polyline points="1 9 7 14 15 4" />
                                    </svg>
                                    <label htmlFor="dontShowAgain" style={{fontSize: '.85rem'}} className={'cursor-pointer text-capitalize mb-0 ml-2'}>don't show this popup again</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PopupSubscribe