import React, { Component } from 'react';
import USD from './Icons/USD';

class FormatUnit extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        const styleUnit = {
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)'
        }
        const styleInput = {
            width: '100%',
            paddingLeft: this.props.size,
            color: this.props.color
        }
        const styleSpan = {
            color: this.props.color,
            marginLeft: this.props.size
        }
        return(
            <div style={{...{position: 'relative'},...{textAlign: this.props.enableEdit ? '' : 'left'}}}>
                { this.props.unit === 'USD' && <span style={styleUnit}><USD width={this.props.size} fill={this.props.color} /></span> }
                { this.props.enableEdit ?
                    <input type={'text'} style={{...styleInput,...{border: this.props.borderInput}}} onChange={this.props.changeValue} value={this.props.value}/>
                    :
                    <span style={styleSpan}>{this.props.value}</span>
                }
            </div>
        )
    }
} export default FormatUnit