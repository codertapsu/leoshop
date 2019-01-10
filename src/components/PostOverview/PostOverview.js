import React, { Component } from 'react';
import Icon from '@mdi/react';
import {mdiMagnify, mdiCalendarBlank, mdiChevronRight} from "@mdi/js";
import {TruncateText} from "../../services/functions/TruncateText";

// Style
import './PostOverview.scss'

class PostOverview extends Component{
    render() {
        return(
            <div className="post-overview-wrapper">
                <div className="post-image pos-relative">
                    <div className="view-full-image">
                        <span title={'Detail'}>
                            <Icon path={mdiMagnify}
                                  size={.8}
                                  horizontal
                                  vertical
                                  color={'currentColor'}
                                  rotate={180}
                            />
                        </span>
                    </div>
                    <img className={'w-100'} src={require('./blog-04.jpg')} alt=""/>
                </div>
                <div className="post-time text-left">
                    <span className={''}>
                        <Icon path={mdiCalendarBlank}
                              size={.8}
                              horizontal
                              vertical
                              color={'currentColor'}
                              rotate={180}
                        />
                    </span>
                    {/*<span>Jan 20, 2019</span>*/}
                    <time dateTime="2018-06-08T13:19:00Z">June 08, 2018</time>
                </div>
                <h4 className="post-title text-capitalize d-inline-block w-100">
                    <a href="#">From Now we are certified web certified</a>
                </h4>
                <div className="post-intro-text text-left">
                    {TruncateText('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto beatae consequatur cumque doloremque earum eius ex fuga illo illum, ipsam iure iusto laudantium magnam modi molestiae mollitia nam natus nesciunt nulla odit possimus quasi quisquam recusandae reiciendis rerum saepe sint, soluta vel vero vitae voluptas voluptate voluptates. Odit, quas.', 50)}
                </div>
                <div className={'text-left'}>
                    <a href={'#'} className="post-read-more text-capitalize">
                        <span>read more</span>
                        <span className={'ml-2'}>
                        <Icon path={mdiChevronRight}
                              size={.8}
                              horizontal
                              vertical
                              color={'currentColor'}
                              rotate={180}
                        />
                    </span>
                    </a>
                </div>
            </div>
        )
    }
}
export default PostOverview