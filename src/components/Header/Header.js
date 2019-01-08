import React, { Component } from 'react';
import './Header.scss';
import LeoShopLogo from '../../images/LeoShopLogo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.toggleSplit = this.toggleSplit.bind(this);
        this.state = {
            dropdownOpen: false,
            splitButtonOpen: false
        };
    }

    toggleDropDown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    toggleSplit() {
        this.setState({
            splitButtonOpen: !this.state.splitButtonOpen
        });
    }
    render(){
        return (
            <header className={''}>
                <div className="container d-flex align-items-center justify-content-between">
                    <img src={LeoShopLogo} alt={'LeoShop'} className={'logo cursor-pointer'}/>
                    <form action={'/search'} method={'get'} role={'search'} className={'form-search'}>
                        <input className={'outline-none'} type={'search'} autoComplete={'off'} placeholder={'Search our store'}/>
                        <div className={'select-tag'}>
                            <select name={'collection'} id={'collection-option'}>
                                <option value={''} hidden={'hidden'}>All Collection</option>
                                <option value={''}>First Collection</option>
                            </select>
                            <div className={'select-tag__arrow'}>
                                <FontAwesomeIcon icon="chevron-down" />
                            </div>
                        </div>
                        <input className={'outline-none'} type={'submit'} value={'Search'}/>
                    </form>
                    <div className="d-flex align-items-center">
                        <div className={'contact d-flex align-items-center px-4'}>
                            <div className="contact__icon mr-3">
                                <FontAwesomeIcon icon="mobile-alt"/>
                            </div>
                            <a href="tel:+84368438486">+84-368-438-486</a>
                        </div>
                        <div className={'px-4 user'}>
                            <div className="user__icon">
                                <FontAwesomeIcon icon={'user'}/>
                            </div>
                        </div>
                        <div className="shoping-cart px-4">
                            <div className="shoping-cart__icon">
                                <FontAwesomeIcon icon={'shopping-cart'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export  default  Header;