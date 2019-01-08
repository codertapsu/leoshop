import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiChevronLeft } from '@mdi/js';
import { mdiChevronRight } from '@mdi/js';
import './ImageCarousel.scss';

class ImageCarousel extends Component{
    constructor(props){
        super(props);
        this.state = {
            widthSlider:'100%',
            heightSlider: '395px'
        }
        this.previousImage = this.previousImage.bind(this);
        this.nextImage = this.nextImage.bind(this);
        this.autoSlider = this.autoSlider.bind(this)
    }
    componentDidMount() {
        const element = document.getElementById('list-image');
        const cloneNode = element.firstChild.cloneNode(true);
        cloneNode.style.transform = `translateX(${this.state.widthSlider})`;
        element.appendChild(cloneNode);
        setInterval(_ => {
            this.autoSlider()
        }, 5000)
    }

    autoSlider(){
        document.getElementById('next-slider').click();
    }

    previousImage(){
        const element = document.getElementById('list-image');
        const nodeSelect = element.childNodes[element.childNodes.length -2];
        const nodeClone = nodeSelect.cloneNode(true);
        element.prepend(nodeClone);
        element.lastChild.remove();
        nodeSelect.style.transform = `translateX(${this.state.widthSlider})`;
    }
    nextImage(){
        const element = document.getElementById('list-image');
        const nodeClone = element.childNodes[1].cloneNode(true);
        nodeClone.style.transform = `translateX(${this.state.widthSlider})`;
        element.childNodes[element.childNodes.length -1].style.transform = `translateX(0)`;
        element.appendChild(nodeClone);
        element.firstChild.remove();
    }
    render(){
        const ImagesList = [
            './Images/image1.jpg',
            './Images/image2.jpg',
            './Images/image3.jpg',
            './Images/image4.jpg',
            './Images/image5.jpg'
        ];
        return(
            <div id={'slider'}>
                <div className="flex-slider" style={{width: this.state.widthSlider}}>
                    <div className="flex-slider__viewport">
                        <ul className={'d-flex list'} id={'list-image'} style={{height: this.state.heightSlider}}>
                            { ImagesList && ImagesList.map((image,index) =>
                                <li key={index} className={'li-test'}>
                                    <img style={{width: this.state.widthSlider}} className={'image-item'} src={require(`${image}`)} alt=""/>
                                </li>
                            ) }
                        </ul>
                    </div>
                    <div className={'flex-slider-nav'}>
                        <div id={'next-slider'} onClick={this.nextImage} className="d-flex justify-content-center align-items-center flex-slider-direction flex-slider-direction__right cursor-pointer">
                            <Icon path={mdiChevronLeft}
                                  size={1}
                                  horizontal
                                  vertical
                                  color={'currentColor'}
                            />
                        </div>
                        <div onClick={this.previousImage} className="d-flex justify-content-center align-items-center flex-slider-direction flex-slider-direction__left cursor-pointer">
                            <Icon path={mdiChevronRight}
                                  size={1}
                                  horizontal
                                  vertical
                                  color={'currentColor'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ImageCarousel