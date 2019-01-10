import React, { Component } from 'react';
import USD from './Icons/USD';
import {FormatUnitValue} from "../../services/functions/FormatUnitValue";
import {JustInputNumber} from "../../services/functions/JustInputNumber";

class FormatUnit extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: FormatUnitValue(this.props.value, 3, 2)
        }
        this.formatData = this.formatData.bind(this);
        this.changeData = this.changeData.bind(this);
        this.editData = this.editData.bind(this);
    }
    static preventTyping (value){
        const regexSplitByDot = /[^.]+/gmi;
        if (value === '' || !value.match(regexSplitByDot)) return false;
        if(!(/[.]/gmi).test(value)) return false;
        if((/[.]$/gmi).test(value)) return false;
        if ((/^[.]/gmi).test(value) && value.match(regexSplitByDot)[0].length <= 2) return false;
        if (!(/^[.]/gmi).test(value) && !(/[.]$/gmi).test(value) && value.match(regexSplitByDot)[1].length <= 2) return false;
        return true

    }
    changeData(e){
        if(!JustInputNumber(e.target.value) || FormatUnit.preventTyping(e.target.value)) return;
        // console.log(e.target)
        this.setState({
            inputValue: e.target.value
        })
        this.props.changeValue(e.target.value)
    }
    formatData(e){
        this.setState({
            inputValue: FormatUnitValue(e.target.value, 3, 2)
        })
    }
    editData(e){
        this.setState({
            inputValue: this.props.value
        })
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
                    <input type={'text'} style={{...styleInput,...{border: this.props.borderInput}}} onBlur={(e) => this.formatData(e)} onFocus={(e) => this.editData(e)} onChange={(e) => this.changeData(e)} value={this.state.inputValue}/>
                    :
                    <span style={styleSpan}>{this.props.value}</span>
                }
            </div>
        )
    }
} export default FormatUnit